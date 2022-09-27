defmodule Riotjs.Common do
  alias Riotjs.{Data, Navbar, Navitem, HistoryState,
		Pages, ErrorPage, SimplePage}
  alias RiotjsWeb.Router.Helpers, as: Routes

  def gen_navbar(conn, active_item) do
    navitems = [
      %Navitem{label: "Demo 1",
	       is_active: active_item == :demo1,
	       url: Routes.page_path(conn, :page, :demo1),
	       data_url: Routes.page_data_path(conn, :demo1) },
      %Navitem{label: "Demo 2",
	       is_active: active_item == :demo2,
	       url: Routes.page_path(conn, :page, :demo2),
	       data_url: Routes.page_data_path(conn, :demo2) },
      %Navitem{label: "Register",
	       is_active: active_item == :register,
	       url: Routes.page_path(conn, :page, :register),
	       data_url: Routes.page_data_path(conn, :register) },
      ]
    %Navbar{navitems: navitems}
  end

  def gen_history_state(conn, title, page_id) do
    %HistoryState{
      title: title,
      url: Routes.page_url(conn, :page, page_id)}
  end

end
