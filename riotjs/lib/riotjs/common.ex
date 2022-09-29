defmodule Riotjs.Common do
  alias Riotjs.{Data, Navbar, Navitem, HistoryState,
		Pages, ErrorPage, SimplePage}
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Ecto.Changeset

  def gen_navbar(conn, active_item) do
    navitems = [
      %Navitem{label: "Demo 1",
	       is_active: active_item == :demo1,
	       url: get_page_url(conn, :demo1),
	       data_url: Routes.page_url(conn, :get_demo1_data) },
      %Navitem{label: "Demo 2",
	       is_active: active_item == :demo2,
	       url: get_page_url(conn, :demo2),
	       data_url: Routes.page_url(conn, :get_demo2_data) },
      %Navitem{label: "Register",
	       is_active: active_item == :register,
	       url: get_page_url(conn, :register),
	       data_url: Routes.user_url(conn, :get_register_data) },
      %Navitem{label: "Login",
	       is_active: active_item == :login,
	       url: get_page_url(conn, :login),
	       data_url: Routes.user_url(conn, :get_login_data) },
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

  def get_page_url(conn, page_id) do
    Routes.page_url(conn, :get_page, page_id)
  end

  def gen_history_state(conn, title, page_id) do
    %HistoryState{
      title: title,
      url: Routes.page_url(conn, :get_page, page_id)}
  end

  def human_errors(changeset) do
    Changeset.traverse_errors(changeset, fn {msg, opts} ->
      Enum.reduce(opts, msg, fn {key, value}, acc ->
	String.replace(acc, "%{#{key}}", to_string(value))
      end)
    end)
  end
end
