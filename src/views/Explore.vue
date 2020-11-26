<template>
  <div class="explore">
    <Navbar />
    <div class="py-16">
      <p class="display-2 text-center">EXPLORE</p>
      <v-row justify="center">
        <v-col cols="9">
          <div class="d-flex flex-wrap">
            <v-card class="ma-3 pb-0" v-for="n in 8" :key="n">
              <v-img src="https://cdn.vuetifyjs.com/images/cards/plane.jpg" width="225px" height="150px"></v-img>
              <v-card-title>Lorem Ipsum</v-card-title>
              <v-card-text class="pb-0">
                <p class="subtitle-1">Lorem Ipsum</p>
                <p class="subtitle-2 text-right">Rp100.000</p>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  data: () => {
    //
  },
  components: {
    Navbar
  }
};
</script>
