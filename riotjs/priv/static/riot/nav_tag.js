var nav_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    changeNav(event, dataUrl) {
      event.preventDefault();
      this.context.refreshData(dataUrl);
    },

    logout() {
      event.preventDefault();
      this.context.postRequest(this.context.data.logout.post_url, this.context.data.logout.csrf_token, {}, this.redirectCallback);
    },

    redirectCallback(data) {
      window.location.href = '/';
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<nav class="uk-navbar-container uk-margin" uk-navbar><div class="uk-navbar-left"><a class="uk-navbar-item uk-logo" href="#">Logo</a><ul class="uk-navbar-nav"><li expr17="expr17"></li></ul></div><div class="uk-navbar-right"><ul class="uk-navbar-nav"><li><a expr19="expr19">Logout</a></li></ul></div></nav>', [{
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<a expr18="expr18"> </a>', [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'class',
        evaluate: _scope => _scope.navitem.is_active ? 'uk-active' : null
      }]
    }, {
      redundantAttribute: 'expr18',
      selector: '[expr18]',
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
        evaluate: _scope => e => _scope.changeNav(e, _scope.navitem.data_url)
      }]
    }]),
    redundantAttribute: 'expr17',
    selector: '[expr17]',
    itemName: 'navitem',
    indexName: null,
    evaluate: _scope => _scope.context.data.navbar.navitems
  }, {
    redundantAttribute: 'expr19',
    selector: '[expr19]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.logout
    }]
  }]),
  name: 'nav-tag'
};

export { nav_tag as default };
