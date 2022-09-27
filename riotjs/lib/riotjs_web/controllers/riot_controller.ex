defmodule RiotjsWeb.RiotController do
  use RiotjsWeb, :controller

  def page(conn, %{"page" => page}) do
    render(conn,
      :riot,
      data_path: Routes.riot_data_path(conn, :page_data, page),
      riot_tags: [:body, :nav],
      riot_pages: [:error, :demo1, :demo2]
    )
  end

end
