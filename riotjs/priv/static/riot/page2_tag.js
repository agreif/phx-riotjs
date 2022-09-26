var page2_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.state = props;
    }

  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1>Page2</h1>', []),
  name: 'page2_tag'
};

export { page2_tag as default };
