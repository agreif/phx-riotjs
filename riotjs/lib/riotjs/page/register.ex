defmodule Riotjs.Page.Register do
  alias Riotjs.{Common, Data, Pages, RegisterPage}
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag

  def data(conn) do
    %Data{data_url: Routes.user_url(conn, :get_register_data),
	  pages: %Pages{
	    register: %RegisterPage{
	      csrf_token: Tag.csrf_token_value(Routes.user_url(conn, :post_register_data)),
	      email: nil
	    }
	  },
	  navbar: nil,
	  history_state: Common.gen_history_state(conn, "Register", :register)}
  end

end
