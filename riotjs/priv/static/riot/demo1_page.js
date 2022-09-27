var demo1_page = {
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
      evaluate: _scope => _scope.context.data.pages.demo1.title
    }]
  }]),
  name: 'demo1_page'
};

export { demo1_page as default };
