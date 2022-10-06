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
      this.context.refreshDataGet(this.context.data.pages.register.get_login_data_url);
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-flex uk-flex-middle"><div class="uk-width-1-1"><div class="uk-container"><div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid><div class="uk-width-1-1@m"><div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large"><h3 expr51="expr51" class="uk-card-title uk-text-center"> </h3><form id="register"><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: user"></span><input type="text" name="login" class="uk-input uk-form-large" placeholder="Login"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr52="expr52"></li></ul></div><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: user"></span><input expr54="expr54" type="text" name="email" class="uk-input uk-form-large" placeholder="Email"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr55="expr55"></li></ul></div><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: lock"></span><input expr57="expr57" type="password" name="password" class="uk-input uk-form-large"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr58="expr58"></li></ul></div><div class="uk-margin"><button expr60="expr60" class="uk-button uk-button-primary uk-button-large uk-width-1-1"> </button></div><div class="uk-text-small uk-text-center uk-margin-top"><a expr61="expr61">Log in</a>\n\t\t  |\n\t\t  <a href="#">Forgot your password</a></div></form></div></div></div></div></div></div>', [{
    redundantAttribute: 'expr51',
    selector: '[expr51]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Register']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr53="expr53" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr53',
      selector: '[expr53]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr52',
    selector: '[expr52]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.register.form.errors.login
  }, {
    redundantAttribute: 'expr54',
    selector: '[expr54]',
    expressions: [{
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.context.data.pages.register.form.params.email
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr56="expr56" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr56',
      selector: '[expr56]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr55',
    selector: '[expr55]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.register.form.errors.email
  }, {
    redundantAttribute: 'expr57',
    selector: '[expr57]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'placeholder',
      evaluate: _scope => _scope.context.data.translations['Password']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr59="expr59" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr59',
      selector: '[expr59]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr58',
    selector: '[expr58]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.register.form.errors.password
  }, {
    redundantAttribute: 'expr60',
    selector: '[expr60]',
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
    redundantAttribute: 'expr61',
    selector: '[expr61]',
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
