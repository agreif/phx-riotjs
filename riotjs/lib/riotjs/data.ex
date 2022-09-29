defmodule Riotjs.Data do
  @derive Jason.Encoder
  @enforce_keys [:data_url, :navbar, :history_state, :pages]
  defstruct [:data_url, :navbar, :history_state, :pages]
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


defmodule Riotjs.Form do
  @derive Jason.Encoder
  @enforce_keys [:post_url, :params, :errors]
  defstruct [:post_url, :params, :errors]
end


defmodule Riotjs.Pages do
  @derive Jason.Encoder
  defstruct [:error, :demo1, :demo2, :register]
end

defmodule Riotjs.ErrorPage do
  @derive Jason.Encoder
  @enforce_keys [:message]
  defstruct [:message]
end

defmodule Riotjs.SimplePage do
  @derive Jason.Encoder
  @enforce_keys [:title]
  defstruct [:title]
end

defmodule Riotjs.RegisterPage do
  @derive Jason.Encoder
  @enforce_keys [:form, :csrf_token]
  defstruct [:form, :csrf_token]
end

