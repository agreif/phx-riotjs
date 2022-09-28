defmodule RiotjsWeb.UserController do
  use RiotjsWeb, :controller
  alias Riotjs.Page

  def get_register_data(conn, _params) do
    json(conn, Page.Register.data(conn))
  end

  def post_register_data(conn, json) do


    json(conn, Page.Demo1.data(conn))
  end

end
