defmodule RiotjsWeb.RiotController do
  use RiotjsWeb, :controller
  alias Riotjs.{Data, Page}



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
    page = %Page{title: "Pageeeeee1"}
    json(conn, %Data{pages: %{page1: page}})
  end

  def page2_data(conn, _params) do
    page = %Page{title: "Pageeeeee 2"}
    json(conn, %Data{pages: %{page2: page}})
  end





end
