defmodule Riotjs.Repo do
  use Ecto.Repo,
    otp_app: :riotjs,
    adapter: Ecto.Adapters.Postgres
end
