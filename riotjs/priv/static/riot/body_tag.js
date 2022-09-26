var body_tag = {
  css: null,
  exports: {
    state: {
      data: {
        pages: {}
      }
    },

    load_p1() {
      this.refresh_data('/data/page1');
    },

    load_p2() {
      this.refresh_data('/data/page2');
    },

    log(o) {
      console.log("" + o);
    },

    refresh_data(url) {
      this.log(url);
      fetch(url).then(res => res.json()).then(new_data => {
        this.state.data = new_data;
        this.update();
      }).catch(err => console.error(err));
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<page1_tag expr48="expr48"></page1_tag><page2_tag expr49="expr49"></page2_tag><button expr50="expr50">load p1</button><button expr51="expr51">load p2</button>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.state.data.pages.page1,
    redundantAttribute: 'expr48',
    selector: '[expr48]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'page1_tag',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'state',
        evaluate: _scope => _scope.state
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.state.data.pages.page2,
    redundantAttribute: 'expr49',
    selector: '[expr49]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'page2_tag',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'state',
        evaluate: _scope => _scope.state
      }]
    }])
  }, {
    redundantAttribute: 'expr50',
    selector: '[expr50]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_p1
    }]
  }, {
    redundantAttribute: 'expr51',
    selector: '[expr51]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_p2
    }]
  }]),
  name: 'body_tag'
};

export { body_tag as default };
