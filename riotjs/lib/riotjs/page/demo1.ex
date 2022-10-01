defmodule Riotjs.Page.Demo1 do
  alias Riotjs.{Common, Data, HistoryState, Logout, Pages, DemoPage}
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag

  def data(conn) do
    logout_post_url = Routes.user_url(conn, :post_logout_data)
    %Data{data_url: Routes.page_url(conn, :get_demo1_data),
	  navbar: Common.gen_navbar(conn, :demo1),
	  history_state: %HistoryState{
	    title: "Demo 1",
	    url: Routes.page_url(conn, :get_demo1_page)},
	  logout: %Logout{
	    post_url: logout_post_url,
	    csrf_token: Tag.csrf_token_value(logout_post_url)},
	  pages: %Pages{demo1: %DemoPage{title: "Demo 1"}}
    }
  end

end
