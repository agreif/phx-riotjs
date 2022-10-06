var unauth_nav_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    changeLocale(event, locale) {
      this.context.refreshDataGet(this.context.data.data_url + "?locale=" + locale);
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<nav class="uk-navbar-container uk-margin" uk-navbar><div class="uk-navbar-left"><a class="uk-navbar-item uk-logo" href="#">Logo</a></div><div class="uk-navbar-right"><ul class="uk-navbar-nav"><li expr69="expr69"></li><li expr71="expr71"></li></ul></div></nav>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'de',
    redundantAttribute: 'expr69',
    selector: '[expr69]',
    template: template('<a expr70="expr70">EN</a>', [{
      redundantAttribute: 'expr70',
      selector: '[expr70]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.changeLocale(e, 'en')
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'en',
    redundantAttribute: 'expr71',
    selector: '[expr71]',
    template: template('<a expr72="expr72">DE</a>', [{
      redundantAttribute: 'expr72',
      selector: '[expr72]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.changeLocale(e, 'de')
      }]
    }])
  }]),
  name: 'unauth-nav-tag'
};

export { unauth_nav_tag as default };
