var demo1_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
      this.page = this.context.data.pages.demo1;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr229="expr229"> </h1>', [{
    redundantAttribute: 'expr229',
    selector: '[expr229]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.page.title
    }]
  }]),
  name: 'demo1-page'
};

export { demo1_page as default };
