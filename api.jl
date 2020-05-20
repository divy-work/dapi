using Genie, Genie.Router
using Genie.Renderer, Genie.Renderer.Html, Genie.Renderer.Json
import YAML

basic_data = YAML.load(open("data/basic.yml"))

function get_cpu_stats()
    st = read("/proc/stat", String)
    m = match(r"^cpu *(.*)", st)
    return parse.(Int, split(m.captures[1], ' '))
end

route("/CNAME") do
  response("api.divy.work")
end

route("/data") do
  json(basic_data)
end

route("/") do
  html("status: up. CPU: ", get_cpu_stats())
end

up(8000, async = false)
