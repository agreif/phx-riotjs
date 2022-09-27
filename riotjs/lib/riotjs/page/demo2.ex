defmodule Riotjs.Page.Demo2 do
  alias Riotjs.{Common, Data, Pages, SimplePage}

  def data(conn) do
    pages = %Pages{demo2: %SimplePage{title: "Demo 2"}}
    %Data{pages: pages,
	  navbar: Common.gen_navbar(conn, :demo2)}
  end

end
