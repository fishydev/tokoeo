<template>
  <div class="product-detail">
    <Navbar />
    <div class="main-section pa-lg-16 ma-lg-16 pa-md-6 ma-md-6 ma-4 pa-4">
      <div class="title-section">
        <h1 class="text-subtitle-1 title-page">Product Detail</h1>
        <v-divider></v-divider>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6">
            <GalleryProduct />
          </v-col>
          <v-col cols="12" md="6">
            <div class="product-title">
              <h1 class="text-h4">
                Product Vendor Title
              </h1>
              <span class="rating-num text--lighten-2 caption mr-2">
                ({{ rating }})
                <v-rating
                  class="rating-star"
                  v-model="rating"
                  background-color="white"
                  color="#30475E"
                  dense
                  half-increments
                  hover
                  readonly
                  size="18"
                ></v-rating>
              </span>
            </div>
            <v-divider class="mt-2"></v-divider>
            <div class="product-price">
              <p class="text-subtitle-2">Harga</p>
              <h1 class="text-h5">Rp.100.000,00</h1>
            </div>
            <v-divider class="mt-2"></v-divider>
            <div class="product-desc">
              <p class="text-subtitle-2">Description</p>
              <h1 class="text-lg-h5 text-md-body-1 text-body-1 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h1>
            </div>
            <v-divider class="mt-2"></v-divider>
            <div class="product-act">
              <v-btn color="yellow darken-1" class="btn-ask">
                <v-icon left>mdi-phone</v-icon>
                Ask Vendor
              </v-btn>
              <v-btn class="btn-order" color="success">Order</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <div class="title-section">
        <h1 class="text-subtitle-1 title-page">Review Pengguna</h1>
        <v-divider></v-divider>
      </div>
      <v-container>
        <ReviewCard />
        <ReviewProduct />
      </v-container>
    </div>
  </div>
</template>

<style lang="css">
@import "../assets/styles.css";
</style>

<script>
import Navbar from "../components/Navbar";
import GalleryProduct from "../components/GalleryProduct";
import ReviewProduct from "../components/ReviewProduct";
import ReviewCard from "../components/ReviewCard";

export default {
  data: () => ({
    rating: 4.5,
    price: "Rp.100.000",
    overlayReview: false
  }),
  components: {
    Navbar,
    GalleryProduct,
    ReviewProduct,
    ReviewCard
  }
};
</script>
