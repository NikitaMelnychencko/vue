<template>
  <header class="header">
    <Container><Logo /></Container>
  </header>
</template>

<script>
import Container from './shared/Container';
import Logo from './Logo';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  components: {
    Container,
    Logo,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 0;
  background: $secondary-color;
}
</style>
