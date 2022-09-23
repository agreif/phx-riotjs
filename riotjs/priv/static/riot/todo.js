var todo = {
  css: null,
  exports: {
    state: {
      message: 'text defined in statr'
    },

    get stateMessage() {
      return this.state.message;
    },

    get propsMessage() {
      return this.props.message;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr2="expr2"> </h1><p expr3="expr3"> </p>', [{
    redundantAttribute: 'expr2',
    selector: '[expr2]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.stateMessage
    }]
  }, {
    redundantAttribute: 'expr3',
    selector: '[expr3]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.propsMessage
    }]
  }]),
  name: 'todo'
};

export { todo as default };
