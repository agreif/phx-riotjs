var error_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
      this.page = this.context.data.pages.error;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1>Error</h1><h2 expr38="expr38"> </h2>', [{
    redundantAttribute: 'expr38',
    selector: '[expr38]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.page.message
    }]
  }]),
  name: 'error-page'
};

export { error_page as default };
