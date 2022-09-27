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

    refreshData(url) {
      fetch(url).then(res => res.json()).then(new_data => {
        this.data = new_data;
        this.update();
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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-container .uk-margin-left"><nav_tag expr30="expr30"></nav_tag><error_page expr31="expr31"></error_page><demo1_page expr32="expr32"></demo1_page><demo2_page expr33="expr33"></demo2_page><hr/><a expr34="expr34" href="#">ajax demo 1</a><br/><a expr35="expr35" href="#">ajax demo 2</a><br/><a expr36="expr36" href="#">ajax error</a><br/><hr/><a href="/demo1">demo 1</a><br/><a href="/demo2">demo 2</a><br/><a href="/error">error</a><br/></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.navbar,
    redundantAttribute: 'expr30',
    selector: '[expr30]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'nav_tag',
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
    redundantAttribute: 'expr31',
    selector: '[expr31]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'error_page',
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
    redundantAttribute: 'expr32',
    selector: '[expr32]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'demo1_page',
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
    redundantAttribute: 'expr33',
    selector: '[expr33]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'demo2_page',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    redundantAttribute: 'expr34',
    selector: '[expr34]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_d1
    }]
  }, {
    redundantAttribute: 'expr35',
    selector: '[expr35]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_d2
    }]
  }, {
    redundantAttribute: 'expr36',
    selector: '[expr36]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_error
    }]
  }]),
  name: 'body_tag'
};

export { body_tag as default };
