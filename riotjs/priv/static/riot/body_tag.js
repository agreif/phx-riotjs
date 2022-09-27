var body_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.data = {
        pages: {}
      };
    },

    log(o) {
      console.log(o);
    },

    refreshData(dataUrl) {
      fetch(dataUrl).then(res => res.json()).then(new_data => {
        this.data = new_data;
        this.update();

        if (this.data.history_state && (!window.history.state || !window.history.state.data_url || window.history.state.data_url && window.history.state.data_url != dataUrl)) {
          window.history.pushState({
            data_url: dataUrl
          }, this.data.history_state.title, this.data.history_state.url);
        }
      }).catch(err => console.error(err));
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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-container .uk-margin-left"><nav-tag expr140="expr140"></nav-tag><error-page expr141="expr141"></error-page><demo1-page expr142="expr142"></demo1-page><demo2-page expr143="expr143"></demo2-page></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.navbar,
    redundantAttribute: 'expr140',
    selector: '[expr140]',
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
    redundantAttribute: 'expr141',
    selector: '[expr141]',
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
    redundantAttribute: 'expr142',
    selector: '[expr142]',
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
    redundantAttribute: 'expr143',
    selector: '[expr143]',
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
  }]),
  name: 'body-tag'
};

export { body_tag as default };
