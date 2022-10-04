var unauth_nav_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    changeLocale(event, locale) {
      this.context.refreshData(this.context.data.data_url + "?locale=" + locale);
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<nav class="uk-navbar-container uk-margin" uk-navbar><div class="uk-navbar-left"><a class="uk-navbar-item uk-logo" href="#">Logo</a></div><div class="uk-navbar-right"><ul class="uk-navbar-nav"><li expr43="expr43"></li><li expr45="expr45"></li></ul></div></nav>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'de',
    redundantAttribute: 'expr43',
    selector: '[expr43]',
    template: template('<a expr44="expr44">EN</a>', [{
      redundantAttribute: 'expr44',
      selector: '[expr44]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.changeLocale(e, 'en')
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'en',
    redundantAttribute: 'expr45',
    selector: '[expr45]',
    template: template('<a expr46="expr46">DE</a>', [{
      redundantAttribute: 'expr46',
      selector: '[expr46]',
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
