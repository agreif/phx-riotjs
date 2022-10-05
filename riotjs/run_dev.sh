# ./node_modules/.bin/riot -w priv/static/riot &
./node_modules/.bin/riot priv/static/riot/*.riot

mix gettext.extract
mix gettext.merge priv/gettext

mix phx.server
