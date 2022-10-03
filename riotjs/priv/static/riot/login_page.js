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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-section uk-flex uk-flex-middle uk-animation-fade"><div class="uk-width-1-1"><div class="uk-container"><div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid><div class="uk-width-1-1@m"><div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large"><h3 class="uk-card-title uk-text-center">Login</h3><form id="login"><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: user"></span><input type="text" name="login" class="uk-input uk-form-large" placeholder="Login"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr9="expr9"></li></ul></div><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: lock"></span><input expr11="expr11" type="password" name="password" class="uk-input uk-form-large"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr12="expr12"></li></ul></div><ul class="uk-list uk-list-collapse"><li expr14="expr14"></li></ul><div class="uk-margin"><button expr16="expr16" class="uk-button uk-button-primary uk-button-large uk-width-1-1">Login</button></div><div class="uk-text-small uk-text-center uk-margin-top"><a expr17="expr17">Register</a>\n\t\t  |\n\t\t  <a href="#">Forgot your password</a></div></form></div></div></div></div></div></div>', [{
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr10="expr10" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr10',
      selector: '[expr10]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr9',
    selector: '[expr9]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.login
  }, {
    redundantAttribute: 'expr11',
    selector: '[expr11]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'placeholder',
      evaluate: _scope => _scope.context.data.translations['Password']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr13="expr13" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr13',
      selector: '[expr13]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr12',
    selector: '[expr12]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.password
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr15="expr15" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr15',
      selector: '[expr15]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr14',
    selector: '[expr14]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.misc
  }, {
    redundantAttribute: 'expr16',
    selector: '[expr16]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.login
    }]
  }, {
    redundantAttribute: 'expr17',
    selector: '[expr17]',
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
