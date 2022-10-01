defmodule Riotjs.Page.Login do
  import Plug.Conn
  alias Riotjs.{Common, Data, HistoryState, Form, Pages, LoginPage, User}
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Riotjs.Page
  alias Riotjs.Repo
  alias Phoenix.HTML.Tag
  alias Ecto.Changeset

  @doc """
  Logs the user in.

  On success it puts the :login into the session.

  Returns {conn, data} tuple
  """
  def process_login(conn, params) do
    changeset = gen_changeset(params)
    if changeset.valid? do
      %{login: login, password: password} = Changeset.apply_changes(changeset)
      if user = User.get_by_login_and_password(login, password) do
	conn = conn |> renew_session |> put_session(:login, login)
	data = Page.Demo1.data(conn)
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

  @doc """
  Logs the user out.

  Clears the session.

  Returns {conn, data} tuple
  """
  def process_logout(conn) do
    {renew_session(conn), Page.Login.data(conn)}
  end

  defp gen_changeset(params) do
    data = %{}
    types = %{login: :string, password: :string}
    {data, types}
    |> Changeset.cast(params, Map.keys(types))
    |> Changeset.validate_required([:login, :password])
  end

  defp renew_session(conn) do
    conn
    |> configure_session(renew: true)
    |> clear_session()
  end

  def data(conn, params \\ [], errors \\ []) do
    post_url = Routes.user_url(conn, :post_login_data)
    %Data{data_url: Routes.user_url(conn, :get_login_data),
	  navbar: nil,
	  history_state: %HistoryState{
	    title: "Login",
	    url: Routes.user_url(conn, :get_login_page)},
	  logout: nil,
	  pages: %Pages{
	    login: %LoginPage{
	      form: %Form{post_url: post_url,
			  params: params,
			  errors: errors},
	      csrf_token: Tag.csrf_token_value(post_url),
	      register_url: Routes.user_url(conn, :get_register_page),
	      register_data_url: Routes.user_url(conn, :get_register_data)
	    }
	  }}
  end

end
