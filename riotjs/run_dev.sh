# rm priv/static/riot/*.js; ./node_modules/.bin/riot priv/riot -o priv/static/riot/; ./node_modules/.bin/riot priv/riot -o priv/static/riot/ -w

mix gettext.extract
mix gettext.merge priv/gettext

mix phx.server
