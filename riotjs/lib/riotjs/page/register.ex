defmodule Riotjs.Page.Register do
  alias Riotjs.{Common, Data, Pages, RegisterPage}
  alias RiotjsWeb.Router.Helpers, as: Routes

  def data(conn) do
    pages = %Pages{register: %RegisterPage{email: nil}}
    %Data{data_url: Routes.user_url(conn, :get_register_data),
	  pages: pages,
	  navbar: nil,
	  history_state: Common.gen_history_state(conn, "Register", :register)}
  end

end
