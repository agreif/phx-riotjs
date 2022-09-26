defmodule Riotjs.Data do

  @derive Jason.Encoder
  defstruct pages: %{
    page1: nil,
    page2: nil
  }

end
