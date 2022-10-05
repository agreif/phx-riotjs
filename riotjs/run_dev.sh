# rm priv/static/riot/*.js; ./node_modules/.bin/riot .; ./node_modules/.bin/riot -w .

mix gettext.extract
mix gettext.merge priv/gettext

mix phx.server
