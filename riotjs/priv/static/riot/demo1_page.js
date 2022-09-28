var demo1_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr309="expr309"> </h1>', [{
    redundantAttribute: 'expr309',
    selector: '[expr309]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.pages.demo1.title
    }]
  }]),
  name: 'demo1-page'
};

export { demo1_page as default };
