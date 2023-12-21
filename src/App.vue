<template>
  <div id="app">
    <div class="content">
      <Header />
      <h2>{{ text }}</h2>
      <Container>
        <ApartmentFilterForm class="apartments-filter" @submit="filter" />

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
          </template> </ApartmentsList
      ></Container>
    </div>
    <Footer />
  </div>
</template>

<script>
import ApartmentsList from '@/components/apartment/ApartmentsList';
import ApartmentsItem from '@/components/apartment/ApartmentsItem';
import ApartmentFilterForm from '@/components/apartment/ApartmentFilterForm';
import apartments from '@/components/apartment/apartments.js';
import Container from './components/shared/Container';
import Footer from './components/Footer';
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    Container,
    Footer,
    Header,
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 120px;

  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
}

.apartments-filter {
  margin-bottom: 40px;
}
</style>
