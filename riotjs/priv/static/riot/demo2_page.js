var demo2_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr310="expr310"> </h1>', [{
    redundantAttribute: 'expr310',
    selector: '[expr310]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.pages.demo2.title
    }]
  }]),
  name: 'demo2-page'
};

export { demo2_page as default };
