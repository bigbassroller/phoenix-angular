defmodule PhoenixAngular.PageController do
  use PhoenixAngular.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
