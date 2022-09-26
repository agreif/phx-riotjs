defmodule RiotjsWeb.RiotController do
  use RiotjsWeb, :controller
  alias Riotjs.{Data}



  def page(conn, %{"page" => page}) do
    render(conn,
      :riot,
      data_path: Routes.riot_path(conn, :page_data, page))
  end

  def page_data(conn, %{"page" => page}) do
    json(conn,
      %{page: page,
	data_path: Routes.riot_path(conn, :page_data, page)})
  end


  def page1_data(conn, _params) do
    json(conn, %Data{pages: [1,2,3]})
  end





end
