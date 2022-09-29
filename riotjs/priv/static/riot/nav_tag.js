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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<nav class="uk-navbar-container uk-margin" uk-navbar><div class="uk-navbar-left"><a class="uk-navbar-item uk-logo" href="#">Logo</a><ul class="uk-navbar-nav"><li expr13="expr13"></li></ul></div></nav>', [{
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<a expr14="expr14"> </a>', [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'class',
        evaluate: _scope => _scope.navitem.is_active ? 'uk-active' : null
      }]
    }, {
      redundantAttribute: 'expr14',
      selector: '[expr14]',
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
    redundantAttribute: 'expr13',
    selector: '[expr13]',
    itemName: 'navitem',
    indexName: null,
    evaluate: _scope => _scope.context.data.navbar.navitems
  }]),
  name: 'nav-tag'
};

export { nav_tag as default };
