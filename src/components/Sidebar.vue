<template>
  <div id="sidebar" class="col-xs-12 col-sm-5 col-md-5 col-lg-5 showHide">
    <p id="categories">Category</p>
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="perfume"
        v-model="isPerfumeChecked"
        @change="handlePerfume"
      />
      <label class="form-check-label" for="flexCheckDefault"> Perfume </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="eyeliner"
        v-model="isEyelinerChecked"
        @change="handleEyeliner"
      />
      <label class="form-check-label" for="flexCheckChecked"> Eyeliner </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="customProduct"
        v-model="isCustomProductChecked"
        @change="handleCustomProduct"
      />
      <label class="form-check-label" for="flexCheckChecked">
        Custom Product
      </label>
    </div>
    <p id="categories">Brand</p>
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="customProduct"
        v-model="isChanelChecked"
        @change="handleChanel"
      />
      <label class="form-check-label" for="flexCheckChecked"> Chanel </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="customProduct"
        v-model="isInglotChecked"
        @change="handleInglot"
      />
      <label class="form-check-label" for="flexCheckChecked"> Inglot </label>
    </div>
    <button
      type="button"
      class="btn btn-primary filterButton"
      @click.stop="filter"
    >
      Filter
    </button>
  </div>
</template>
<script>
export default {
  name: "SideBar",
  data() {
    return {
      isPerfumeChecked: this.$store.state.perfume,
      isEyelinerChecked: this.$store.state.eyeliner,
      isCustomProductChecked: this.$store.state.customProduct,
      isChanelChecked: this.$store.state.chanel,
      isInglotChecked: this.$store.state.inglot,
    };
  },
  methods: {
    handlePerfume() {
      this.$store.commit("updatePerfume", this.isPerfumeChecked);
    },
    handleEyeliner() {
      this.$store.commit("updateEyeliner", this.isEyelinerChecked);
    },
    handleCustomProduct() {
      this.$store.commit("updateCustomProduct", this.isCustomProductChecked);
    },
    handleChanel() {
      this.$store.commit("updateChanel", this.isChanelChecked);
    },
    handleInglot() {
      this.$store.commit("updateInglot", this.isInglotChecked);
    },
    filter() {
      window.location.reload();
    },
  },
};
</script>
<style>
#sidebar {
  width: 262px;
  height: 100vh;

  padding-left: 20px;
  float: left;
}
#categories {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  padding-top: 20px;
  font-size: 20px;
  margin-bottom: 40px;
}
.showHide {
  display: none;
}
.filterButton {
  margin-top: 50px;
}
@media screen and (min-width: 768px) {
  .showHide {
    display: block;
  }
}
</style>