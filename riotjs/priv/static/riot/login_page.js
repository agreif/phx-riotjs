var login_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
      this.sp = " ";
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

    showRegisterPage() {
      event.preventDefault();
      this.context.refreshDataGet(this.context.data.pages.login.get_register_data_url);
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-flex uk-flex-middle"><div class="uk-width-1-1"><div class="uk-container"><div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid><div class="uk-width-1-1@"><p expr43="expr43" class="uk-text-center"> </p><p expr44="expr44" class="uk-text-center"><a href="https://www.phoenixframework.org/">Phoenix</a> <a href="https://riot.js.org/">RiotJS</a> <a href="https://getuikit.com/">UIkit</a> </p><p expr45="expr45" class="uk-text-center"> <span class="uk-text-success">testuser</span> <span class="uk-text-success">test12345678</span> <span expr46="expr46" class="uk-text-bold"> </span> </p></div></div></div></div></div><div class="uk-flex uk-flex-middle"><div class="uk-width-1-1"><div class="uk-container"><div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid><div class="uk-width-1-1@m"><div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large"><h3 class="uk-card-title uk-text-center">Login</h3><form id="login"><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: user"></span><input type="text" name="login" class="uk-input uk-form-large" placeholder="Login"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr47="expr47"></li></ul></div><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: lock"></span><input expr49="expr49" type="password" name="password" class="uk-input uk-form-large"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr50="expr50"></li></ul></div><ul class="uk-list uk-list-collapse"><li expr52="expr52"></li></ul><div class="uk-margin"><button expr54="expr54" class="uk-button uk-button-primary uk-button-large uk-width-1-1">Login</button></div><div class="uk-text-small uk-text-center uk-margin-top"><a expr55="expr55"> </a>\n\t\t  |\n\t\t  <a expr56="expr56" href="#"> </a></div></form></div></div></div></div></div></div>', [{
    redundantAttribute: 'expr43',
    selector: '[expr43]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['This is a proof-of-concept application with the']
    }]
  }, {
    redundantAttribute: 'expr44',
    selector: '[expr44]',
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
    redundantAttribute: 'expr45',
    selector: '[expr45]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => [_scope.context.data.translations['Use login'], ':', _scope.sp].join('')
    }, {
      type: expressionTypes.TEXT,
      childNodeIndex: 2,
      evaluate: _scope => [_scope.sp, '\n\t      ', _scope.context.data.translations['and password'], ':', _scope.sp].join('')
    }, {
      type: expressionTypes.TEXT,
      childNodeIndex: 4,
      evaluate: _scope => [_scope.sp, '\n\t      ', _scope.context.data.translations['or create another'], _scope.sp].join('')
    }, {
      type: expressionTypes.TEXT,
      childNodeIndex: 6,
      evaluate: _scope => [_scope.sp, '\n\t      ', _scope.context.data.translations['on the register page']].join('')
    }]
  }, {
    redundantAttribute: 'expr46',
    selector: '[expr46]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['dummy user']
    }]
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
    evaluate: _scope => _scope.context.data.pages.login.form.errors.login
  }, {
    redundantAttribute: 'expr49',
    selector: '[expr49]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'placeholder',
      evaluate: _scope => _scope.context.data.translations['Password']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr51="expr51" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr51',
      selector: '[expr51]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr50',
    selector: '[expr50]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.password
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
    evaluate: _scope => _scope.context.data.pages.login.form.errors.misc
  }, {
    redundantAttribute: 'expr54',
    selector: '[expr54]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.login
    }]
  }, {
    redundantAttribute: 'expr55',
    selector: '[expr55]',
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
    redundantAttribute: 'expr56',
    selector: '[expr56]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Forgot your password']
    }]
  }]),
  name: 'login-page'
};

export { login_page as default };
