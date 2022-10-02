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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h3 expr29="expr29"> </h3><ul><li expr30="expr30"></li></ul><form expr33="expr33"><input expr34="expr34"/><button expr35="expr35"> </button></form>', [{
    redundantAttribute: 'expr29',
    selector: '[expr29]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.props.title
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<label expr31="expr31"><input expr32="expr32" type="checkbox"/> </label>', [{
      redundantAttribute: 'expr31',
      selector: '[expr31]',
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
      redundantAttribute: 'expr32',
      selector: '[expr32]',
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
    redundantAttribute: 'expr30',
    selector: '[expr30]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.state.items
  }, {
    redundantAttribute: 'expr33',
    selector: '[expr33]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onsubmit',
      evaluate: _scope => _scope.add
    }]
  }, {
    redundantAttribute: 'expr34',
    selector: '[expr34]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onkeyup',
      evaluate: _scope => _scope.edit
    }, {
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.state.text
    }]
  }, {
    redundantAttribute: 'expr35',
    selector: '[expr35]',
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
