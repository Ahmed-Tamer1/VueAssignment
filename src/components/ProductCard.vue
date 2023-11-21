<template>
  <div id="card">
    <div id="imageSection"><img :src="image" /></div>
    <div id="textSection">
      <div id="textWithin">
        {{ title }}<br />
        <div id="price">
          {{ price }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: ["title", "image", "price"],
  mounted() {
    this.log();
  },
  methods: {
    log() {
      ///console.log(this.title);
      //console.log(this.image);
    },
  },
};
</script>
<style scoped>
#card {
  float: left;
  margin-right: 25px;
  margin-bottom: 20px;
  width: 28vh;
  height: 52vh;
}
#imageSection {
  width: 28vh;
  height: 38vh;
}
img {
  height: 100%;
  width: 100%;
  box-shadow: 0px 0px 4px 0px;
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg);
  background-size: contain;
}
#textSection {
  width: 28vh;
  height: 14vh;
  position: relative;
}
#textWithin {
  font-family: "Lato", sans-serif;
  font-weight: 400;
}
#price {
  font-weight: 700;
}
</style>