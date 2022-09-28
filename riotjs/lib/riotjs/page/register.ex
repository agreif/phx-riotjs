defmodule Riotjs.Page.Register do
  alias Riotjs.{Common, Data, Pages, RegisterPage}
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag

  def data(conn) do
    post_url = Routes.user_url(conn, :post_register_data)
    %Data{data_url: Routes.user_url(conn, :get_register_data),
	  pages: %Pages{
	    register: %RegisterPage{
	      post_url: post_url,
	      csrf_token: Tag.csrf_token_value(post_url),
	      email: nil
	    }
	  },
	  navbar: nil,
	  history_state: Common.gen_history_state(conn, "Register", :register)}
  end

end
