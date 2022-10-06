var demo1_list_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    addDemo1() {
      this.context.refreshDataGet(this.context.data.pages.demo1_list.get_demo1_add_data_url);
    },

    editDemo1(event, item) {
      event.preventDefault();
      this.context.refreshDataGet(item.get_demo1_update_data_url);
    },

    deleteDemo1(event, item) {
      this.context.refreshDataPost(item.post_demo1_delete_data_url, item.csrf_token);
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr19="expr19"> </h1><table class="uk-table uk-table-small uk-table-divider uk-table-hover uk-background-muted"><thead><tr><th expr20="expr20" class="uk-width-2-5"> </th><th expr21="expr21" class="uk-width-2-5"> </th><th class="uk-align-right"><button expr22="expr22" class="uk-background-primary uk-light uk-padding-small modal-form-link uk-button uk-button-link" uk-tooltip><span uk-icon="icon: plus"></span></button></th></tr></thead><tbody><tr expr23="expr23"></tr></tbody></table><div expr28="expr28" uk-modal></div>', [{
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
    template: template('<td class="uk-table-link"><a expr24="expr24" class="uk-link-reset"> </a></td><td class="uk-table-link"><a expr25="expr25" class="uk-link-reset"> </a></td><td .uk-width-small><button expr26="expr26" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: trash"></span></button><button expr27="expr27" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: pencil"></span></button></td>', [{
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
        type: expressionTypes.ATTRIBUTE,
        name: 'uk-toggle',
        evaluate: _scope => ['target: #modal-demo1-really-delete-', _scope.item.entity.id].join('')
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'title',
        evaluate: _scope => _scope.context.data.translations['Delete Demo1']
      }]
    }, {
      redundantAttribute: 'expr27',
      selector: '[expr27]',
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
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<div class="uk-modal-dialog uk-modal-body"><h2 expr29="expr29" class="uk-modal-title"> </h2><p expr30="expr30"> </p><p class="uk-text-center"><button expr31="expr31" class="uk-button uk-button-default uk-modal-close"> </button><button expr32="expr32" class="uk-button uk-button-primary uk-modal-close"> </button></p></div>', [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'id',
        evaluate: _scope => ['modal-demo1-really-delete-', _scope.item.entity.id].join('')
      }]
    }, {
      redundantAttribute: 'expr29',
      selector: '[expr29]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.context.data.translations['Delete Demo1']
      }]
    }, {
      redundantAttribute: 'expr30',
      selector: '[expr30]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.context.data.translations['Do you really want to delete this Demo1?']
      }]
    }, {
      redundantAttribute: 'expr31',
      selector: '[expr31]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => [_scope.context.data.translations['Cancel']].join('')
      }]
    }, {
      redundantAttribute: 'expr32',
      selector: '[expr32]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => [_scope.context.data.translations['Delete']].join('')
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.deleteDemo1(e, _scope.item)
      }]
    }]),
    redundantAttribute: 'expr28',
    selector: '[expr28]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.demo1_list.demo1_items
  }]),
  name: 'demo1-list-page'
};

export { demo1_list_page as default };
