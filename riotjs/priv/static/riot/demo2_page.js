var demo2_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr7="expr7"> </h1>', [{
    redundantAttribute: 'expr7',
    selector: '[expr7]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Demo 2 Page']
    }]
  }]),
  name: 'demo2-page'
};

export { demo2_page as default };
