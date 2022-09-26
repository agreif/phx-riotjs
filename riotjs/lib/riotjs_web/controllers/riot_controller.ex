defmodule RiotjsWeb.RiotController do
  use RiotjsWeb, :controller
  alias Riotjs.{Data, Pages, ErrorPage, SimplePage}

  def page(conn, %{"page" => page}) do
    render(conn,
      :riot,
      data_path: Routes.riot_path(conn, :page_data, page))
  end

  def page_data(conn, _params) do
    pages = %Pages{error: %ErrorPage{message: "Not Found"}}
    json(conn, %Data{pages: pages})
  end


  def page1_data(conn, _params) do
    pages = %Pages{page1: %SimplePage{title: "Page1"}}
    json(conn, %Data{pages: pages})
  end

  def page2_data(conn, _params) do
    pages = %Pages{page2: %SimplePage{title: "Page2"}}
    json(conn, %Data{pages: pages})
  end

end
