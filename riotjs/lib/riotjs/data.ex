defmodule Riotjs.Data do
  @derive Jason.Encoder
  defstruct pages: nil
end

defmodule Riotjs.Pages do
  @derive Jason.Encoder
  defstruct error: nil,
    page1: nil,
    page2: nil
end

defmodule Riotjs.ErrorPage do
  @derive Jason.Encoder
  defstruct message: nil
end

defmodule Riotjs.SimplePage do
  @derive Jason.Encoder
  defstruct title: nil
end

