defmodule RiotjsWeb.UserController do
  use RiotjsWeb, :controller
  alias Riotjs.Page

plug :put_view, RiotjsWeb.PageView

  def get_register_page(conn, _params),
    do: render(conn, :page,
	  data_path: Routes.user_path(conn, :get_register_data))

  def get_register_data(conn, _params),
    do: json(conn, Page.Register.data(conn))

  def post_register_data(conn, params),
    do: json(conn, Page.Register.process(conn, params))


  def get_login_page(conn, _params),
    do: render(conn, :page,
	  data_path: Routes.user_path(conn, :get_login_data))

  def get_login_data(conn, _params) do
    json(conn, Page.Login.data(conn))
  end

  def post_login_data(conn, params) do
    {conn, data} = Page.Login.process_login(conn, params)
    json(conn, data)
  end

  def post_logout_data(conn, _params) do
    {conn, data} = Page.Login.process_logout(conn)
    json(conn, data)
  end



end
