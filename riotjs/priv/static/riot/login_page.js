var login_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    sp: " ",

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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-flex uk-flex-middle"><div class="uk-width-1-1"><div class="uk-container"><div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid><div class="uk-width-1-1@"><p expr100="expr100" class="uk-text-center"> </p><p expr101="expr101" class="uk-text-center"><a href="https://www.phoenixframework.org/">Phoenix</a> <a href="https://riot.js.org/">RiotJS</a> <a href="https://getuikit.com/">UIkit</a> </p><p expr102="expr102" class="uk-text-center"> <span class="uk-text-success"> testuser </span> <span class="uk-text-success"> test12345678 </span> <span expr103="expr103" class="uk-text-bold"> </span> </p></div></div></div></div></div><div class="uk-flex uk-flex-middle"><div class="uk-width-1-1"><div class="uk-container"><div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid><div class="uk-width-1-1@m"><div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large"><h3 class="uk-card-title uk-text-center">Login</h3><form id="login"><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: user"></span><input type="text" name="login" class="uk-input uk-form-large" placeholder="Login"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr104="expr104"></li></ul></div><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: lock"></span><input expr106="expr106" type="password" name="password" class="uk-input uk-form-large"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr107="expr107"></li></ul></div><ul class="uk-list uk-list-collapse"><li expr109="expr109"></li></ul><div class="uk-margin"><button expr111="expr111" class="uk-button uk-button-primary uk-button-large uk-width-1-1">Login</button></div><div class="uk-text-small uk-text-center uk-margin-top"><a expr112="expr112"> </a>\n\t\t  |\n\t\t  <a expr113="expr113" href="#"> </a></div></form></div></div></div></div></div></div>', [{
    redundantAttribute: 'expr100',
    selector: '[expr100]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['This is a proof-of-concept application with the']
    }]
  }, {
    redundantAttribute: 'expr101',
    selector: '[expr101]',
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
    redundantAttribute: 'expr102',
    selector: '[expr102]',
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
    redundantAttribute: 'expr103',
    selector: '[expr103]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['dummy user']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr105="expr105" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr105',
      selector: '[expr105]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr104',
    selector: '[expr104]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.login
  }, {
    redundantAttribute: 'expr106',
    selector: '[expr106]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'placeholder',
      evaluate: _scope => _scope.context.data.translations['Password']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr108="expr108" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr108',
      selector: '[expr108]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr107',
    selector: '[expr107]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.password
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr110="expr110" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr110',
      selector: '[expr110]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr109',
    selector: '[expr109]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.misc
  }, {
    redundantAttribute: 'expr111',
    selector: '[expr111]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.login
    }]
  }, {
    redundantAttribute: 'expr112',
    selector: '[expr112]',
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
    redundantAttribute: 'expr113',
    selector: '[expr113]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Forgot your password']
    }]
  }]),
  name: 'login-page'
};

export { login_page as default };
