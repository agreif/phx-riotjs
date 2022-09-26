var body_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.state = {
        data: {
          pages: {}
        }
      };
    },

    load_p1() {
      this.refresh_data('/data/page1');
    },

    load_p2() {
      this.refresh_data('/data/page2');
    },

    log(o) {
      console.log(o);
    },

    refresh_data(url) {
      fetch(url).then(res => res.json()).then(new_data => {
        if (!new_data.error) {
          this.state.data = new_data;
          this.update();
        }
      }).catch(err => console.error(err));
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<page1_tag expr304="expr304"></page1_tag><page2_tag expr305="expr305"></page2_tag><button expr306="expr306">load p1</button><button expr307="expr307">load p2</button>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.state.data.pages.page1,
    redundantAttribute: 'expr304',
    selector: '[expr304]',
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
    redundantAttribute: 'expr305',
    selector: '[expr305]',
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
    redundantAttribute: 'expr306',
    selector: '[expr306]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_p1
    }]
  }, {
    redundantAttribute: 'expr307',
    selector: '[expr307]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_p2
    }]
  }]),
  name: 'body_tag'
};

export { body_tag as default };
