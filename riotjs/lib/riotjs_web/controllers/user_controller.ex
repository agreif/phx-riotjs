defmodule RiotjsWeb.UserController do
  use RiotjsWeb, :controller

  def register(conn, _params) do
    json(conn, ["register data"])
  end

end
