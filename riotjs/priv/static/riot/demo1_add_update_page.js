var demo1_add_update_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    add(event) {
      event.preventDefault();
      this.context.postForm(this.context.data.pages.demo1_add_update.form.post_url, this.context.data.pages.demo1_add_update.csrf_token, '#demo1-add-update');
    },

    cancel(event) {
      event.preventDefault();
      this.context.refreshDataGet(this.context.data.pages.demo1_add_update.get_demo1_list_data_url);
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-card uk-card-default uk-card-body uk-card-hover"><h2 expr0="expr0" class="uk-card-title"> </h2><form id="demo1-add-update" class="uk-form-horizontal uk-margin-large"><div class="uk-margin"><label expr1="expr1" class="uk-form-label" for="form-horizontal-text"> </label><div class="uk-form-controls"><input expr2="expr2" type="text" name="attr1" class="uk-input"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr3="expr3"></li></ul></div></div><div class="uk-margin"><label expr5="expr5" class="uk-form-label" for="form-horizontal-text"> </label><div class="uk-form-controls"><input expr6="expr6" type="text" name="attr2" class="uk-input"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr7="expr7"></li></ul></div></div><div class="uk-text-center"><button expr9="expr9" class="uk-button uk-button-default" type="button"> </button><button expr10="expr10" class="uk-button uk-button-primary" type="button"> </button></div></form></div>', [{
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations[_scope.context.data.pages.demo1_add_update.title_msgid]
    }]
  }, {
    redundantAttribute: 'expr1',
    selector: '[expr1]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Attribute 1']
    }]
  }, {
    redundantAttribute: 'expr2',
    selector: '[expr2]',
    expressions: [{
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.context.data.pages.demo1_add_update.form.params.attr1
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr4="expr4" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr4',
      selector: '[expr4]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr3',
    selector: '[expr3]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.demo1_add_update.form.errors.attr1
  }, {
    redundantAttribute: 'expr5',
    selector: '[expr5]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Attribute 2']
    }]
  }, {
    redundantAttribute: 'expr6',
    selector: '[expr6]',
    expressions: [{
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.context.data.pages.demo1_add_update.form.params.attr2
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr8="expr8" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr8',
      selector: '[expr8]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr7',
    selector: '[expr7]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.demo1_add_update.form.errors.attr2
  }, {
    redundantAttribute: 'expr9',
    selector: '[expr9]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Cancel']
    }, {
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.cancel
    }]
  }, {
    redundantAttribute: 'expr10',
    selector: '[expr10]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Save']
    }, {
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.add
    }]
  }]),
  name: 'demo1-add-update-page'
};

export { demo1_add_update_page as default };
