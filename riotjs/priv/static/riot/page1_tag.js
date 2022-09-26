var page1_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.state = props.state;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr4="expr4"> </h1>', [{
    redundantAttribute: 'expr4',
    selector: '[expr4]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.state.data.pages.page1.title
    }]
  }]),
  name: 'page1_tag'
};

export { page1_tag as default };
