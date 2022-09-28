defmodule RiotjsWeb.PageController do
  use RiotjsWeb, :controller
  alias Riotjs.{Data, Pages, ErrorPage}
  alias Riotjs.Page

  # generic page handling
  # renders layout with full HTML and body-tag
  def get_page(conn, %{"page" => page}) do
    render(conn,
      :page,
      data_path: Routes.page_path(conn, :get_page_data, page),
      riot_tags: [:body, :nav],
      riot_pages: [:error, :demo1, :demo2, :register]
    )
  end

  # generic page data is not allowed
  # requests for data are always explicit actions
  def get_page_data(conn, _params) do
    pages = %Pages{error: %ErrorPage{message: "Not Found"}}
    json(conn, %Data{data_url: nil,
		     pages: pages,
		     navbar: nil,
		     history_state: nil})
  end

  def get_index(conn, _params) do
    get_page(conn, %{"page" => "demo1"})
  end

  def get_demo1_data(conn, _params) do
    json(conn, Page.Demo1.data(conn))
  end

  def get_demo2_data(conn, _params) do
    json(conn, Page.Demo2.data(conn))
  end

end
