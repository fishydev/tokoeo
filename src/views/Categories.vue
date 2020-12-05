<template>
  <div class="categories">
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
              <v-card class="ma-3 pb-0" v-for="n in 8" :key="n">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
                  width="225px"
                  height="150px"
                ></v-img>
                <v-card-title>Lorem Ipsum</v-card-title>
                <v-card-text class="pb-0">
                  <p class="subtitle-1">Lorem Ipsum</p>
                  <p class="subtitle-2 text-right">Rp100.000</p>
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
    items: ["Venue", "Catering", "Sound System", "Security"]
  }),
  name: "Categories",
  components: {
    Navbar
  }
};
</script>
