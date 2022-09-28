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

    refreshData(dataUrl) {
      fetch(dataUrl).then(res => res.json()).then(newData => {
        this.updateData(newData);

        if (this.data.history_state && (!window.history.state || !window.history.state.data_url || window.history.state.data_url && window.history.state.data_url != dataUrl)) {
          window.history.pushState({
            data_url: dataUrl
          }, this.data.history_state.title, this.data.history_state.url);
        }
      }).catch(err => console.error(err));
    },

    postRequest(postUrl, json) {
      fetch(postUrl, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
      }).then(async rawResponse => {
        var newData = await rawResponse.json();
        console.log(newData);
        this.updataData(newData);
      });
    },

    postForm(url, formSelector) {
      const formData = new FormData(this.$(formSelector));
      const formJson = Object.fromEntries(formData.entries());
      this.postRequest(url, formJson);
    },

    load_d1() {
      this.refreshData('/data/demo1');
    },

    load_d2() {
      this.refreshData('/data/demo2');
    },

    load_error() {
      this.refreshData('/data/error');
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-container .uk-margin-left"><nav-tag expr18="expr18"></nav-tag><error-page expr19="expr19"></error-page><demo1-page expr20="expr20"></demo1-page><demo2-page expr21="expr21"></demo2-page><register-page expr22="expr22"></register-page></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.navbar,
    redundantAttribute: 'expr18',
    selector: '[expr18]',
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
    redundantAttribute: 'expr19',
    selector: '[expr19]',
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
    redundantAttribute: 'expr20',
    selector: '[expr20]',
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
    redundantAttribute: 'expr21',
    selector: '[expr21]',
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
    redundantAttribute: 'expr22',
    selector: '[expr22]',
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
  }]),
  name: 'body-tag'
};

export { body_tag as default };
