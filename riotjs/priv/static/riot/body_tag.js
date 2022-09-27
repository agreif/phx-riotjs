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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-container .uk-margin-left"><nav-tag expr680="expr680"></nav-tag><error-page expr681="expr681"></error-page><demo1-page expr682="expr682"></demo1-page><demo2-page expr683="expr683"></demo2-page><hr/><a expr684="expr684" href="#">ajax demo 1</a><br/><a expr685="expr685" href="#">ajax demo 2</a><br/><a expr686="expr686" href="#">ajax error</a><br/><hr/><a href="/demo1">demo 1</a><br/><a href="/demo2">demo 2</a><br/><a href="/error">error</a><br/></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.navbar,
    redundantAttribute: 'expr680',
    selector: '[expr680]',
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
    redundantAttribute: 'expr681',
    selector: '[expr681]',
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
    redundantAttribute: 'expr682',
    selector: '[expr682]',
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
    redundantAttribute: 'expr683',
    selector: '[expr683]',
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
    redundantAttribute: 'expr684',
    selector: '[expr684]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_d1
    }]
  }, {
    redundantAttribute: 'expr685',
    selector: '[expr685]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_d2
    }]
  }, {
    redundantAttribute: 'expr686',
    selector: '[expr686]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_error
    }]
  }]),
  name: 'body-tag'
};

export { body_tag as default };
