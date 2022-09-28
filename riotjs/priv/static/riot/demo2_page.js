var demo2_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
      this.page = this.context.data.pages.demo2;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr35="expr35"> </h1>', [{
    redundantAttribute: 'expr35',
    selector: '[expr35]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.page.title
    }]
  }]),
  name: 'demo2-page'
};

export { demo2_page as default };
