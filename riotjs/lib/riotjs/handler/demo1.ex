defmodule Riotjs.Handler.Demo1 do
  @moduledoc """
  Demo1 business logic.
  """

  alias Riotjs.{Data, Model, Handler}
  alias Riotjs.Handler.Common
  alias RiotjsWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag
  alias Ecto.Changeset
  import RiotjsWeb.Gettext

  @gettext_domain "demo1"

  defp texts_en() do
    Gettext.with_locale("en", fn ->
      [
        dgettext(@gettext_domain, "Demo 1 Page"),
        dgettext(@gettext_domain, "Add Demo1"),
        dgettext(@gettext_domain, "Edit Demo1"),
        dgettext(@gettext_domain, "Delete Demo1"),
        dgettext(@gettext_domain, "Do you really want to delete this Demo1?"),
        dgettext(@gettext_domain, "Attribute 1"),
        dgettext(@gettext_domain, "Attribute 2"),
        dgettext(@gettext_domain, "Cancel"),
        dgettext(@gettext_domain, "Save"),
        dgettext(@gettext_domain, "Delete"),
      ]
    end)
  end

  ###################
  # list
  ###################

  def gen_list_data(conn) do
    locale = Common.locale(conn)
    demo1_items = Model.Demo1.get_demo1s()
    |> Enum.map(fn demo1 ->
      post_data_url = Routes.page_url(conn, :post_demo1_delete_data, demo1)
      %Data.Demo1Item{entity: demo1,
                      get_demo1_update_data_url: Routes.page_url(conn, :get_demo1_update_data, demo1),
                      post_demo1_delete_data_url: post_data_url,
                      csrf_token: Tag.csrf_token_value(post_data_url),
                     } end)
    %Data{data_url: Routes.page_url(conn, :get_demo1_list_data),
          locale: locale,
          navbar: Common.gen_navbar(conn, :demo1_list),
          history_state: %Data.HistoryState{
            title: "Demo 1",
            url: Routes.page_url(conn, :get_demo1_list_page)},
          logout: Common.gen_logout_data(conn),
          pages: %Data.Pages{
            demo1_list: %Data.Demo1ListPage{
              demo1_items: demo1_items,
              get_demo1_add_data_url: Routes.page_url(conn, :get_demo1_add_data),
            }
          },
          translations: Common.translations(@gettext_domain, texts_en(), locale)
    }
  end

  ###################
  # add
  ###################

  @doc """
  Stores the new Demo1 entity.

  Returns {conn, data} tuple
  """
  def process_post_add(conn, params) do
    locale = Common.locale(conn)
    result = Model.Demo1.create_demo1(params)
    case result do
      {:ok, _} -> Handler.Demo1.gen_list_data(conn)
      {:error, changeset} ->
        gen_add_data(conn, params, Common.human_errors(changeset, locale))
    end
  end

  def gen_add_data(conn, params \\ %{}, errors \\ %{}) do
    form_post_data_url = Routes.page_url(conn, :post_demo1_add_data)
    locale = Common.locale(conn)
    %Data{data_url: Routes.page_url(conn, :get_demo1_add_data),
          locale: locale,
          navbar: Common.gen_navbar(conn, :demo1),
          history_state: nil,
          logout: Common.gen_logout_data(conn),
          pages: %Data.Pages{
            demo1_add_update: %Data.Demo1AddUpdatePage{
              title_msgid: "Add Demo1",
              form: %Data.Form{post_data_url: form_post_data_url,
                               cancel_data_url: Routes.page_url(conn, :get_demo1_list_data),
                               params: params,
                               errors: errors},
              csrf_token: Tag.csrf_token_value(form_post_data_url)
            }
          },
          translations: Common.translations(@gettext_domain, texts_en(), locale)
    }
  end

  ###################
  # update
  ###################

  def process_get_update(conn, %{"id" => demo1_id}) do
    demo1 = Model.Demo1.get_demo1(demo1_id)
    gen_update_data(conn, demo1)
  end

  def process_post_update(conn, %{"id" => demo1_id} = params) do
    locale = Common.locale(conn)
    result = Model.Demo1.update_demo1(demo1_id, params)
    case result do
      {:ok, _} -> Handler.Demo1.gen_list_data(conn)
      {:error, changeset} ->
        gen_update_data(conn,
          Changeset.apply_changes(changeset),
          Common.human_errors(changeset, locale))
    end
  end

  defp gen_update_data(conn, demo1, errors \\ %{}) do
    form_post_data_url = Routes.page_url(conn, :post_demo1_update_data, demo1)
    locale = Common.locale(conn)
    %Data{data_url: Routes.page_url(conn, :get_demo1_update_data, demo1),
          locale: locale,
          navbar: Common.gen_navbar(conn, :demo1),
          history_state: nil,
          logout: Common.gen_logout_data(conn),
          pages: %Data.Pages{
            demo1_add_update: %Data.Demo1AddUpdatePage{
              title_msgid: "Edit Demo1",
              form: %Data.Form{post_data_url: form_post_data_url,
                               cancel_data_url: Routes.page_url(conn, :get_demo1_list_data),
                               params: demo1,
                               errors: errors},
              csrf_token: Tag.csrf_token_value(form_post_data_url)
            }
          },
          translations: Common.translations(@gettext_domain, texts_en(), locale)
    }
  end

  ###################
  # delete
  ###################

  def process_post_delete(conn, %{"id" => demo1_id}) do
    result = Model.Demo1.delete_demo1(demo1_id)
    case result do
      {:ok, _} -> Handler.Demo1.gen_list_data(conn)
      {:error, _changeset} -> Handler.Demo1.gen_list_data(conn)
    end
  end

end
