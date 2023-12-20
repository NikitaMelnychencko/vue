<template>
  <div id="app">
    <h2>{{ text }}</h2>
    <Container>
      <ApartmentFilterForm class="apartments-filter" @submit="filter"
    /></Container>
    <p v-if="!filteredApartments.length">Нічого не знайдено</p>
    <ApartmentsList :items="filteredApartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :description="apartment.descr"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :price="apartment.price"
          @click.native="handelItemClick"
        />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentsList from '@/components/apartment/ApartmentsList';
import ApartmentsItem from '@/components/apartment/ApartmentsItem';
import ApartmentFilterForm from '@/components/apartment/ApartmentFilterForm';
import apartments from '@/components/apartment/apartments.js';
import Container from './components/shared/Container';
export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    Container,
  },
  data() {
    return {
      text: '',
      apartments,
      filters: {
        city: '',
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;
      return apartments.filter(apartment => {
        return apartment.location.city === this.filters.city;
      });
    },

    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;
      return apartments.filter(
        apartment => apartment.price >= Number(this.filters.price),
      );
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.apartments-filter {
  margin-bottom: 40px;
}
</style>
