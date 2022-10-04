defmodule Riotjs.Common do
  alias Riotjs.{Data}
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Plug.Conn
  alias Ecto.Changeset

  def gen_navbar(conn, active_item) do
    navitems = [
      %Data.Navitem{label: "Demo 1",
	       is_active: active_item == :demo1,
	       url: Routes.page_url(conn, :get_demo1_page),
	       data_url: Routes.page_url(conn, :get_demo1_data) },
      %Data.Navitem{label: "Demo 2",
	       is_active: active_item == :demo2,
	       url: Routes.page_url(conn, :get_demo2_page),
	       data_url: Routes.page_url(conn, :get_demo2_data) },
      ]
    %Data.Navbar{navitems: navitems}
  end

  def locale(conn) do
    Conn.get_session(conn, "locale") || "en"
  end

  def translations(domain, texts_en, locale) do
    texts_en
    |> Map.new(fn k -> {k,
		       Gettext.with_locale(locale,
			 fn -> Gettext.dgettext(RiotjsWeb.Gettext, domain, k) end)
		       } end)
  end

  def add_error(errors, {field, message}) do
    case Enum.find(errors, &(elem(&1,0) == field)) do
      {_, _} ->
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

  def renew_session(conn) do
    conn
    |> Conn.configure_session(renew: true)
    |> Conn.clear_session()
  end

  def human_errors(changeset, locale) do
      Gettext.with_locale(locale, fn ->
	Changeset.traverse_errors(changeset, fn {msg, opts} ->
          msg = if count = opts[:count] do
	    Gettext.dngettext(RiotjsWeb.Gettext, "errors", msg, msg, count, opts)
	  else
	    Gettext.dgettext(RiotjsWeb.Gettext, "errors", msg, opts)
	  end
	  Enum.reduce(opts, msg, fn {key, value}, acc ->
	    String.replace(acc, "%{#{key}}", to_string(value))
	  end)
      end)
    end)
  end
end
