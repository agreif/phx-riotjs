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

    changeLocale(event, locale) {
      this.context.refreshData(this.context.data.data_url + "?locale=" + locale);
    },

    logout() {
      event.preventDefault();
      this.context.postRequest(this.context.data.logout.post_url, this.context.data.logout.csrf_token, {}, this.redirectCallback);
    },

    redirectCallback(data) {
      window.location.href = '/';
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<nav class="uk-navbar-container uk-margin" uk-navbar><div class="uk-navbar-left"><a class="uk-navbar-item uk-logo" href="#">Logo</a><ul class="uk-navbar-nav"><li expr18="expr18"></li></ul></div><div class="uk-navbar-right"><ul class="uk-navbar-nav"><li expr20="expr20"></li><li expr22="expr22"></li><li><a expr24="expr24">Logout</a></li></ul></div></nav>', [{
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<a expr19="expr19"> </a>', [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'class',
        evaluate: _scope => _scope.navitem.is_active ? 'uk-active' : null
      }]
    }, {
      redundantAttribute: 'expr19',
      selector: '[expr19]',
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
    redundantAttribute: 'expr18',
    selector: '[expr18]',
    itemName: 'navitem',
    indexName: null,
    evaluate: _scope => _scope.context.data.navbar.navitems
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'de',
    redundantAttribute: 'expr20',
    selector: '[expr20]',
    template: template('<a expr21="expr21">EN</a>', [{
      redundantAttribute: 'expr21',
      selector: '[expr21]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.changeLocale(e, 'en')
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'en',
    redundantAttribute: 'expr22',
    selector: '[expr22]',
    template: template('<a expr23="expr23">DE</a>', [{
      redundantAttribute: 'expr23',
      selector: '[expr23]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.changeLocale(e, 'de')
      }]
    }])
  }, {
    redundantAttribute: 'expr24',
    selector: '[expr24]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.logout
    }]
  }]),
  name: 'nav-tag'
};

export { nav_tag as default };
