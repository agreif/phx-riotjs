defmodule RiotjsWeb.PageController do
  use RiotjsWeb, :controller
  alias Riotjs.Handler

  # index

  def get_index(conn, params) do
    get_demo1_page(conn, params)
  end

  # demo 1

  def get_demo1_page(conn, _params),
    do: render(conn, :page,
	  data_path: Routes.page_path(conn, :get_demo1_data))

  def get_demo1_data(conn, _params),
    do: json(conn, Handler.Demo1.data(conn))

  def get_demo1_add_data(conn, _params),
    do: json(conn, Handler.Demo1Add.data(conn))

  def post_demo1_add_data(conn, params),
    do: json(conn, Handler.Demo1Add.process(conn, params))

  # demo 2

  def get_demo2_page(conn, _params),
    do: render(conn, :page,
	  data_path: Routes.page_path(conn, :get_demo2_data))

  def get_demo2_data(conn, _params),
    do: json(conn, Handler.Demo2.data(conn))

  # register

  def get_register_page(conn, _params),
    do: render(conn, :page,
	  data_path: Routes.page_path(conn, :get_register_data))

  def get_register_data(conn, _params),
    do: json(conn, Handler.Register.data(conn))

  def post_register_data(conn, params),
    do: json(conn, Handler.Register.process(conn, params))

  # login

  def get_login_page(conn, _params),
    do: render(conn, :page,
	  data_path: Routes.page_path(conn, :get_login_data))

  def get_login_data(conn, _params),
    do: json(conn, Handler.Login.data(conn))


  def post_login_data(conn, params) do
    {conn, data} = Handler.Login.process(conn, params)
    json(conn, data)
  end

  # logout

  def post_logout(conn, _params) do
    conn
    |> Handler.Logout.process
    |> json(nil)
  end


end
