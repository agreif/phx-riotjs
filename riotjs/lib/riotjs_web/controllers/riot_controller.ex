defmodule RiotjsWeb.RiotController do
  use RiotjsWeb, :controller
  alias Riotjs.{Data, Pages, ErrorPage, SimplePage}

  def page(conn, %{"page" => page}) do
    render(conn,
      :riot,
      data_path: Routes.riot_path(conn, :page_data, page),
      riot_tags: [:body, :nav],
      riot_pages: [:error, :demo1, :demo2]
    )
  end

  def page_data(conn, _params) do
    pages = %Pages{error: %ErrorPage{message: "Not Found"}}
    json(conn, %Data{pages: pages})
  end


  def demo1_data(conn, _params) do
    pages = %Pages{demo1: %SimplePage{title: "Demo1"}}
    json(conn, %Data{pages: pages})
  end

  def demo2_data(conn, _params) do
    pages = %Pages{demo2: %SimplePage{title: "Demo2"}}
    json(conn, %Data{pages: pages})
  end

end
