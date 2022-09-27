defmodule Riotjs.Page.Demo1 do
  alias Riotjs.{Common, Data, Pages, SimplePage}

  def data(conn) do
    pages = %Pages{demo2: %SimplePage{title: "Demo 1"}}
    %Data{pages: pages,
	  navbar: Common.gen_navbar(conn, :demo1)}
  end

end
