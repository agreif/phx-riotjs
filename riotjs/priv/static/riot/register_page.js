var register_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    register(event) {
      event.preventDefault();
      this.context.postForm(this.context.data.pages.register.form.post_url, this.context.data.pages.register.csrf_token, '#register');
    },

    loginPage() {
      event.preventDefault();
      this.context.refreshData(this.context.data.pages.register.login_data_url);
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-section uk-flex uk-flex-middle uk-animation-fade"><div class="uk-width-1-1"><div class="uk-container"><div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid><div class="uk-width-1-1@m"><div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large"><h3 expr16="expr16" class="uk-card-title uk-text-center"> </h3><form id="register"><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: user"></span><input type="text" name="login" class="uk-input uk-form-large" placeholder="Login"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr17="expr17"></li></ul></div><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: user"></span><input expr19="expr19" type="text" name="email" class="uk-input uk-form-large" placeholder="Email"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr20="expr20"></li></ul></div><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: lock"></span><input expr22="expr22" type="password" name="password" class="uk-input uk-form-large"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr23="expr23"></li></ul></div><div class="uk-margin"><button expr25="expr25" class="uk-button uk-button-primary uk-button-large uk-width-1-1"> </button></div><div class="uk-text-small uk-text-center uk-margin-top"><a expr26="expr26">Log in</a>\n\t\t  |\n\t\t  <a href="#">Forgot your password</a></div></form></div></div></div></div></div></div>', [{
    redundantAttribute: 'expr16',
    selector: '[expr16]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Register']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr18="expr18" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr18',
      selector: '[expr18]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr17',
    selector: '[expr17]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.register.form.errors.login
  }, {
    redundantAttribute: 'expr19',
    selector: '[expr19]',
    expressions: [{
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.context.data.pages.register.form.params.email
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr21="expr21" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr21',
      selector: '[expr21]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr20',
    selector: '[expr20]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.register.form.errors.email
  }, {
    redundantAttribute: 'expr22',
    selector: '[expr22]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'placeholder',
      evaluate: _scope => _scope.context.data.translations['Password']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr24="expr24" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr24',
      selector: '[expr24]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr23',
    selector: '[expr23]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.register.form.errors.password
  }, {
    redundantAttribute: 'expr25',
    selector: '[expr25]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Register']
    }, {
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.register
    }]
  }, {
    redundantAttribute: 'expr26',
    selector: '[expr26]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'href',
      evaluate: _scope => _scope.context.data.pages.register.login_url
    }, {
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.loginPage
    }]
  }]),
  name: 'register-page'
};

export { register_page as default };
