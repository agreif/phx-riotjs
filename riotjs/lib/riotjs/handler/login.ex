defmodule Riotjs.Handler.Login do
  alias Riotjs.{Common, Data}
  alias Riotjs.Model
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag
  alias Ecto.Changeset
  alias Plug.Conn
  import RiotjsWeb.Gettext

  @doc """
  Logs the user in.

  On success it puts the :login into the session and returns the new data.
  In case of error the login-data with the errors is returned

  Returns {conn, data} tuple
  """
  def process(conn, params) do
    changeset = gen_changeset(params)
    if changeset.valid? do
      %{login: login, password: password} = Changeset.apply_changes(changeset)
      if Model.User.get_by_login_and_password(login, password) do
	conn = conn |> Common.renew_session |> Conn.put_session(:login, login)
	data = [] # does not matter what but not login-data
	{conn, data}
      else
	  data = data(conn, params,
	    changeset
	    |> Changeset.add_error(:misc, "unknown user or wrong password")
	    |> Common.human_errors)
	  {conn, data}
      end
    else
      data = data(conn, params, Common.human_errors(changeset))
      {conn, data}
    end
  end

  defp gen_changeset(params) do
    data = %{}
    types = %{login: :string, password: :string}
    {data, types}
    |> Changeset.cast(params, Map.keys(types))
    |> Changeset.validate_required([:login, :password])
  end

  def data(conn, params \\ [], errors \\ []) do
    locale = Common.locale(conn)
    post_url = Routes.page_url(conn, :post_login_data)
    %Data{data_url: Routes.page_url(conn, :get_login_data),
	  locale: locale,
	  navbar: nil,
	  history_state: %Data.HistoryState{
	    title: "Login",
	    url: Routes.page_url(conn, :get_login_page)},
	  logout: nil,
	  pages: %Data.Pages{
	    login: %Data.LoginPage{
	      form: %Data.Form{post_url: post_url,
			       params: params,
			       errors: errors},
	      csrf_token: Tag.csrf_token_value(post_url),
	      register_url: Routes.page_url(conn, :get_register_page),
	      register_data_url: Routes.page_url(conn, :get_register_data)
	    }
	  },
	  translations: Common.translations(texts_en(), locale)
    }
  end

  defp texts_en() do
    Gettext.with_locale("en", fn ->
      [
	gettext("Password"),
      ]
    end)
  end





end
