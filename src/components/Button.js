import Vue from "vue";

const Button = Vue.component("ButtonTest", {
  render(createElement) {
    return createElement("Button", this.$slots.default);
  },
});

export default Button;
