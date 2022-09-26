var page2_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr475="expr475"> </h1><a expr476="expr476" href="#">ajax page 1</a><br/>', [{
    redundantAttribute: 'expr475',
    selector: '[expr475]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.pages.page2.title
    }]
  }, {
    redundantAttribute: 'expr476',
    selector: '[expr476]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.context.load_p1
    }]
  }]),
  name: 'page2_tag'
};

export { page2_tag as default };
