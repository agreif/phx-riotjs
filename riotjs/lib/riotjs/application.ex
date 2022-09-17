defmodule Riotjs.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      Riotjs.Repo,
      # Start the Telemetry supervisor
      RiotjsWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: Riotjs.PubSub},
      # Start the Endpoint (http/https)
      RiotjsWeb.Endpoint
      # Start a worker by calling: Riotjs.Worker.start_link(arg)
      # {Riotjs.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Riotjs.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    RiotjsWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
