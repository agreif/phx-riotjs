defmodule Riotjs.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :login, :string, null: false
      add :email, :string, null: false
      add :password, :string, null: false

      timestamps()
    end
  end
end
