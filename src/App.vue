<template>
  <div :id="$style.app">
    <h2>{{ text }}</h2>
    <!-- <input
      type="text"
      :value="text"
      @input="event => (text = event.target.value)"
    /> -->
    <CustomInput v-model="text" />
    <ApartmentsList :items="apartments">
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
import CustomInput from '@/components/shared/CustomInput';
import apartments from '@/components/apartment/apartments.js';

export default {
  name: 'App',
  components: { ApartmentsList, ApartmentsItem, CustomInput },
  data() {
    return {
      text: '',
      apartments,
    };
  },
  methods: {
    handelItemClick() {
      console.log('item click');
    },
  },
};
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
