defmodule Riotjs.Page.Register do
  alias Riotjs.{Common, Data, Pages, RegisterPage}

  def data(conn) do
    pages = %Pages{register: %RegisterPage{email: nil}}
    %Data{pages: pages,
	  navbar: nil,
	  history_state: Common.gen_history_state(conn, "Register", :register)}
  end

end
