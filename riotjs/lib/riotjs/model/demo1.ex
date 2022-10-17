defmodule Riotjs.Model.Demo1 do
  @moduledoc """
  Demo1 Model.
  """

  use Ecto.Schema
  import Ecto.{Changeset, Query}
  alias Riotjs.{Model, Repo}

  @derive {Jason.Encoder, only: [:id, :attr1, :attr2]}
  schema "demo1s" do
    field :attr1, :string
    field :attr2, :string

    timestamps()
  end

  @doc false
  def changeset(demo1, attrs) do
    demo1
    |> cast(attrs, [:attr1, :attr2], empty_values: [])
    |> Model.Common.validate_required_with_change(:attr1)
  end

  def get_demo1s do
    Repo.all(
      from(d in Model.Demo1,
        order_by: d.attr1
      )
    )
  end

  def get_demo1(demo1_id) do
    Model.Demo1
    |> Repo.get_by!([id: demo1_id])
  end

  def create_demo1(attrs) do
    Model.Demo1.changeset(%Model.Demo1{}, attrs)
    |> Repo.insert
  end

  def update_demo1(demo1_id, attrs) do
    demo1 = get_demo1(demo1_id)
    changeset = Model.Demo1.changeset(demo1, attrs)
    if changeset.valid? do
      Repo.update(changeset)
    else
      {:error, changeset}
    end
  end

  def delete_demo1(demo1_id) do
    get_demo1(demo1_id)
    |> Repo.delete
  end

end
