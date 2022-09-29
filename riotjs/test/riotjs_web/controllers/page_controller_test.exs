defmodule RiotjsWeb.PageControllerTest do
  use RiotjsWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get(conn, "/")
    assert html_response(conn, 200) =~ "<body-tag>"
  end
end
