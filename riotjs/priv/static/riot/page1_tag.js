var page1_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr409="expr409"> </h1>', [{
    redundantAttribute: 'expr409',
    selector: '[expr409]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.pages.page1.title
    }]
  }]),
  name: 'page1_tag'
};

export { page1_tag as default };
