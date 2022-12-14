import Config

# Configure your database
#
# The MIX_TEST_PARTITION environment variable can be used
# to provide built-in test partitioning in CI environment.
# Run `mix help test` for more information.
config :riotjs, Riotjs.Repo,
  username: "riotjs_test",
  password: "riotjs_test",
  hostname: "localhost",
  database: "riotjs_test#{System.get_env("MIX_TEST_PARTITION")}",
  maintenance_database: "riotjs_test",
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: 10

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :riotjs, RiotjsWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "tsVce/qKhpwPCGPZ4mLg+quCwf8Vxxeu3bTxXOvxTKj0ExcAgNwKCo5lZxj9WoSx",
  server: false

# In test we don't send emails.
config :riotjs, Riotjs.Mailer, adapter: Swoosh.Adapters.Test

# Print only warnings and errors during test
config :logger, level: :warn

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
