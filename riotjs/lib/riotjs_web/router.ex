defmodule RiotjsWeb.Router do
  use RiotjsWeb, :router

  pipeline :browser do
    plug :accepts, ["html", "json"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {RiotjsWeb.LayoutView, :riot_root}
    plug :put_layout, false
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  scope "/", RiotjsWeb do
    pipe_through :browser
    get "/", PageController, :get_index
    get "/:page", PageController, :get_page
  end

  scope "/data", RiotjsWeb do
    pipe_through :browser
    get "/demo1", PageController, :get_demo1_data
    get "/demo2", PageController, :get_demo2_data
    get "/register", UserController, :get_register_data
    post "/register", UserController, :post_register_data
    get "/login", UserController, :get_login_data
    post "/login", UserController, :post_login_data
    get "/:page", PageController, :get_page_data
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
