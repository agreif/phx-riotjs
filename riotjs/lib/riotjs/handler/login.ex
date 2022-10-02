defmodule Riotjs.Handler.Login do
  alias Riotjs.{Common, Data}
  alias Riotjs.Model
  alias Riotjs.Handler
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag
  alias Ecto.Changeset
  alias Plug.Conn

  @doc """
  Logs the user in.

  On success it puts the :login into the session.

  Returns {conn, data} tuple
  """
  def process(conn, params) do
    changeset = gen_changeset(params)
    if changeset.valid? do
      %{login: login, password: password} = Changeset.apply_changes(changeset)
      if Model.User.get_by_login_and_password(login, password) do
	conn = conn |> Common.renew_session |> Conn.put_session(:login, login)
	data = Handler.Demo1.data(conn)
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
    post_url = Routes.page_url(conn, :post_login_data)
    %Data{data_url: Routes.page_url(conn, :get_login_data),
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
	  }}
  end

end
