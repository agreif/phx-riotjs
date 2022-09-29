defmodule Riotjs.CommonTest do
  use Riotjs.DataCase, async: true
  alias Riotjs.Common

  test "add_error adds error to empty errors" do
    errors = Common.add_error([], {:f, "m"})
    assert [{:f, ["m"]}] = errors
  end

  test "add_error adds error to errors with other keys" do
    errors = Common.add_error([{:f1, ["m1", "m2"]}], {:f, "m"})
    assert [{:f, ["m"]}, {:f1, ["m1", "m2"]}] = errors
  end

  test "add_error adds error to errors with existing key" do
    errors = Common.add_error([{:f, ["m1", "m2"]}], {:f, "m"})
    assert [{:f, ["m", "m1", "m2"]}] = errors
  end
end
