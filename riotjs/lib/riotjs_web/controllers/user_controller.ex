defmodule RiotjsWeb.UserController do
  use RiotjsWeb, :controller
  alias Riotjs.Page

  def get_register_data(conn, _params) do
    json(conn, Page.Register.data(conn))
  end

  def post_register_data(conn, params) do
    json(conn, Page.Register.process(conn, params))
  end

  def get_login_data(conn, _params) do
    json(conn, Page.Login.data(conn))
  end

  def post_login_data(conn, params) do
    json(conn, Page.Login.process(conn, params))
  end

end
