var demo1_add_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },

    add(event) {
      event.preventDefault();
      this.context.postForm(this.context.data.pages.demo1_add.form.post_url, this.context.data.pages.demo1_add.csrf_token, '#demo1-add');
    },

    cancel(event) {
      event.preventDefault();
      this.context.refreshData(this.context.data.pages.demo1_add.demo1_data_url);
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-card uk-card-default uk-card-body uk-card-hover"><h2 expr0="expr0" class="uk-card-title"> </h2><form id="demo1-add" class="uk-form-horizontal uk-margin-large"><div class="uk-margin"><label class="uk-form-label" for="form-horizontal-text">attr1</label><div class="uk-form-controls"><input class="uk-input" name="attr1" type="text"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr1="expr1"></li></ul></div></div><div class="uk-margin"><label class="uk-form-label" for="form-horizontal-text">attr2</label><div class="uk-form-controls"><input class="uk-input" name="attr2" type="text"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr3="expr3"></li></ul></div></div><div class="uk-text-center"><button expr5="expr5" class="uk-button uk-button-default" type="button">Cancel</button><button expr6="expr6" class="uk-button uk-button-primary" type="button">Save</button></div></form></div>', [{
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Add Demo 1']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr2="expr2" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr2',
      selector: '[expr2]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr1',
    selector: '[expr1]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.demo1_add.form.errors.attr1
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
    evaluate: _scope => _scope.context.data.pages.demo1_add.form.errors.attr2
  }, {
    redundantAttribute: 'expr5',
    selector: '[expr5]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.cancel
    }]
  }, {
    redundantAttribute: 'expr6',
    selector: '[expr6]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.add
    }]
  }]),
  name: 'demo1-add-page'
};

export { demo1_add_page as default };
