var page1_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.state = props;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1>Page1</h1>', []),
  name: 'page1_tag'
};

export { page1_tag as default };
