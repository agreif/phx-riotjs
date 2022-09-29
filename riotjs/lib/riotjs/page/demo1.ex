defmodule Riotjs.Page.Demo1 do
  alias Riotjs.{Common, Data, Pages, SimplePage}
  alias RiotjsWeb.Router.Helpers, as: Routes

  def data(conn) do
    pages = %Pages{demo1: %SimplePage{title: "Demo 1"}}
    %Data{data_url: Routes.page_url(conn, :get_demo1_data),
	  navbar: Common.gen_navbar(conn, :demo1),
	  history_state: Common.gen_history_state(conn, "Demo 1", :demo1),
	  pages: pages}
  end

end
