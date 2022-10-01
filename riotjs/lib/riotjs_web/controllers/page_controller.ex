defmodule RiotjsWeb.PageController do
  use RiotjsWeb, :controller
  alias Riotjs.Page


  def get_index(conn, params) do
    get_demo1_page(conn, params)
  end

  def get_demo1_page(conn, _params),
    do: render(conn, :page,
	  data_path: Routes.page_path(conn, :get_demo1_data))

  def get_demo1_data(conn, _params),
    do: json(conn, Page.Demo1.data(conn))


  def get_demo2_page(conn, _params),
    do: render(conn, :page,
	  data_path: Routes.page_path(conn, :get_demo2_data))

  def get_demo2_data(conn, _params),
    do: json(conn, Page.Demo2.data(conn))

end
