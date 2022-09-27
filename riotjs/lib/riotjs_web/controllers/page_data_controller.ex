defmodule RiotjsWeb.PageDataController do
  use RiotjsWeb, :controller
  alias Riotjs.{Data, Pages, ErrorPage}
  alias Riotjs.Page

  def page(conn, _params) do
    pages = %Pages{error: %ErrorPage{message: "Not Found"}}
    json(conn, %Data{pages: pages,
		     navbar: nil,
		     history_state: nil})
  end

  def demo1(conn, _params) do
    json(conn, Page.Demo1.data(conn))
  end

  def demo2(conn, _params) do
    json(conn, Page.Demo2.data(conn))
  end

end
