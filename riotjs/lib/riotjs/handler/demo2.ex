defmodule Riotjs.Handler.Demo2 do
  alias Riotjs.{Common, Data}
  alias RiotjsWeb.Router.Helpers, as: Routes
  import RiotjsWeb.Gettext

  @gettext_domain "demo2"

  defp texts_en() do
    Gettext.with_locale("en", fn ->
      [
	dgettext(@gettext_domain, "Demo 2 Page"),
      ]
    end)
  end

  def gen_data(conn) do
    locale = Common.locale(conn)
    %Data{data_url: Routes.page_url(conn, :get_demo2_data),
	  locale: locale,
	  navbar: Common.gen_navbar(conn, :demo2),
	  history_state: %Data.HistoryState{
	    title: "Demo 2",
	    url: Routes.page_url(conn, :get_demo2_page)},
	  logout: Common.gen_logout_data(conn),
	  pages: %Data.Pages{
	    demo2: %Data.Demo2Page{}
	  },
	  translations: Common.translations(@gettext_domain, texts_en(), locale)
    }
  end

end
