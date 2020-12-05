<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div><img src="../assets/avatar.png" alt="avatar" width="100px" /></div>
      <div><img src="../assets/avatar.png" alt="avatar" width="100px" /></div>
      <div><img src="../assets/avatar.png" alt="avatar" width="100px" /></div>
      <div><img src="../assets/avatar.png" alt="avatar" width="100px" /></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Test",
  components: { VueSlickCarousel }
};
</script>
