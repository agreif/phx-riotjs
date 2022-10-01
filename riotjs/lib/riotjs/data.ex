defmodule Riotjs.Data do
  @derive Jason.Encoder
  @enforce_keys [:data_url, :navbar, :history_state, :logout, :pages]
  defstruct [:data_url, :navbar, :history_state, :logout, :pages]
end


defmodule Riotjs.HistoryState do
  @derive Jason.Encoder
  @enforce_keys [:title, :url]
  defstruct [:title, :url]
end


defmodule Riotjs.Navbar do
  @derive Jason.Encoder
  @enforce_keys [:navitems]
  defstruct [:navitems]
end

defmodule Riotjs.Navitem do
  @derive Jason.Encoder
  @enforce_keys [:label, :is_active, :url, :data_url]
  defstruct [:label, :is_active, :url, :data_url]
end


defmodule Riotjs.Logout do
  @derive Jason.Encoder
  @enforce_keys [:post_url, :csrf_token]
  defstruct [:post_url, :csrf_token]
end


defmodule Riotjs.Form do
  @derive Jason.Encoder
  @enforce_keys [:post_url, :params, :errors]
  defstruct [:post_url, :params, :errors]
end


defmodule Riotjs.Pages do
  @derive Jason.Encoder
  defstruct [:error, :demo1, :demo2, :register, :login]
end

defmodule Riotjs.ErrorPage do
  @derive Jason.Encoder
  @enforce_keys [:message]
  defstruct [:message]
end

defmodule Riotjs.DemoPage do
  @derive Jason.Encoder
  @enforce_keys [:title]
  defstruct [:title]
end

defmodule Riotjs.RegisterPage do
  @derive Jason.Encoder
  @enforce_keys [:form, :csrf_token, :login_url, :login_data_url]
  defstruct [:form, :csrf_token, :login_url, :login_data_url]
end

defmodule Riotjs.LoginPage do
  @derive Jason.Encoder
  @enforce_keys [:form, :csrf_token, :register_url, :register_data_url]
  defstruct [:form, :csrf_token, :register_url, :register_data_url]
end

