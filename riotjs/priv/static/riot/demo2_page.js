var demo2_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr23="expr23"> </h1><a expr24="expr24" href="#">ajax demo 1</a><br/>', [{
    redundantAttribute: 'expr23',
    selector: '[expr23]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.pages.demo2.title
    }]
  }, {
    redundantAttribute: 'expr24',
    selector: '[expr24]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.context.load_d1
    }]
  }]),
  name: 'demo2_page'
};

export { demo2_page as default };
