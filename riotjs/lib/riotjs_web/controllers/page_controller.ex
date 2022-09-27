defmodule RiotjsWeb.PageController do
  use RiotjsWeb, :controller

  def page(conn, %{"page" => page}) do
    render(conn,
      :riot,
      data_path: Routes.page_data_path(conn, :page, page),
      riot_tags: [:body, :nav],
      riot_pages: [:error, :demo1, :demo2]
    )
  end

end
