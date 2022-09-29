var login_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    login(event) {
      event.preventDefault();
      this.context.postForm(this.context.data.pages.login.form.post_url, this.context.data.pages.login.csrf_token, '#login');
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-section uk-flex uk-flex-middle uk-animation-fade"><div class="uk-width-1-1"><div class="uk-container"><div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid><div class="uk-width-1-1@m"><div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large"><h3 class="uk-card-title uk-text-center">Login</h3><form id="login"><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: user"></span><input type="text" name="login" class="uk-input uk-form-large" placeholder="Login"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr43="expr43"></li></ul></div><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: lock"></span><input type="password" name="password" class="uk-input uk-form-large" placeholder="Password"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr45="expr45"></li></ul></div><ul class="uk-list uk-list-collapse"><li expr47="expr47"></li></ul><div class="uk-margin"><button expr49="expr49" class="uk-button uk-button-primary uk-button-large uk-width-1-1">Login</button></div><div class="uk-text-small uk-text-center uk-margin-top"><a href="#">Register</a>\n\t\t  |\n\t\t  <a href="#">Forgot your password</a></div></form></div></div></div></div></div></div>', [{
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr44="expr44" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr44',
      selector: '[expr44]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr43',
    selector: '[expr43]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.login
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr46="expr46" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr46',
      selector: '[expr46]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr45',
    selector: '[expr45]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.password
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr48="expr48" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr48',
      selector: '[expr48]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr47',
    selector: '[expr47]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.misc
  }, {
    redundantAttribute: 'expr49',
    selector: '[expr49]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.login
    }]
  }]),
  name: 'login-page'
};

export { login_page as default };
