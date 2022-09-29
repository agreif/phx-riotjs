defmodule Riotjs.Page.Login do
  alias Riotjs.{Common, Data, Form, Pages, LoginPage, User}
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Riotjs.Page
  alias Riotjs.Repo
  alias Phoenix.HTML.Tag
  alias Ecto.Changeset

  def process(conn, params) do
    data = %{}
    types = %{login: :string, password: :string}
    changeset =
    {data, types}
    |> Changeset.cast(params, Map.keys(types))
    |> Changeset.validate_required([:login, :password])

    if changeset.valid? do
      %{login: login, password: password} = Changeset.apply_changes(changeset)
      if user = User.get_by_login_and_password(login, password) do
	Page.Demo1.data(conn) # TODO go to login
      else
	  data(conn, params,
	    changeset
	    |> Changeset.add_error(:misc, "unknown user or wrong password")
	    |> Common.human_errors)
      end
    else
      data(conn, changeset.params, Common.human_errors(changeset))
    end
  end

  def data(conn, params \\ [], errors \\ []) do
    post_url = Routes.user_url(conn, :post_login_data)
    %Data{data_url: Routes.user_url(conn, :get_login_data),
	  navbar: nil,
	  history_state: Common.gen_history_state(conn, "Login", :login),
	  pages: %Pages{
	    login: %LoginPage{
	      form: %Form{post_url: post_url,
			  params: params,
			  errors: errors},
	      csrf_token: Tag.csrf_token_value(post_url)
	    }
	  }}
  end

end
