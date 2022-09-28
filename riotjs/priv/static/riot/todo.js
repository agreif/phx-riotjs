var todo = {
  css: null,
  exports: {
    onBeforeMount(props, state) {
      // initial state
      this.state = {
        items: props.items,
        text: ''
      };
    },

    edit(e) {
      // update only the text state
      this.update({
        text: e.target.value
      });
    },

    add(e) {
      e.preventDefault();

      if (this.state.text) {
        this.update({
          items: [...this.state.items, // add a new item
          {
            title: this.state.text
          }],
          text: ''
        });
      }
    },

    toggle(item) {
      item.done = !item.done; // trigger a component update

      this.update();
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h3 expr14="expr14"> </h3><ul><li expr15="expr15"></li></ul><form expr18="expr18"><input expr19="expr19"/><button expr20="expr20"> </button></form>', [{
    redundantAttribute: 'expr14',
    selector: '[expr14]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.props.title
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<label expr16="expr16"><input expr17="expr17" type="checkbox"/> </label>', [{
      redundantAttribute: 'expr16',
      selector: '[expr16]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 1,
        evaluate: _scope => [_scope.item.title].join('')
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'class',
        evaluate: _scope => _scope.item.done ? 'completed' : null
      }]
    }, {
      redundantAttribute: 'expr17',
      selector: '[expr17]',
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'checked',
        evaluate: _scope => _scope.item.done
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => () => _scope.toggle(_scope.item)
      }]
    }]),
    redundantAttribute: 'expr15',
    selector: '[expr15]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.state.items
  }, {
    redundantAttribute: 'expr18',
    selector: '[expr18]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onsubmit',
      evaluate: _scope => _scope.add
    }]
  }, {
    redundantAttribute: 'expr19',
    selector: '[expr19]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onkeyup',
      evaluate: _scope => _scope.edit
    }, {
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.state.text
    }]
  }, {
    redundantAttribute: 'expr20',
    selector: '[expr20]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => ['Add #', _scope.state.items.length + 1].join('')
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'disabled',
      evaluate: _scope => !_scope.state.text
    }]
  }]),
  name: 'todo'
};

export { todo as default };
