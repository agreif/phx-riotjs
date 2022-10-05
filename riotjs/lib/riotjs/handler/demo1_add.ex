defmodule Riotjs.Handler.Demo1Add do
  alias Riotjs.{Common, Data, Model, Handler, Repo}
  alias Phoenix.HTML.Tag
  alias RiotjsWeb.Router.Helpers, as: Routes
  import RiotjsWeb.Gettext

  @gettext_domain "demo1"

  @doc """
  Stores the Demo1 entity.

  Returns {conn, data} tuple
  """
  def process(conn, params) do
    locale = Common.locale(conn)
    changeset = Model.Demo1.changeset(%Model.Demo1{}, params)
    if changeset.valid? do
      case Repo.insert(changeset) do
	{:ok, _} -> Handler.Demo1.data(conn)
	{:error, changeset} ->
	  data(conn, changeset.params, Common.human_errors(changeset, locale))
      end
    else
      data(conn, changeset.params, Common.human_errors(changeset, locale))
    end
  end

  def data(conn, params \\ [], errors \\ %{}) do
    post_data_url = Routes.page_url(conn, :post_demo1_add_data)
    locale = Common.locale(conn)
    %Data{data_url: Routes.page_url(conn, :get_demo1_add_data),
	  locale: locale,
	  navbar: Common.gen_navbar(conn, :demo1),
	  history_state: nil,
	  logout: %Data.Logout{
	    post_url: post_data_url,
	    csrf_token: Tag.csrf_token_value(post_data_url)},
	  pages: %Data.Pages{
	    demo1_add: %Data.Demo1AddPage{
	      form: %Data.Form{post_url: post_data_url,
			       params: params,
			       errors: errors},
	      csrf_token: Tag.csrf_token_value(post_data_url),
	      demo1_data_url: Routes.page_url(conn, :get_demo1_data)
            }
	  },
	  translations: Common.translations(@gettext_domain, texts_en(), locale)
    }
  end

  defp texts_en() do
    Gettext.with_locale("en", fn ->
      [
	dgettext(@gettext_domain, "Add Demo1"),
      ]
    end)
  end

end
