defmodule Riotjs.Handler.Register do
  alias Riotjs.{Common, Data, Model, Handler, Repo}
  alias Phoenix.HTML.Tag
  alias Ecto.Changeset
  alias RiotjsWeb.Router.Helpers, as: Routes
  import RiotjsWeb.Gettext

  @gettext_domain "register"

  defp texts_en() do
    Gettext.with_locale("en", fn ->
      [
	dgettext(@gettext_domain, "Register"),
	dgettext(@gettext_domain, "Password"),
      ]
    end)
  end

  @doc """
  Registers the user.

  Returns {conn, data} tuple
  """
  def process(conn, params) do
    locale = Common.locale(conn)
    changeset = Model.User.changeset(%Model.User{}, params)
    if changeset.valid? do
      user = Changeset.apply_changes(changeset)
      hashed_password = Bcrypt.hash_pwd_salt(user.password)
      changeset = changeset |> Changeset.put_change(:password, hashed_password)
      case Repo.insert(changeset) do
	{:ok, _} -> Handler.Login.data(conn)
	{:error, changeset} ->
	  data(conn, changeset.params, Common.human_errors(changeset, locale))
      end
    else
      data(conn, changeset.params, Common.human_errors(changeset, locale))
    end
  end

  def data(conn, params \\ %{}, errors \\ %{}) do
    form_post_data_url = Routes.page_url(conn, :post_register_data)
    locale = Common.locale(conn)
    %Data{data_url: Routes.page_url(conn, :get_register_data),
	  locale: locale,
	  navbar: nil,
	  history_state: %Data.HistoryState{
	    title: "Register",
	    url: Routes.page_url(conn, :get_register_page)},
	  logout: nil,
	  pages: %Data.Pages{
	    register: %Data.RegisterPage{
	      form: %Data.Form{post_url: form_post_data_url,
			       params: params,
			       errors: errors},
	      csrf_token: Tag.csrf_token_value(form_post_data_url),
	      login_url: Routes.page_url(conn, :get_login_page),
	      login_data_url: Routes.page_url(conn, :get_login_data)
	    }
	  },
	  translations: Common.translations(@gettext_domain, texts_en(), locale)
    }
  end

end
