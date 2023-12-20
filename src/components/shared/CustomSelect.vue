<template>
  <div class="wrapper-input">
    <select v-on="listeners" class="custom-select">
      <option
        v-for="item in formattedItems"
        :key="item.value"
        :value="item.value"
      >
        {{ item.label }}
      </option>
    </select>

    <!-- <span v-if="!isValid" class="custom-input__error">{{ error }}</span> -->
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
      };
    },
    formattedItems() {
      return this.items.map(item => {
        if (typeof item === 'object') {
          return item;
        } else {
          return {
            value: item,
            label: item,
          };
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.wrapper-input {
  position: relative;
  display: inline-flex;
}

.custom-select {
  height: 40px;
  min-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;
  display: inline-block;
  cursor: pointer;

  &::placeholder {
    color: inherit;
  }

  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: red;
    line-height: 1.3;
  }
}
</style>
