# phx-riotjs
Template project that uses
- Elixir/Phoenix webserver
- RiotJS component-based UI library
- UIKit
- Pure frontend HTML rendering with DOM-manipulation
- JSON data transfer
- Browser history handling
- Form submission happens with JSON data transfer and CSRF tags
- Form validation with Ecto Changesets (only the registration form)
- User registration stored to PostgreSQL DB with validations
- i18n with gettext domains

# Technical Details
- Direct URL browser requests to pages return the full HTML code with all linkes RiotJS tags as .js files. The JSON data for the page is requested immediately
- The returned JSON data always contains only the data for one specific page, leads to the automagic DOM manipulation. This is a simulation of a multi page app.

# Run Phoenix Server and RiotJS auto-compile
```
cd riotjs

# cat run_dev.sh
# ./node_modules/.bin/riot -w . &
# mix phx.server

sh run_dev.sh
```

# Prerequisites
Install RiotJS
```
cd riotjs
npm install @riotjs/cli
```

# RiotJS Tag definition
riotjs/priv/static/riot/todo.riot
```
<todo>
  <h1>{ stateMessage }</h1>
  <p>{ propsMessage }</p>

  <script>
    export default {
      state: {
        message: 'text defined in statr',
      },
      get stateMessage() {
        return this.state.message;
      },
      get propsMessage() {
        return this.props.message;
      },
    }
  </script>
</todo>
```

# Tag Usage
riotjs/lib/riotjs_web/templates/page/index.html.heex
```
  <todo message="kkk"></todo>
```

# General configs
riotjs/lib/riotjs_web/endpoint.ex
```
-    only: ~w(assets fonts images favicon.ico robots.txt)
+    only: ~w(assets fonts images favicon.ico robots.txt riot)
```

# Config for RiotJS in-browser compile

Add RiotJS .js file:

riotjs/assets/vendor/riot_compiler.js

riotjs/assets/js/app.js
```
import * as riot from "../vendor/riot_compiler"
// expose riot
window.riot = riot
```

riotjs/lib/riotjs_web/templates/layout/root.html.heex
```
  <head>
    ...
-   <script defer phx-track-static type="text/javascript" src={Routes.static_path(@conn, "/assets/app.js")}></script>
+   <script       phx-track-static type="text/javascript" src={Routes.static_path(@conn, "/assets/app.js")}></script>

    <script data-src="/riot/todo.riot" type="riot"></script>
    <script>
      (async function main() {
            await riot.compile()
            riot.mount('todo')
      }())
    </script>
```

# Config for RiotJS external CLI compile

Add RiotJS .js file:

riotjs/assets/vendor/riot.js

riotjs/assets/js/app.js
```
import * as riot from "../vendor/riot"
// expose riot
window.riot = riot
```

riotjs/lib/riotjs_web/templates/layout/root.html.heex
```
  <head>
    ...
    <script data-src="/riot/todo.js" type="riot"></script>
    <script type="module">
      import TodoTag from './riot/todo.js'
      riot.register('todo', TodoTag)
      riot.mount('todo')
    </script>
```
