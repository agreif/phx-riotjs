defmodule Riotjs.Model.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias Riotjs.Repo
  alias Riotjs.Model

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
    |> validate_length(:password, min: 12, max: 72)
    |> unique_constraint([:login])
  end


  def get_by_login_and_password(login, password) do
    user = Repo.get_by(Model.User, login: login)
    if valid_password?(user, password), do: user
  end

  def valid_password?(%Model.User{password: hashed_password}, password)
      when is_binary(hashed_password) and byte_size(password) > 0 do
    Bcrypt.verify_pass(password, hashed_password)
  end
  def valid_password?(_, _) do
    Bcrypt.no_user_verify()
  end

end
