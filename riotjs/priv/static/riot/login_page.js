var login_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    sp: " ",

    login(event) {
      event.preventDefault();
      this.context.postForm(this.context.data.pages.login.form.post_data_url, this.context.data.pages.login.csrf_token, '#login', this.showErrorOrRedirectCallback);
    },

    showErrorOrRedirectCallback(data) {
      if (data.pages && data.pages.login) {
        this.context.updateData(data);
        this.context.updateHistory(data);
      } else {
        window.location.href = '/';
      }
    },

    showRegisterPage() {
      event.preventDefault();
      this.context.refreshDataGet(this.context.data.pages.login.get_register_data_url);
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-flex uk-flex-middle"><div class="uk-width-1-1"><div class="uk-container"><div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid><div class="uk-width-1-1@"><p expr0="expr0" class="uk-text-center"> </p><p expr1="expr1" class="uk-text-center"><a href="https://www.phoenixframework.org/">Phoenix</a> <a href="https://riot.js.org/">RiotJS</a> <a href="https://getuikit.com/">UIkit</a> </p><p expr2="expr2" class="uk-text-center"> <span class="uk-text-success"> testuser </span> <span class="uk-text-success"> test12345678 </span> <span expr3="expr3" class="uk-text-bold"> </span> </p></div></div></div></div></div><div class="uk-flex uk-flex-middle"><div class="uk-width-1-1"><div class="uk-container"><div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid><div class="uk-width-1-1@m"><div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large"><h3 class="uk-card-title uk-text-center">Login</h3><form id="login"><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: user"></span><input type="text" name="login" class="uk-input uk-form-large" placeholder="Login"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr4="expr4"></li></ul></div><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: lock"></span><input expr6="expr6" type="password" name="password" class="uk-input uk-form-large"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr7="expr7"></li></ul></div><ul class="uk-list uk-list-collapse"><li expr9="expr9"></li></ul><div class="uk-margin"><button expr11="expr11" class="uk-button uk-button-primary uk-button-large uk-width-1-1">Login</button></div><div class="uk-text-small uk-text-center uk-margin-top"><a expr12="expr12"> </a>\n\t\t  |\n\t\t  <a expr13="expr13" href="#"> </a></div></form></div></div></div></div></div></div>', [{
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['This is a proof-of-concept application with the']
    }]
  }, {
    redundantAttribute: 'expr1',
    selector: '[expr1]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 1,
      evaluate: _scope => [_scope.sp, _scope.context.data.translations['web framework'], ',', _scope.sp].join('')
    }, {
      type: expressionTypes.TEXT,
      childNodeIndex: 3,
      evaluate: _scope => [_scope.sp, _scope.context.data.translations['component framework and'], _scope.sp].join('')
    }, {
      type: expressionTypes.TEXT,
      childNodeIndex: 5,
      evaluate: _scope => [_scope.sp, _scope.context.data.translations['front-end framework'], _scope.sp].join('')
    }]
  }, {
    redundantAttribute: 'expr2',
    selector: '[expr2]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => [_scope.context.data.translations['Use login'], ':'].join('')
    }, {
      type: expressionTypes.TEXT,
      childNodeIndex: 2,
      evaluate: _scope => [_scope.context.data.translations['and password'], ':'].join('')
    }, {
      type: expressionTypes.TEXT,
      childNodeIndex: 4,
      evaluate: _scope => [_scope.context.data.translations['or create another'], _scope.sp].join('')
    }, {
      type: expressionTypes.TEXT,
      childNodeIndex: 6,
      evaluate: _scope => [_scope.sp, '\n\t      ', _scope.context.data.translations['on the register page']].join('')
    }]
  }, {
    redundantAttribute: 'expr3',
    selector: '[expr3]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['dummy user']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr5="expr5" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr5',
      selector: '[expr5]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr4',
    selector: '[expr4]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.login
  }, {
    redundantAttribute: 'expr6',
    selector: '[expr6]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'placeholder',
      evaluate: _scope => _scope.context.data.translations['Password']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr8="expr8" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr8',
      selector: '[expr8]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr7',
    selector: '[expr7]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.password
  }, {
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
    evaluate: _scope => _scope.context.data.pages.login.form.errors.misc
  }, {
    redundantAttribute: 'expr11',
    selector: '[expr11]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.login
    }]
  }, {
    redundantAttribute: 'expr12',
    selector: '[expr12]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Register']
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'href',
      evaluate: _scope => _scope.context.data.pages.login.register_url
    }, {
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.showRegisterPage
    }]
  }, {
    redundantAttribute: 'expr13',
    selector: '[expr13]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Forgot your password']
    }]
  }]),
  name: 'login-page'
};

export { login_page as default };
