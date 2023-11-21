<template>
  <p id="logo">LOGO</p>
  <NavBar msg="Welcome to Your Vue.js App" />
  <SideBar />
  <ProductCardContainer />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/Sidebar.vue";
import ProductCardContainer from "./components/ProductCardContainer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
    ProductCardContainer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
#logo {
  font-family: "Lato", sans-serif;
  font-size: 3vh;
  font-weight: 700;
  margin-left: 1vh;
  margin-top: 1vh;
}
</style>
