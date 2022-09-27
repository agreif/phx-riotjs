defmodule Riotjs.Page.Demo1 do
  alias Riotjs.{Common, Data, HistoryState, Pages, SimplePage, }
  alias RiotjsWeb.Router.Helpers, as: Routes

  def data(conn) do
    pages = %Pages{demo2: %SimplePage{title: "Demo 1"}}
    %Data{pages: pages,
	  navbar: Common.gen_navbar(conn, :demo1),
	  history_state: %HistoryState{
	    title: "Demo 1",
	    url: Routes.page_url(conn, :page, :demo1)}}
  end

end
