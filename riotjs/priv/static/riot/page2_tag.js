var page2_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.state = props.state;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('\n  page 2 visible\n  <h1 expr19="expr19"> </h1>', [{
    redundantAttribute: 'expr19',
    selector: '[expr19]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.state.data.pages.page2.title
    }]
  }]),
  name: 'page2_tag'
};

export { page2_tag as default };
