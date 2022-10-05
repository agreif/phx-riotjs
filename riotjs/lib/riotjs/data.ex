defmodule Riotjs.Data do
  @derive Jason.Encoder
  @enforce_keys [:data_url, :locale, :navbar, :history_state, :logout, :pages, :translations]
  defstruct [:data_url, :locale, :navbar, :history_state, :logout, :pages, :translations]
end


defmodule Riotjs.Data.HistoryState do
  @derive Jason.Encoder
  @enforce_keys [:title, :url]
  defstruct [:title, :url]
end


defmodule Riotjs.Data.Navbar do
  @derive Jason.Encoder
  @enforce_keys [:navitems]
  defstruct [:navitems]
end

defmodule Riotjs.Data.Navitem do
  @derive Jason.Encoder
  @enforce_keys [:label, :is_active, :url, :data_url]
  defstruct [:label, :is_active, :url, :data_url]
end


defmodule Riotjs.Data.Logout do
  @derive Jason.Encoder
  @enforce_keys [:post_url, :csrf_token]
  defstruct [:post_url, :csrf_token]
end


defmodule Riotjs.Data.Form do
  @derive Jason.Encoder
  @enforce_keys [:post_url, :params, :errors]
  defstruct [:post_url, :params, :errors]
end


defmodule Riotjs.Data.Pages do
  @derive Jason.Encoder
  defstruct [:error, :demo1, :demo1_add,
	     :demo2, :register, :login]
end

defmodule Riotjs.Data.ErrorPage do
  @derive Jason.Encoder
  @enforce_keys [:message]
  defstruct [:message]
end

defmodule Riotjs.Data.Demo1Page do
  @derive Jason.Encoder
  @enforce_keys [:demo1s, :add_demo1_data_url]
  defstruct [:demo1s, :add_demo1_data_url]
end

defmodule Riotjs.Data.Demo1AddPage do
  @derive Jason.Encoder
  @enforce_keys [:form, :csrf_token, :demo1_data_url]
  defstruct [:form, :csrf_token, :demo1_data_url]
end



defmodule Riotjs.Data.Demo2Page do
  @derive Jason.Encoder
  @enforce_keys []
  defstruct []
end

defmodule Riotjs.Data.RegisterPage do
  @derive Jason.Encoder
  @enforce_keys [:form, :csrf_token, :login_url, :login_data_url]
  defstruct [:form, :csrf_token, :login_url, :login_data_url]
end

defmodule Riotjs.Data.LoginPage do
  @derive Jason.Encoder
  @enforce_keys [:form, :csrf_token, :register_url, :register_data_url]
  defstruct [:form, :csrf_token, :register_url, :register_data_url]
end

