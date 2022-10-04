var body_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.data = {
        pages: {}
      };
    },

    updateData(newData) {
      this.data = newData;
      this.update();
    },

    updateHistory(newData) {
      if (newData.history_state && (!window.history.state || !window.history.state.data_url || window.history.state.data_url && window.history.state.data_url != newData.data_url)) {
        window.history.pushState({
          data_url: newData.data_url
        }, newData.history_state.title, newData.history_state.url);
      }
    },

    refreshData(dataUrl) {
      fetch(dataUrl).then(res => res.json()).then(newData => {
        this.updateData(newData);
        this.updateHistory(newData);
      }).catch(err => console.error(err));
    },

    postRequest(postUrl, csrfToken, json, callbackFun) {
      fetch(postUrl, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify(json)
      }).then(async rawResponse => {
        var newData = await rawResponse.json();

        if (typeof callbackFun === 'function') {
          callbackFun(newData);
        } else {
          this.updateData(newData);
          this.updateHistory(newData);
        }
      });
    },

    postForm(url, csrfToken, formSelector, callbackFun) {
      const formData = new FormData(this.$(formSelector));
      const formJson = Object.fromEntries(formData.entries());
      this.postRequest(url, csrfToken, formJson, callbackFun);
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-container .uk-margin-left"><unauth-nav-tag expr9="expr9"></unauth-nav-tag><nav-tag expr10="expr10"></nav-tag><error-page expr11="expr11"></error-page><demo1-page expr12="expr12"></demo1-page><demo2-page expr13="expr13"></demo2-page><register-page expr14="expr14"></register-page><login-page expr15="expr15"></login-page></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.register || _scope.data.pages.login,
    redundantAttribute: 'expr9',
    selector: '[expr9]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'unauth-nav-tag',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.navbar,
    redundantAttribute: 'expr10',
    selector: '[expr10]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'nav-tag',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.error,
    redundantAttribute: 'expr11',
    selector: '[expr11]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'error-page',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.demo1,
    redundantAttribute: 'expr12',
    selector: '[expr12]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'demo1-page',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.demo2,
    redundantAttribute: 'expr13',
    selector: '[expr13]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'demo2-page',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.register,
    redundantAttribute: 'expr14',
    selector: '[expr14]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'register-page',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.login,
    redundantAttribute: 'expr15',
    selector: '[expr15]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'login-page',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }]),
  name: 'body-tag'
};

export { body_tag as default };
