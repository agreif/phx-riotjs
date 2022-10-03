defmodule Riotjs.Handler.Demo1 do
  alias Riotjs.{Common, Data}
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag
  import RiotjsWeb.Gettext

  @gettext_domain "demo1"

  def data(conn) do
    logout_post_url = Routes.page_url(conn, :post_logout)
    locale = Common.locale(conn)
    %Data{data_url: Routes.page_url(conn, :get_demo1_data),
	  locale: locale,
	  navbar: Common.gen_navbar(conn, :demo1),
	  history_state: %Data.HistoryState{
	    title: "Demo 1",
	    url: Routes.page_url(conn, :get_demo1_page)},
	  logout: %Data.Logout{
	    post_url: logout_post_url,
	    csrf_token: Tag.csrf_token_value(logout_post_url)},
	  pages: %Data.Pages{
	    demo1: %Data.DemoPage{}
	  },
	  translations: Common.translations(@gettext_domain, texts_en(), locale)
    }
  end

  defp texts_en() do
    Gettext.with_locale("en", fn ->
      [
	dgettext(@gettext_domain, "Demo 1 Page"),
      ]
    end)
  end

end
