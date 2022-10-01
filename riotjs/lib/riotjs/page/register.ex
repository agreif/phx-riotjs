defmodule Riotjs.Page.Register do
  alias Riotjs.{Common, Data, HistoryState, Form, Pages, RegisterPage, User}
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Riotjs.Page
  alias Riotjs.Repo
  alias Phoenix.HTML.Tag
  alias Ecto.Changeset

  def process(conn, params) do
    changeset = User.changeset(%User{}, params)
    if changeset.valid? do
      user = Changeset.apply_changes(changeset)
      hashed_password = Bcrypt.hash_pwd_salt(user.password)
      changeset = changeset |> Changeset.put_change(:password, hashed_password)
      case Repo.insert(changeset) do
	{:ok, _} -> Page.Demo1.data(conn) # TODO go to login
	{:error, changeset} ->
	  data(conn, changeset.params, Common.human_errors(changeset))
      end
    else
      data(conn, changeset.params, Common.human_errors(changeset))
    end
  end

  def data(conn, params \\ [], errors \\ []) do
    post_url = Routes.user_url(conn, :post_register_data)
    %Data{data_url: Routes.user_url(conn, :get_register_data),
	  navbar: nil,
	  history_state: %HistoryState{
	    title: "Register",
	    url: Routes.user_url(conn, :get_register_page)},
	  logout: nil,
	  pages: %Pages{
	    register: %RegisterPage{
	      form: %Form{post_url: post_url,
			  params: params,
			  errors: errors},
	      csrf_token: Tag.csrf_token_value(post_url),
	      login_url: Routes.user_url(conn, :get_login_page),
	      login_data_url: Routes.user_url(conn, :get_login_data)
	    }
	  }}
  end

end
