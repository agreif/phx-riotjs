var error_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.state = props.state;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1>Error</h1><h2 expr14="expr14"> </h2>', [{
    redundantAttribute: 'expr14',
    selector: '[expr14]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.state.data.pages.error.message
    }]
  }]),
  name: 'error_tag'
};

export { error_tag as default };
