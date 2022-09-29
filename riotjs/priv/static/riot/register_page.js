var register_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    register(event) {
      event.preventDefault();
      this.context.postForm(this.context.data.pages.register.form.post_url, this.context.data.pages.register.csrf_token, '#register');
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-section uk-flex uk-flex-middle uk-animation-fade"><div class="uk-width-1-1"><div class="uk-container"><div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid><div class="uk-width-1-1@m"><div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large"><h3 class="uk-card-title uk-text-center">Register</h3><form id="register"><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: user"></span><input type="text" name="login" class="uk-input uk-form-large" placeholder="Login"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr15="expr15"></li></ul></div><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: user"></span><input expr17="expr17" type="text" name="email" class="uk-input uk-form-large" placeholder="Email"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr18="expr18"></li></ul></div><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: lock"></span><input type="password" name="password" class="uk-input uk-form-large" placeholder="Password"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr20="expr20"></li></ul></div><div class="uk-margin"><button expr22="expr22" class="uk-button uk-button-primary uk-button-large uk-width-1-1">Register</button></div><div class="uk-text-small uk-text-center uk-margin-top"><a href="#">Log in</a>\n\t\t  |\n\t\t  <a href="#">Forgot your password</a></div></form></div></div></div></div></div></div>', [{
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr16="expr16" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr16',
      selector: '[expr16]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr15',
    selector: '[expr15]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.register.form.errors.login
  }, {
    redundantAttribute: 'expr17',
    selector: '[expr17]',
    expressions: [{
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.context.data.pages.register.form.params.email
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr19="expr19" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr19',
      selector: '[expr19]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr18',
    selector: '[expr18]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.register.form.errors.email
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
    evaluate: _scope => _scope.context.data.pages.register.form.errors.password
  }, {
    redundantAttribute: 'expr22',
    selector: '[expr22]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.register
    }]
  }]),
  name: 'register-page'
};

export { register_page as default };
