defmodule Riotjs.Data do
  @derive Jason.Encoder
  @enforce_keys [:pages, :navbar]
  defstruct [:pages, :navbar]
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



defmodule Riotjs.Pages do
  @derive Jason.Encoder
  defstruct [:error, :demo1, :demo2]
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

