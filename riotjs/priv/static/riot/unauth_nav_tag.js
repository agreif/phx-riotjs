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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<nav class="uk-navbar-container uk-margin" uk-navbar><div class="uk-navbar-left"><a class="uk-navbar-item uk-logo" href="#">Logo</a></div><div class="uk-navbar-right"><ul class="uk-navbar-nav"><li expr34="expr34"></li><li expr36="expr36"></li></ul></div></nav>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'de',
    redundantAttribute: 'expr34',
    selector: '[expr34]',
    template: template('<a expr35="expr35">EN</a>', [{
      redundantAttribute: 'expr35',
      selector: '[expr35]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.changeLocale(e, 'en')
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'en',
    redundantAttribute: 'expr36',
    selector: '[expr36]',
    template: template('<a expr37="expr37">DE</a>', [{
      redundantAttribute: 'expr37',
      selector: '[expr37]',
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
