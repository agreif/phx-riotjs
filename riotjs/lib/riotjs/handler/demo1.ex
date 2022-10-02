defmodule Riotjs.Handler.Demo1 do
  alias Riotjs.{Common, Data}
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag

  def data(conn) do
    logout_post_url = Routes.page_url(conn, :post_logout)
    %Data{data_url: Routes.page_url(conn, :get_demo1_data),
	  navbar: Common.gen_navbar(conn, :demo1),
	  history_state: %Data.HistoryState{
	    title: "Demo 1",
	    url: Routes.page_url(conn, :get_demo1_page)},
	  logout: %Data.Logout{
	    post_url: logout_post_url,
	    csrf_token: Tag.csrf_token_value(logout_post_url)},
	  pages: %Data.Pages{
	    demo1: %Data.DemoPage{title: "Demo 1"}
	  }
    }
  end

end
