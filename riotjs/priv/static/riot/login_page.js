var login_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    login(event) {
      event.preventDefault();
      this.context.postForm(this.context.data.pages.login.form.post_url, this.context.data.pages.login.csrf_token, '#login', this.showErrorOrRedirectCallback);
    },

    showErrorOrRedirectCallback(data) {
      if (data.pages && data.pages.login) {
        this.context.updateData(data);
        this.context.updateHistory(data);
      } else {
        window.location.href = '/';
      }
    },

    registerPage() {
      event.preventDefault();
      this.context.refreshData(this.context.data.pages.login.register_data_url);
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-section uk-flex uk-flex-middle uk-animation-fade"><div class="uk-width-1-1"><div class="uk-container"><div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid><div class="uk-width-1-1@m"><div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large"><h3 class="uk-card-title uk-text-center">Login</h3><form id="login"><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: user"></span><input type="text" name="login" class="uk-input uk-form-large" placeholder="Login"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr39="expr39"></li></ul></div><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: lock"></span><input expr41="expr41" type="password" name="password" class="uk-input uk-form-large"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr42="expr42"></li></ul></div><ul class="uk-list uk-list-collapse"><li expr44="expr44"></li></ul><div class="uk-margin"><button expr46="expr46" class="uk-button uk-button-primary uk-button-large uk-width-1-1">Login</button></div><div class="uk-text-small uk-text-center uk-margin-top"><a expr47="expr47">Register</a>\n\t\t  |\n\t\t  <a href="#">Forgot your password</a></div></form></div></div></div></div></div></div>', [{
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr40="expr40" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr40',
      selector: '[expr40]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr39',
    selector: '[expr39]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.login
  }, {
    redundantAttribute: 'expr41',
    selector: '[expr41]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'placeholder',
      evaluate: _scope => _scope.context.data.translations['Password']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr43="expr43" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr43',
      selector: '[expr43]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr42',
    selector: '[expr42]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.password
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr45="expr45" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr45',
      selector: '[expr45]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr44',
    selector: '[expr44]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.misc
  }, {
    redundantAttribute: 'expr46',
    selector: '[expr46]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.login
    }]
  }, {
    redundantAttribute: 'expr47',
    selector: '[expr47]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'href',
      evaluate: _scope => _scope.context.data.pages.login.register_url
    }, {
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.registerPage
    }]
  }]),
  name: 'login-page'
};

export { login_page as default };
