defmodule RiotjsWeb.PageController do
  use RiotjsWeb, :controller

  def index(conn, _params) do
    page(conn, %{"page" => "demo1"})
  end

  def page(conn, %{"page" => page}) do
    render(conn,
      :page,
      data_path: Routes.page_data_path(conn, :page, page),
      riot_tags: [:body, :nav],
      riot_pages: [:error, :demo1, :demo2]
    )
  end

end
