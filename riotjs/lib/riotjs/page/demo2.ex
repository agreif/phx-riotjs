defmodule Riotjs.Page.Demo2 do
  alias Riotjs.{Common, Data, HistoryState, Pages, SimplePage, }
  alias RiotjsWeb.Router.Helpers, as: Routes

  def data(conn) do
    pages = %Pages{demo2: %SimplePage{title: "Demo 2"}}
    %Data{pages: pages,
	  navbar: Common.gen_navbar(conn, :demo2),
	  history_state: %HistoryState{
	    title: "Demo 2",
	    url: Routes.page_url(conn, :page, :demo2)}}
  end

end
