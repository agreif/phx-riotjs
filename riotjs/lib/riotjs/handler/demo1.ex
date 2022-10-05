defmodule Riotjs.Handler.Demo1 do
  alias Riotjs.{Common, Data, Model, Handler, Repo}
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag
  alias Riotjs.Model
  import RiotjsWeb.Gettext

  @gettext_domain "demo1"

  defp texts_en() do
    Gettext.with_locale("en", fn ->
      [
	dgettext(@gettext_domain, "Demo 1 Page"),
	dgettext(@gettext_domain, "Add Demo1"),
	dgettext(@gettext_domain, "Update Demo1"),
	dgettext(@gettext_domain, "Attribute 1"),
	dgettext(@gettext_domain, "Attribute 2"),
	dgettext(@gettext_domain, "Cancel"),
	dgettext(@gettext_domain, "Save"),
      ]
    end)
  end

  ###################
  # list page
  ###################

  def list_data(conn) do
    demo1_datas = Model.Demo1.list_demo1s()
    |> Enum.map(fn demo1 -> %Data.Demo1{entity: demo1,
				       demo1_update_data_url: Routes.page_url(conn, :get_demo1_update_data, demo1)} end)

    logout_post_url = Routes.page_url(conn, :post_logout)
    locale = Common.locale(conn)
    %Data{data_url: Routes.page_url(conn, :get_demo1_list_data),
	  locale: locale,
	  navbar: Common.gen_navbar(conn, :demo1),
	  history_state: %Data.HistoryState{
	    title: "Demo 1",
	    url: Routes.page_url(conn, :get_demo1_list_page)},
	  logout: %Data.Logout{
	    post_url: logout_post_url,
	    csrf_token: Tag.csrf_token_value(logout_post_url)},
	  pages: %Data.Pages{
	    demo1_list: %Data.Demo1ListPage{
	      demo1s: demo1_datas,
	      demo1_add_data_url: Routes.page_url(conn, :get_demo1_add_data),
            }
	  },
	  translations: Common.translations(@gettext_domain, texts_en(), locale)
    }
  end

  ###################
  # add page
  ###################

  @doc """
  Stores the new Demo1 entity.

  Returns {conn, data} tuple
  """
  def process_post_add(conn, params) do
    locale = Common.locale(conn)
    changeset = Model.Demo1.changeset(%Model.Demo1{}, params)
    if changeset.valid? do
      case Repo.insert(changeset) do
	{:ok, _} -> Handler.Demo1.list_data(conn)
	{:error, changeset} ->
	  add_data(conn, changeset.params, Common.human_errors(changeset, locale))
      end
    else
      add_data(conn, changeset.params, Common.human_errors(changeset, locale))
    end
  end

  def add_data(conn, params \\ %{}, errors \\ %{}) do
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
	    demo1_add_update: %Data.Demo1AddUpdatePage{
	      title_msgid: "Add Demo1",
	      form: %Data.Form{post_url: post_data_url,
			       params: params,
			       errors: errors},
	      csrf_token: Tag.csrf_token_value(post_data_url),
	      demo1_list_data_url: Routes.page_url(conn, :get_demo1_list_data)
            }
	  },
	  translations: Common.translations(@gettext_domain, texts_en(), locale)
    }
  end

  ###################
  # update page
  ###################

  def process_get_update(conn, params) do
    demo1 = Repo.get!(Model.Demo1, Map.get(params, "id"))
    update_data(conn, demo1)
  end

  def process_post_update(conn, params) do
    id = Map.get(params, "id")
    demo1 = Repo.get!(Model.Demo1, id)
    changeset = Ecto.Changeset.change(demo1,
      attr1: params["attr1"],
      attr2: params["attr2"])
    case Repo.update(changeset) do
      {:ok, _} -> Handler.Demo1.list_data(conn)
      {:error, changeset} ->
	locale = Common.locale(conn)
	add_data(conn, changeset.params, Common.human_errors(changeset, locale))
    end
  end

  defp update_data(conn, demo1, errors \\ %{}) do
    post_data_url = Routes.page_url(conn, :post_demo1_update_data, demo1)
    locale = Common.locale(conn)
    %Data{data_url: Routes.page_url(conn, :get_demo1_update_data, demo1),
	  locale: locale,
	  navbar: Common.gen_navbar(conn, :demo1),
	  history_state: nil,
	  logout: %Data.Logout{
	    post_url: post_data_url,
	    csrf_token: Tag.csrf_token_value(post_data_url)},
	  pages: %Data.Pages{
	    demo1_add_update: %Data.Demo1AddUpdatePage{
	      title_msgid: "Update Demo1",
	      form: %Data.Form{post_url: post_data_url,
			       params: demo1,
			       errors: errors},
	      csrf_token: Tag.csrf_token_value(post_data_url),
	      demo1_list_data_url: Routes.page_url(conn, :get_demo1_list_data)
            }
	  },
	  translations: Common.translations(@gettext_domain, texts_en(), locale)
    }
  end














end
