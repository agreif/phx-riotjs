var nav_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-navbar-left"><a class="uk-navbar-item uk-logo" href="#">Logo</a><ul class="uk-navbar-nav"><li class="uk-active"><a href="#">Active</a></li><li><a href="#">Item</a></li><li><a href="#">Item</a></li></ul></div>', [{
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'class',
      evaluate: _scope => 'uk-navbar-container uk-margin'
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'uk-navbar',
      evaluate: _scope => 'uk-navbar'
    }]
  }]),
  name: 'nav'
};

export { nav_tag as default };
