<template>
  <div id="ProductContainer">
    <button
      type="button"
      class="btn btn-primary showFilter"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalLong"
    >
      Filter
    </button>
    <div
      class="modal fade"
      id="exampleModalLong"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-body">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Filter</h5>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body"><side-bar id="sideBar"></side-bar></div>
          </div>
        </div>
      </div>
    </div>
    <product-card
      v-for="item in data"
      v-bind:key="item.id"
      :title="item.title"
      :image="item.default_variant.image"
      :price="item.default_variant.price"
    >
    </product-card>
  </div>
</template>
<script>
import ProductCard from "./ProductCard.vue";
import SideBar from "./Sidebar.vue";
export default {
  name: "ProductCardContainer",
  props: [],
  data() {
    return {
      data: [],
      tempData: "",
      image: "",
      perfume: false,
    };
  },
  components: {
    ProductCard,
    SideBar,
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    render() {
      this.shouldRenderChild = true;
    },
    async fetchData() {
      const response = await fetch(
        "https://joulia.dashboard.hamburgermenu.app/api/v1/products"
      );
      this.data = [];
      this.tempData = await response.json();
      this.tempData = this.tempData.data;
      console.log(this.tempData);
      const perfumeVal = this.perfumeState;
      const eyelinerVal = this.eyelinerState;
      const customProductVal = this.customProductState;
      const chanelVal = this.chanelState;
      const inglotVal = this.inglotState;
      this.tempData.forEach((element) => {
        var done = false;
        if (chanelVal && !done) {
          const productTitle = element.title;
          if (
            productTitle.toLowerCase().includes("chanel") &&
            !this.eyelinerState &&
            !this.customProductState
          ) {
            this.data.push(element);
            done = true;
          }

          console.log(this.data);
        }

        if (inglotVal && !done) {
          const productTitle = element.title;
          if (
            productTitle.toLowerCase().includes("amc") &&
            !(
              this.customProductState &&
              !this.eyelinerState &&
              !this.perfumeState
            ) &&
            !(
              !this.customProductState &&
              !this.eyelinerState &&
              this.perfumeState
            )
          ) {
            this.data.push(element);
            done = true;
          }
          console.log(this.data);
        }
        if (perfumeVal && !done) {
          const productTitle = element.title;
          if (
            (productTitle.toLowerCase().includes("parfum") ||
              productTitle.toLowerCase().includes("toilette")) &&
            !(!this.chanelState && this.inglotState)
          ) {
            this.data.push(element);
            done = true;
          }
          console.log(this.data);
        }
        if (eyelinerVal && !done) {
          const productTitle = element.title;
          if (
            productTitle.toLowerCase().includes("eye") &&
            productTitle.toLowerCase().includes("amc") &&
            this.inglotState &&
            !this.chanelState
          ) {
            this.data.push(element);
            done = true;
          } else if (
            productTitle.toLowerCase().includes("eye") &&
            !this.inglotState &&
            !this.chanelState
          ) {
            this.data.push(element);
            done = true;
          }
          console.log(this.data);
        }
        if (customProductVal && !done) {
          const productTitle = element.title;
          if (
            productTitle.toLowerCase().includes("custom") &&
            !this.chanelState &&
            !this.inglotState
          ) {
            this.data.push(element);
            done = true;
          }

          console.log(this.data);
        }
      });
      if (
        !customProductVal &&
        !eyelinerVal &&
        !perfumeVal &&
        !chanelVal &&
        !inglotVal
      ) {
        this.data = this.tempData;
      }
    },
  },
  computed: {
    perfumeState() {
      return this.$store.state.perfume;
    },
    eyelinerState() {
      return this.$store.state.eyeliner;
    },
    customProductState() {
      return this.$store.state.customProduct;
    },
    chanelState() {
      return this.$store.state.chanel;
    },
    inglotState() {
      return this.$store.state.inglot;
    },
  },
};
</script>
<style scoped>
#ProductContainer {
  padding-left: 40px;
  padding-top: 40px;
  overflow-y: scroll;
  height: 100vh;
}

#sideBar {
  display: block !important;
}
.modal-dialog {
  margin: 0;
  height: 100vh;
}

.showFilter {
  display: none;
}
@media screen and (max-width: 768px) {
  .showFilter {
    display: block;
    margin-bottom: 2vh;
  }
}
</style>
