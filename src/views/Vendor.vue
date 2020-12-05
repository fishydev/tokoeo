<template>
  <div class="vendor">
    <Navbar />
    <div class="py-16 px-4">
      <v-row justify="center">
        <v-col cols="10">
          <p class="display-1">Choose a Category</p>
          <v-select v-model="category" :items="items" solo></v-select>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10" v-if="category != ''">
          <p class="display-1">Browsing: {{ category }}</p>
          <div class="d-flex">
            <div class="d-flex flex-wrap mx-auto justify-center">
              <v-card
                class="ma-3 pb-0"
                v-for="vendor in vendors"
                :key="vendor.index"
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
                  width="225px"
                  height="150px"
                ></v-img>
                <v-card-title>{{ vendor.name }}</v-card-title>
                <v-card-text class="pb-0">
                  <p class="subtitle-1">Detail Vendor</p>
                  <div class="d-flex justify-center">
                    <v-rating
                      half-increments
                      readonly
                      v-model="vendor.rating"
                      small
                    ></v-rating>
                  </div>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  data: () => ({
    category: "",
    items: ["Venue", "Catering", "Sound System", "Security"],
    vendors: [
      { name: "Nama Vendor", rating: "5" },
      { name: "Nama Vendor", rating: "4.5" },
      { name: "Nama Vendor", rating: "4" },
      { name: "Nama Vendor", rating: "3" },
      { name: "Nama Vendor", rating: "3.5" },
      { name: "Nama Vendor", rating: "4" },
      { name: "Nama Vendor", rating: "5" }
    ]
  }),
  name: "Vendor",
  components: {
    Navbar
  }
};
</script>
