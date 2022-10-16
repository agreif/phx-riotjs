defmodule Riotjs.Data do
  @moduledoc """
  Top of the Data hierarchy that is sent to the client as JSON.
  """
  @derive Jason.Encoder
  @enforce_keys [:data_url, :locale, :navbar, :history_state, :logout, :pages, :translations]
  defstruct [:data_url, :locale, :navbar, :history_state, :logout, :pages, :translations]
end


defmodule Riotjs.Data.HistoryState do
  @moduledoc """
  Browser history state.
  """
  @derive Jason.Encoder
  @enforce_keys [:title, :url]
  defstruct [:title, :url]
end


defmodule Riotjs.Data.Navbar do
  @moduledoc """
  Navigation bar.
  """
  @derive Jason.Encoder
  @enforce_keys [:navitems]
  defstruct [:navitems]
end

defmodule Riotjs.Data.Navitem do
  @moduledoc """
  Navogation item.
  """
  @derive Jason.Encoder
  @enforce_keys [:label, :is_active, :url, :data_url]
  defstruct [:label, :is_active, :url, :data_url]
end


defmodule Riotjs.Data.Logout do
  @moduledoc """
  Logout data.
  """
  @derive Jason.Encoder
  @enforce_keys [:post_url, :csrf_token]
  defstruct [:post_url, :csrf_token]
end


defmodule Riotjs.Data.Form do
  @moduledoc """
  Generic HTML Form data.
  """
  @derive Jason.Encoder
  @enforce_keys [:post_data_url, :cancel_data_url, :params, :errors]
  defstruct [:post_data_url, :cancel_data_url, :params, :errors]
end


defmodule Riotjs.Data.Pages do
  @moduledoc """
  Container for all available pages.
  """
  @derive Jason.Encoder
  defstruct [:error, :demo1_list, :demo1_add_update,
             :demo2, :register, :login]
end

defmodule Riotjs.Data.ErrorPage do
  @moduledoc """
  Error page.
  """
  @derive Jason.Encoder
  @enforce_keys [:message]
  defstruct [:message]
end

defmodule Riotjs.Data.Demo1ListPage do
  @moduledoc """
  Demo1 list page.
  """
  @derive Jason.Encoder
  @enforce_keys [:demo1_items, :get_demo1_add_data_url]
  defstruct [:demo1_items, :get_demo1_add_data_url]
end

defmodule Riotjs.Data.Demo1Item do
  @moduledoc """
  demo1 item.
  """
  @derive Jason.Encoder
  @enforce_keys [:entity, :get_demo1_update_data_url, :post_demo1_delete_data_url, :csrf_token]
  defstruct [:entity, :get_demo1_update_data_url, :post_demo1_delete_data_url, :csrf_token]
end



defmodule Riotjs.Data.Demo1AddUpdatePage do
  @moduledoc """
  Page to add Demo1 item.
  """
  @derive Jason.Encoder
  @enforce_keys [:title_msgid, :form, :csrf_token]
  defstruct [:title_msgid, :form, :csrf_token]
end






defmodule Riotjs.Data.Demo2Page do
  @moduledoc """
  Demo2 page.
  """
  @derive Jason.Encoder
  @enforce_keys [:rows]
  defstruct [:rows]
end

defmodule Riotjs.Data.RegisterPage do
  @moduledoc """
  Register page.
  """
  @derive Jason.Encoder
  @enforce_keys [:form, :csrf_token, :get_login_url, :get_login_data_url]
  defstruct [:form, :csrf_token, :get_login_url, :get_login_data_url]
end

defmodule Riotjs.Data.LoginPage do
  @moduledoc """
  Login page.
  """
  @derive Jason.Encoder
  @enforce_keys [:form, :csrf_token, :get_register_url, :get_register_data_url]
  defstruct [:form, :csrf_token, :get_register_url, :get_register_data_url]
end

