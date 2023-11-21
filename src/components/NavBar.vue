<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Grocery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Electronics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Clothing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Furniture</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Toys & Video Games</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Baby</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Beauty</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Personal Care</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pets</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Stationery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Brands</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      show: true,
    };
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    },
  },
};
</script>
<style>
.nav-item {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  color: black;
}

.collapse {
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .nav-item {
    margin-left: 1vh;
  }
  .navbar-toggler {
    margin-left: 1vh;
  }
}
</style>


