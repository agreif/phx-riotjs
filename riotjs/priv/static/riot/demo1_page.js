var demo1_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    refreshNumbers() {
      this.context.refreshData(this.context.data.data_url);
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr0="expr0"> </h1><table class="uk-table uk-table-small uk-table-divider"><thead><tr><th expr1="expr1"> </th><th expr2="expr2"> </th><th expr3="expr3"> </th></tr></thead><tbody><tr expr4="expr4"></tr></tbody></table><button expr8="expr8" class="uk-button uk-button-primary"> </button>', [{
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Demo 1 Page']
    }]
  }, {
    redundantAttribute: 'expr1',
    selector: '[expr1]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Column 1']
    }]
  }, {
    redundantAttribute: 'expr2',
    selector: '[expr2]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Column 2']
    }]
  }, {
    redundantAttribute: 'expr3',
    selector: '[expr3]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Column 3']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<td expr5="expr5"> </td><td expr6="expr6"> </td><td expr7="expr7"> </td>', [{
      redundantAttribute: 'expr5',
      selector: '[expr5]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.cols[0]
      }]
    }, {
      redundantAttribute: 'expr6',
      selector: '[expr6]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.cols[1]
      }]
    }, {
      redundantAttribute: 'expr7',
      selector: '[expr7]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.cols[2]
      }]
    }]),
    redundantAttribute: 'expr4',
    selector: '[expr4]',
    itemName: 'cols',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.demo1.rows
  }, {
    redundantAttribute: 'expr8',
    selector: '[expr8]',
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
  name: 'demo1-page'
};

export { demo1_page as default };
