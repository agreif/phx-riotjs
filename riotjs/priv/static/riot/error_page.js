var error_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
      this.page = this.context.data.pages.error;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1>Error</h1><h2 expr42="expr42"> </h2>', [{
    redundantAttribute: 'expr42',
    selector: '[expr42]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.page.message
    }]
  }]),
  name: 'error-page'
};

export { error_page as default };
