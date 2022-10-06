defmodule Riotjs.Handler.Logout do
  alias Riotjs.{Common}

  @doc """
  Logs the user out.

  Clears the session.

  Returns conn
  """
  def process_logout(conn) do
    Common.renew_session(conn)
  end

end
