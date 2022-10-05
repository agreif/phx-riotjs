var demo2_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr27="expr27"> </h1>', [{
    redundantAttribute: 'expr27',
    selector: '[expr27]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Demo 2 Page']
    }]
  }]),
  name: 'demo2-page'
};

export { demo2_page as default };
