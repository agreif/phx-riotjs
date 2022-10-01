defmodule Riotjs.Common do
  alias Riotjs.{Data, Navbar, Navitem, HistoryState}
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Ecto.Changeset

  def gen_navbar(conn, active_item) do
    navitems = [
      %Navitem{label: "Demo 1",
	       is_active: active_item == :demo1,
	       url: Routes.page_url(conn, :get_demo1_page),
	       data_url: Routes.page_url(conn, :get_demo1_data) },
      %Navitem{label: "Demo 2",
	       is_active: active_item == :demo2,
	       url: Routes.page_url(conn, :get_demo2_page),
	       data_url: Routes.page_url(conn, :get_demo2_data) },
      ]
    %Navbar{navitems: navitems}
  end

  def add_error(errors, {field, message}) do
    case Enum.find(errors, &(elem(&1,0) == field)) do
      {_, messages} ->
	Enum.map(errors,
	  fn tuple ->
	    case tuple do
	      {field, ms} -> {field, [message | ms]}
	      t -> t
	    end
	  end
	)
      nil -> [{field, [message]} | errors]
    end
  end

  def human_errors(changeset) do
    Changeset.traverse_errors(changeset, fn {msg, opts} ->
      Enum.reduce(opts, msg, fn {key, value}, acc ->
	String.replace(acc, "%{#{key}}", to_string(value))
      end)
    end)
  end
end
