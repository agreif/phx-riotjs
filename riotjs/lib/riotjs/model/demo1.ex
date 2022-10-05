defmodule Riotjs.Model.Demo1 do
  use Ecto.Schema
  import Ecto.Changeset
  alias Riotjs.Repo
  alias Riotjs.Model

  @derive {Jason.Encoder, only: [:attr1, :attr2]}
  schema "demo1s" do
    field :attr1, :string
    field :attr2, :string

    timestamps()
  end

  @doc false
  def changeset(demo1, attrs) do
    demo1
    |> cast(attrs, [:attr1, :attr2])
    |> validate_required([:attr1])
  end

  def list_demo1s do
    Repo.all(Model.Demo1)
  end
end
