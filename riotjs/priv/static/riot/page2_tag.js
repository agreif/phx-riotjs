var page2_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.state = props.state;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr5="expr5"> </h1>', [{
    redundantAttribute: 'expr5',
    selector: '[expr5]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.state.data.pages.page2.title
    }]
  }]),
  name: 'page2_tag'
};

export { page2_tag as default };
