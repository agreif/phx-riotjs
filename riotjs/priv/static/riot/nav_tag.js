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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<nav class="uk-navbar-container uk-margin" uk-navbar><div class="uk-navbar-left"><a class="uk-navbar-item uk-logo" href="#">Logo</a><ul class="uk-navbar-nav"><li expr8="expr8"></li></ul></div></nav>', [{
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<a expr9="expr9"> </a>', [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'class',
        evaluate: _scope => _scope.navitem.is_active ? 'uk-active' : null
      }]
    }, {
      redundantAttribute: 'expr9',
      selector: '[expr9]',
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
    redundantAttribute: 'expr8',
    selector: '[expr8]',
    itemName: 'navitem',
    indexName: null,
    evaluate: _scope => _scope.context.data.navbar.navitems
  }]),
  name: 'nav-tag'
};

export { nav_tag as default };
