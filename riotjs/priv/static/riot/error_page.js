var error_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1>Error</h1><h2 expr10="expr10"> </h2>', [{
    redundantAttribute: 'expr10',
    selector: '[expr10]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.pages.error.message
    }]
  }]),
  name: 'error_page'
};

export { error_page as default };
