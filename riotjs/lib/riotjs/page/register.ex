defmodule Riotjs.Page.Register do
  alias Riotjs.{Common, Data, Form, Pages, RegisterPage}
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Riotjs.Page
  alias Phoenix.HTML.Tag
  alias Ecto.Changeset

  def process(conn, params) do
    data = %{}
    types = %{email: :string, password: :string}
    changeset =
    {data, types}
    |> Changeset.cast(params, Map.keys(types))
    |> Changeset.validate_format(:email, ~r/@/)
    |> Changeset.validate_length(:email, min: 6)
    |> Changeset.validate_required([:email, :password])

    if changeset.valid? do
      result = Changeset.apply_changes(changeset)
      Page.Demo1.data(conn)
    else
	data(conn,
	  changeset.params,
	  Common.human_errors(changeset))
    end
  end

  def data(conn, params \\ [], errors \\ []) do
    post_url = Routes.user_url(conn, :post_register_data)
    %Data{data_url: Routes.user_url(conn, :get_register_data),
	  navbar: nil,
	  history_state: Common.gen_history_state(conn, "Register", :register),
	  pages: %Pages{
	    register: %RegisterPage{
	      form: %Form{post_url: post_url,
			  params: params,
			  errors: errors},
	      csrf_token: Tag.csrf_token_value(post_url)
	    }
	  }}
  end

end
