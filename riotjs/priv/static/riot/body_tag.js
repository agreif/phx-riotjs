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

    log(o) {
      console.log(o);
    },

    refresh_data(url) {
      fetch(url).then(res => res.json()).then(new_data => {
        this.state.data = new_data;
        this.update();
      }).catch(err => console.error(err));
    },

    load_p1() {
      this.refresh_data('/data/page1');
    },

    load_p2() {
      this.refresh_data('/data/page2');
    },

    load_error() {
      this.refresh_data('/data/error');
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<page1_tag expr46="expr46"></page1_tag><page2_tag expr47="expr47"></page2_tag><error_tag expr48="expr48"></error_tag><hr/><a expr49="expr49" href="#">page 1</a><br/><a expr50="expr50" href="#">page 2</a><br/><a expr51="expr51" href="#">error page</a><br/>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.state.data.pages.page1,
    redundantAttribute: 'expr46',
    selector: '[expr46]',
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
    redundantAttribute: 'expr47',
    selector: '[expr47]',
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
    type: bindingTypes.IF,
    evaluate: _scope => _scope.state.data.pages.error,
    redundantAttribute: 'expr48',
    selector: '[expr48]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'error_tag',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'state',
        evaluate: _scope => _scope.state
      }]
    }])
  }, {
    redundantAttribute: 'expr49',
    selector: '[expr49]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_p1
    }]
  }, {
    redundantAttribute: 'expr50',
    selector: '[expr50]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_p2
    }]
  }, {
    redundantAttribute: 'expr51',
    selector: '[expr51]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_error
    }]
  }]),
  name: 'body_tag'
};

export { body_tag as default };
