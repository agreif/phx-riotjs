defmodule Riotjs.Handler.Register do
  alias Riotjs.{Common, Data}
  alias Riotjs.Model
  alias Riotjs.Handler
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Riotjs.Repo
  alias Phoenix.HTML.Tag
  alias Ecto.Changeset

  @doc """
  Registers the user.

  Returns {conn, data} tuple
  """
  def process(conn, params) do
    changeset = Model.User.changeset(%Model.User{}, params)
    if changeset.valid? do
      user = Changeset.apply_changes(changeset)
      hashed_password = Bcrypt.hash_pwd_salt(user.password)
      changeset = changeset |> Changeset.put_change(:password, hashed_password)
      case Repo.insert(changeset) do
	{:ok, _} -> Handler.Login.data(conn)
	{:error, changeset} ->
	  data(conn, changeset.params, Common.human_errors(changeset))
      end
    else
      data(conn, changeset.params, Common.human_errors(changeset))
    end
  end

  def data(conn, params \\ [], errors \\ []) do
    post_url = Routes.page_url(conn, :post_register_data)
    %Data{data_url: Routes.page_url(conn, :get_register_data),
	  navbar: nil,
	  history_state: %Data.HistoryState{
	    title: "Register",
	    url: Routes.page_url(conn, :get_register_page)},
	  logout: nil,
	  pages: %Data.Pages{
	    register: %Data.RegisterPage{
	      form: %Data.Form{post_url: post_url,
			       params: params,
			       errors: errors},
	      csrf_token: Tag.csrf_token_value(post_url),
	      login_url: Routes.page_url(conn, :get_login_page),
	      login_data_url: Routes.page_url(conn, :get_login_data)
	    }
	  }}
  end

end
