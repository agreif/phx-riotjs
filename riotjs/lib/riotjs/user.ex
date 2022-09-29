defmodule Riotjs.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :email, :string
    field :login, :string
    field :password, :string

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:login, :email, :password])
    |> validate_required([:login, :email, :password])
    |> validate_length(:login, min: 6)
    |> validate_format(:email, ~r/@/)
    |> validate_length(:email, min: 6)
    |> unique_constraint([:login])
  end
end
