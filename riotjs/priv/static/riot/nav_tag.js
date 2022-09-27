var nav_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    loadData(event, dataUrl) {
      event.preventDefault();
      this.context.refreshData(dataUrl);
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-navbar-left"><a class="uk-navbar-item uk-logo" href="#">Logo</a><ul class="uk-navbar-nav"><li expr37="expr37"></li></ul></div>', [{
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'class',
      evaluate: _scope => 'uk-navbar-container uk-margin'
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'uk-navbar',
      evaluate: _scope => 'uk-navbar'
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<a expr38="expr38"> </a>', [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'class',
        evaluate: _scope => _scope.navitem.is_active ? 'uk-active' : null
      }]
    }, {
      redundantAttribute: 'expr38',
      selector: '[expr38]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.navitem.label
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'href',
        evaluate: _scope => _scope.navitem.url
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.loadData(e, _scope.navitem.data_url)
      }]
    }]),
    redundantAttribute: 'expr37',
    selector: '[expr37]',
    itemName: 'navitem',
    indexName: null,
    evaluate: _scope => _scope.context.data.navbar.navitems
  }]),
  name: 'nav'
};

export { nav_tag as default };
