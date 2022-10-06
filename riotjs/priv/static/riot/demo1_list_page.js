var demo1_list_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    addDemo1() {
      this.context.refreshData(this.context.data.pages.demo1_list.demo1_add_data_url);
    },

    editDemo1(event, item) {
      event.preventDefault();
      this.context.refreshData(item.demo1_update_data_url);
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr19="expr19"> </h1><table class="uk-table uk-table-small uk-table-divider uk-table-hover uk-background-muted"><thead><tr><th expr20="expr20" class="uk-width-2-5"> </th><th expr21="expr21" class="uk-width-2-5"> </th><th class="uk-align-right"><button expr22="expr22" class="uk-background-primary uk-light uk-padding-small modal-form-link uk-button uk-button-link" uk-tooltip><span uk-icon="icon: plus"></span></button></th></tr></thead><tbody><tr expr23="expr23"></tr></tbody></table>', [{
    redundantAttribute: 'expr19',
    selector: '[expr19]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Demo 1 Page']
    }]
  }, {
    redundantAttribute: 'expr20',
    selector: '[expr20]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Attribute 1']
    }]
  }, {
    redundantAttribute: 'expr21',
    selector: '[expr21]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Attribute 2']
    }]
  }, {
    redundantAttribute: 'expr22',
    selector: '[expr22]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.addDemo1
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'title',
      evaluate: _scope => _scope.context.data.translations['Add Demo1']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<td class="uk-table-link"><a expr24="expr24" class="uk-link-reset"> </a></td><td class="uk-table-link"><a expr25="expr25" class="uk-link-reset"> </a></td><td .uk-width-small><button expr26="expr26" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: pencil"></span></button></td>', [{
      redundantAttribute: 'expr24',
      selector: '[expr24]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.entity.attr1
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.editDemo1(e, _scope.item)
      }]
    }, {
      redundantAttribute: 'expr25',
      selector: '[expr25]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.entity.attr2
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.editDemo1(e, _scope.item)
      }]
    }, {
      redundantAttribute: 'expr26',
      selector: '[expr26]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.editDemo1(e, _scope.item)
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'title',
        evaluate: _scope => _scope.context.data.translations['Edit Demo1']
      }]
    }]),
    redundantAttribute: 'expr23',
    selector: '[expr23]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.demo1_list.demo1_items
  }]),
  name: 'demo1-list-page'
};

export { demo1_list_page as default };
