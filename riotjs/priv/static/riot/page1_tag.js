var page1_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.state = props.state;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('\n  page 1 visible\n  <h1 expr18="expr18"> </h1>', [{
    redundantAttribute: 'expr18',
    selector: '[expr18]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.state.data.pages.page1.title
    }]
  }]),
  name: 'page1_tag'
};

export { page1_tag as default };
