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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h3 expr35="expr35"> </h3><ul><li expr36="expr36"></li></ul><form expr39="expr39"><input expr40="expr40"/><button expr41="expr41"> </button></form>', [{
    redundantAttribute: 'expr35',
    selector: '[expr35]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.props.title
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<label expr37="expr37"><input expr38="expr38" type="checkbox"/> </label>', [{
      redundantAttribute: 'expr37',
      selector: '[expr37]',
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
      redundantAttribute: 'expr38',
      selector: '[expr38]',
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
    redundantAttribute: 'expr36',
    selector: '[expr36]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.state.items
  }, {
    redundantAttribute: 'expr39',
    selector: '[expr39]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onsubmit',
      evaluate: _scope => _scope.add
    }]
  }, {
    redundantAttribute: 'expr40',
    selector: '[expr40]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onkeyup',
      evaluate: _scope => _scope.edit
    }, {
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.state.text
    }]
  }, {
    redundantAttribute: 'expr41',
    selector: '[expr41]',
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
