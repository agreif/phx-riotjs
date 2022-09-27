var register_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    register() {
      console.log("register");
      let url = "/user/register";
      let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      const data = new FormData(this.$('form'));
      const jsonObj = Object.fromEntries(data.entries());
      console.log(jsonObj);

      async function makePostRequest(url, requestType, headers) {
        await fetch(url, {
          method: requestType,
          headers: headers,
          body: JSON.stringify(jsonObj)
        }).then(async rawResponse => {
          var content = await rawResponse.json();
          console.log(content);
        });
      }

      makePostRequest(url, "POST", headers);
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-section uk-flex uk-flex-middle uk-animation-fade"><div class="uk-width-1-1"><div class="uk-container"><div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid><div class="uk-width-1-1@m"><div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large"><h3 class="uk-card-title uk-text-center">Register</h3><form><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: user"></span><input name="email" required class="uk-input uk-form-large" type="text" placeholder="Email"/></div></div><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: lock"></span><input name="password" required class="uk-input uk-form-large" type="text"/></div></div><div class="uk-margin"><button expr28="expr28" class="uk-button uk-button-primary uk-button-large uk-width-1-1">Register</button></div><div class="uk-text-small uk-text-center uk-margin-top"><a href="#">Log in</a>\n\t\t  |\n\t\t  <a href="#">Forgot your password</a></div></form></div></div></div></div></div></div>', [{
    redundantAttribute: 'expr28',
    selector: '[expr28]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.register
    }]
  }]),
  name: 'register-page'
};

export { register_page as default };
