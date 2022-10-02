defmodule Riotjs.Handler.Demo2 do
  alias Riotjs.{Common, Data}
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag

  def data(conn) do
    logout_post_url = Routes.page_url(conn, :post_logout)
    %Data{data_url: Routes.page_url(conn, :get_demo2_data),
	  navbar: Common.gen_navbar(conn, :demo2),
	  history_state: %Data.HistoryState{
	    title: "Demo 2",
	    url: Routes.page_url(conn, :get_demo2_page)},
	  logout: %Data.Logout{
	    post_url: logout_post_url,
	    csrf_token: Tag.csrf_token_value(logout_post_url)},
	  pages: %Data.Pages{
	    demo2: %Data.DemoPage{title: "Demo 2"}
	  }
    }
  end

end
