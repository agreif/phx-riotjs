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

    load_p1() {
      this.refresh_data('/data/page1');
    },

    load_p2() {
      this.refresh_data('/data/page2');
    },

    load_error() {
      this.refresh_data('/data/error');
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<page1_tag expr165="expr165"></page1_tag><page2_tag expr166="expr166"></page2_tag><error_tag expr167="expr167"></error_tag><hr/><a expr168="expr168" href="#">ajax page 1</a><br/><a expr169="expr169" href="#">ajax page 2</a><br/><a expr170="expr170" href="#">ajax error page</a><br/><hr/><a href="/page1">page 1</a><br/><a href="/page2">page 2</a><br/><a href="/error">error page</a><br/>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.page1,
    redundantAttribute: 'expr165',
    selector: '[expr165]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'page1_tag',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.page2,
    redundantAttribute: 'expr166',
    selector: '[expr166]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'page2_tag',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.error,
    redundantAttribute: 'expr167',
    selector: '[expr167]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'error_tag',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    redundantAttribute: 'expr168',
    selector: '[expr168]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_p1
    }]
  }, {
    redundantAttribute: 'expr169',
    selector: '[expr169]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_p2
    }]
  }, {
    redundantAttribute: 'expr170',
    selector: '[expr170]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.load_error
    }]
  }]),
  name: 'body_tag'
};

export { body_tag as default };
