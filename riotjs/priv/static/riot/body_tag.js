var body_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.data = {
        pages: {}
      };
    },

    log(o) {
      console.log(o);
    },

    refresh_data(url) {
      fetch(url).then(res => res.json()).then(new_data => {
        this.data = new_data;
        this.update();
      }).catch(err => console.error(err));
    },

    load_d1() {
      this.refresh_data('/data/demo1');
    },

    load_d2() {
      this.refresh_data('/data/demo2');
    },

    load_error() {
      this.refresh_data('/data/error');
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-container .uk-margin-left"><nav_tag expr18="expr18"></nav_tag><error_page expr19="expr19"></error_page><demo1_page expr20="expr20"></demo1_page><demo2_page expr21="expr21"></demo2_page><hr/><a expr22="expr22" href="#">ajax demo 1</a><br/><a expr23="expr23" href="#">ajax demo 2</a><br/><a expr24="expr24" href="#">ajax error</a><br/><hr/><a href="/demo1">demo 1</a><br/><a href="/demo2">demo 2</a><br/><a href="/error">error</a><br/></div>', [{
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'nav_tag',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr18',
    selector: '[expr18]'
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.error,
    redundantAttribute: 'expr19',
    selector: '[expr19]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'error_page',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.demo1,
    redundantAttribute: 'expr20',
    selector: '[expr20]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'demo1_page',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.demo2,
    redundantAttribute: 'expr21',
    selector: '[expr21]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'demo2_page',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    redundantAttribute: 'expr22',
    selector: '[expr22]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_d1
    }]
  }, {
    redundantAttribute: 'expr23',
    selector: '[expr23]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_d2
    }]
  }, {
    redundantAttribute: 'expr24',
    selector: '[expr24]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_error
    }]
  }]),
  name: 'body_tag'
};

export { body_tag as default };
