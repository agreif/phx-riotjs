var error_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1>Error</h1><h2 expr108="expr108"> </h2>', [{
    redundantAttribute: 'expr108',
    selector: '[expr108]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.pages.error.message
    }]
  }]),
  name: 'error_tag'
};

export { error_tag as default };
