var register_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    register(event) {
      event.preventDefault();
      this.context.postForm(this.context.data.pages.register.form.post_url, this.context.data.pages.register.form.csrf_token, '#register');
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-section uk-flex uk-flex-middle uk-animation-fade"><div class="uk-width-1-1"><div class="uk-container"><div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid><div class="uk-width-1-1@m"><div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large"><h3 class="uk-card-title uk-text-center">Register</h3><form id="register"><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: user"></span><input expr281="expr281" type="text" name="email" class="uk-input uk-form-large" placeholder="Email"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr282="expr282"></li></ul></div><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: lock"></span><input type="password" name="password" class="uk-input uk-form-large"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr284="expr284"></li></ul></div><div class="uk-margin"><button expr286="expr286" class="uk-button uk-button-primary uk-button-large uk-width-1-1">Register</button></div><div class="uk-text-small uk-text-center uk-margin-top"><a href="#">Log in</a>\n\t\t  |\n\t\t  <a href="#">Forgot your password</a></div></form></div></div></div></div></div></div>', [{
    redundantAttribute: 'expr281',
    selector: '[expr281]',
    expressions: [{
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.context.data.pages.register.form.params.email
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr283="expr283" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr283',
      selector: '[expr283]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr282',
    selector: '[expr282]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.register.form.errors.email
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr285="expr285" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr285',
      selector: '[expr285]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr284',
    selector: '[expr284]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.register.form.errors.password
  }, {
    redundantAttribute: 'expr286',
    selector: '[expr286]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.register
    }]
  }]),
  name: 'register-page'
};

export { register_page as default };
