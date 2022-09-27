defmodule RiotjsWeb.RiotDataController do
  use RiotjsWeb, :controller
  alias Riotjs.{Data, Pages, ErrorPage}
  alias Riotjs.Page

  def page_data(conn, _params) do
    pages = %Pages{error: %ErrorPage{message: "Not Found"}}
    json(conn, %Data{pages: pages, navbar: nil})
  end


  def demo1_data(conn, _params) do
    json(conn, Page.Demo1.data(conn))
  end

  def demo2_data(conn, _params) do
    json(conn, Page.Demo2.data(conn))
  end

end
