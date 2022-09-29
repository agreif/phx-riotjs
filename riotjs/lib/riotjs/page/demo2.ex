defmodule Riotjs.Page.Demo2 do
  alias Riotjs.{Common, Data, Pages, SimplePage, }
  alias RiotjsWeb.Router.Helpers, as: Routes

  def data(conn) do
    pages = %Pages{demo2: %SimplePage{title: "Demo 2"}}
    %Data{data_url: Routes.page_url(conn, :get_demo2_data),
	  navbar: Common.gen_navbar(conn, :demo2),
	  history_state: Common.gen_history_state(conn, "Demo 2", :demo2),
	  pages: pages}
  end

end
