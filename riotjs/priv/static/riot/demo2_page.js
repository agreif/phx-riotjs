var demo2_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    refreshNumbers() {
      this.context.refreshDataGet(this.context.data.data_url);
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr33="expr33"> </h1><table class="uk-table uk-table-small uk-table-divider"><thead><tr><th expr34="expr34"> </th><th expr35="expr35"> </th><th expr36="expr36"> </th></tr></thead><tbody><tr expr37="expr37"></tr></tbody></table><button expr41="expr41" class="uk-button uk-button-primary"> </button>', [{
    redundantAttribute: 'expr33',
    selector: '[expr33]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Demo 2 Page']
    }]
  }, {
    redundantAttribute: 'expr34',
    selector: '[expr34]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Column 1']
    }]
  }, {
    redundantAttribute: 'expr35',
    selector: '[expr35]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Column 2']
    }]
  }, {
    redundantAttribute: 'expr36',
    selector: '[expr36]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Column 3']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<td expr38="expr38"> </td><td expr39="expr39"> </td><td expr40="expr40"> </td>', [{
      redundantAttribute: 'expr38',
      selector: '[expr38]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.row[0]
      }]
    }, {
      redundantAttribute: 'expr39',
      selector: '[expr39]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.row[1]
      }]
    }, {
      redundantAttribute: 'expr40',
      selector: '[expr40]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.row[2]
      }]
    }]),
    redundantAttribute: 'expr37',
    selector: '[expr37]',
    itemName: 'row',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.demo2.rows
  }, {
    redundantAttribute: 'expr41',
    selector: '[expr41]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Refresh']
    }, {
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => e => _scope.refreshNumbers()
    }]
  }]),
  name: 'demo2-page'
};

export { demo2_page as default };
