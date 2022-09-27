var error_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1>Error</h1><h2 expr137="expr137"> </h2>', [{
    redundantAttribute: 'expr137',
    selector: '[expr137]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.pages.error.message
    }]
  }]),
  name: 'error-page'
};

export { error_page as default };
