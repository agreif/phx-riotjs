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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-card uk-card-default uk-card-body uk-card-hover"><h2 expr8="expr8" class="uk-card-title"> </h2><form id="demo1-add-update" class="uk-form-horizontal uk-margin-large"><div class="uk-margin"><label expr9="expr9" class="uk-form-label" for="form-horizontal-text"> </label><div class="uk-form-controls"><input expr10="expr10" type="text" name="attr1" class="uk-input"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr11="expr11"></li></ul></div></div><div class="uk-margin"><label expr13="expr13" class="uk-form-label" for="form-horizontal-text"> </label><div class="uk-form-controls"><input expr14="expr14" type="text" name="attr2" class="uk-input"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr15="expr15"></li></ul></div></div><div class="uk-text-center"><button expr17="expr17" class="uk-button uk-button-default" type="button"> </button><button expr18="expr18" class="uk-button uk-button-primary" type="button"> </button></div></form></div>', [{
    redundantAttribute: 'expr8',
    selector: '[expr8]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations[_scope.context.data.pages.demo1_add_update.title_msgid]
    }]
  }, {
    redundantAttribute: 'expr9',
    selector: '[expr9]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Attribute 1']
    }]
  }, {
    redundantAttribute: 'expr10',
    selector: '[expr10]',
    expressions: [{
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.context.data.pages.demo1_add_update.form.params.attr1
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr12="expr12" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr12',
      selector: '[expr12]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr11',
    selector: '[expr11]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.demo1_add_update.form.errors.attr1
  }, {
    redundantAttribute: 'expr13',
    selector: '[expr13]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Attribute 2']
    }]
  }, {
    redundantAttribute: 'expr14',
    selector: '[expr14]',
    expressions: [{
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.context.data.pages.demo1_add_update.form.params.attr2
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr16="expr16" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr16',
      selector: '[expr16]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr15',
    selector: '[expr15]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.demo1_add_update.form.errors.attr2
  }, {
    redundantAttribute: 'expr17',
    selector: '[expr17]',
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
    redundantAttribute: 'expr18',
    selector: '[expr18]',
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
