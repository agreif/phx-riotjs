var demo2_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr8="expr8"> </h1><a expr9="expr9" href="#">ajax demo 1</a><br/>', [{
    redundantAttribute: 'expr8',
    selector: '[expr8]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.pages.demo2.title
    }]
  }, {
    redundantAttribute: 'expr9',
    selector: '[expr9]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.context.load_d1
    }]
  }]),
  name: 'demo2_page'
};

export { demo2_page as default };
