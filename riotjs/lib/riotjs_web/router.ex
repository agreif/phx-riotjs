defmodule RiotjsWeb.Router do
  use RiotjsWeb, :router
  alias RiotjsWeb.Router.Helpers, as: Routes

  pipeline :browser do
    plug :accepts, ["html", "json"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {RiotjsWeb.LayoutView, :riot_root}
    plug :put_layout, false
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug RiotjsWeb.Plugs.Locale
  end

  scope "/", RiotjsWeb do
    pipe_through [:browser, :set_riot_tags, :require_authenticated_user]
    get  "/", PageController, :get_index
    get  "/demo1", PageController, :get_demo1_page
    get  "/demo1_data", PageController, :get_demo1_data
    get  "/demo2", PageController, :get_demo2_page
    get  "/demo2_data", PageController, :get_demo2_data
    post "/logout", PageController, :post_logout
  end

  scope "/", RiotjsWeb do
    pipe_through [:browser, :set_riot_tags, :redirect_if_user_is_authenticated]
    get  "/user/register", PageController, :get_register_page
    get  "/user/register_data", PageController, :get_register_data
    post "/user/register_data", PageController, :post_register_data
    get  "/user/login", PageController, :get_login_page
    get  "/user/login_data", PageController, :get_login_data
    post "/user/login_data", PageController, :post_login_data
  end

  # helpers

  defp set_riot_tags(conn, _opts) do
    if get_session(conn, :login) do
      conn
      |> assign(:riot_tags, [:body, :nav])
      |> assign(:riot_pages, [:error, :demo1, :demo2])
    else
      conn
      |> assign(:riot_tags, [:body])
      |> assign(:riot_pages, [:register, :login])
    end
  end

  defp require_authenticated_user(conn, _opts) do
    if get_session(conn, :login) do
      conn
    else
      conn
      |> redirect(to: Routes.page_path(conn, :get_login_page))
      |> halt()
    end
  end

  defp redirect_if_user_is_authenticated(conn, _opts) do
    if get_session(conn, :login) do
      conn
      |> redirect(to: Routes.page_path(conn, :get_index))
      |> halt()
    else
      conn
    end
  end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: RiotjsWeb.Telemetry
    end
  end

  # Enables the Swoosh mailbox preview in development.
  #
  # Note that preview only shows emails that were sent by the same
  # node running the Phoenix server.
  if Mix.env() == :dev do
    scope "/dev" do
      pipe_through :browser

      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
