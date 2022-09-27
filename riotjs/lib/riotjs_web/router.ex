defmodule RiotjsWeb.Router do
  use RiotjsWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {RiotjsWeb.LayoutView, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  scope "/", RiotjsWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  # Other scopes may use custom stacks.
  # scope "/api", RiotjsWeb do
  #   pipe_through :api
  # end

  pipeline :riot_html do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {RiotjsWeb.LayoutView, :riot_root}
    plug :put_layout, false
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  scope "/", RiotjsWeb do
    pipe_through :riot_html
    get "/:page", RiotController, :page
  end

  pipeline :riot_data do
    plug :accepts, ["json"]
  end

  scope "/data", RiotjsWeb do
    pipe_through :riot_data
    get "/demo1", RiotDataController, :demo1_data
    get "/demo2", RiotDataController, :demo2_data
    get "/:page", RiotDataController, :page_data
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
