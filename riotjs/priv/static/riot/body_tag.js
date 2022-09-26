var body_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.state = {
        data: {
          pages: {
            page1: true,
            page2: false
          }
        }
      };
    },

    p0() {
      this.update({
        data: {
          pages: {
            page1: false,
            page2: false
          }
        }
      });
    },

    p1() {
      this.update({
        data: {
          pages: {
            page1: true,
            page2: false
          }
        }
      });
    },

    p2() {
      this.update({
        data: {
          pages: {
            page1: false,
            page2: true
          }
        }
      });
    },

    p12() {
      this.update({
        data: {
          pages: {
            page1: true,
            page2: true
          }
        }
      });
    },

    refreshData() {
      this.update({
        data: {
          pages: {}
        }
      });
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<page1_tag expr104="expr104"></page1_tag><page2_tag expr105="expr105"></page2_tag><button expr106="expr106">p0</button><button expr107="expr107">p1</button><button expr108="expr108">p2</button><button expr109="expr109">p12</button>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.state.data.pages.page1,
    redundantAttribute: 'expr104',
    selector: '[expr104]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'page1_tag',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'data',
        evaluate: _scope => _scope.state.data
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.state.data.pages.page2,
    redundantAttribute: 'expr105',
    selector: '[expr105]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'page2_tag',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'data',
        evaluate: _scope => _scope.state.data
      }]
    }])
  }, {
    redundantAttribute: 'expr106',
    selector: '[expr106]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.p0
    }]
  }, {
    redundantAttribute: 'expr107',
    selector: '[expr107]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.p1
    }]
  }, {
    redundantAttribute: 'expr108',
    selector: '[expr108]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.p2
    }]
  }, {
    redundantAttribute: 'expr109',
    selector: '[expr109]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.p12
    }]
  }]),
  name: 'body_tag'
};

export { body_tag as default };
