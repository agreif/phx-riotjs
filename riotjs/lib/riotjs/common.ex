defmodule Riotjs.Common do
  alias Riotjs.{Data, Navbar, Navitem, Pages, ErrorPage, SimplePage}
  alias RiotjsWeb.Router.Helpers, as: Routes

  def gen_navbar(conn, active_item) do
    navitems = [
      %Navitem{label: "Demo 1",
	       is_active: active_item == :demo1,
	       url: Routes.riot_path(conn, :page, :demo1),
	       data_url: Routes.riot_data_path(conn, :demo1_data) },
      %Navitem{label: "Demo 2",
	       is_active: active_item == :demo2,
	       url: Routes.riot_path(conn, :page, :demo2),
	       data_url: Routes.riot_data_path(conn, :demo2_data) }
      ]
    %Navbar{navitems: navitems}
  end

end
