<template>
  <div>
    <Container>
      <h1>Apartment Page</h1>
    </Container>
  </div>
</template>

<script>
import Container from '@/components/shared/Container';
export default {
  name: 'ApartmentPage',
  components: {
    Container,
  },
  mounted() {
    //console.log(this.$router);
    //console.log(this.$route);
  },
};
</script>

<style lang="scss" scoped></style>
