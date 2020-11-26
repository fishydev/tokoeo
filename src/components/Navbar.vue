<template>
  <div class="navbar mb-16">
    <v-app-bar color="#222831" absolute>
      <v-row>
        <v-col cols="3">
          <v-img
            src="../assets/logo-bw.png"
            max-height="50px"
            max-width="75px"
            contain
          ></v-img>
        </v-col>
        <v-col cols="6">
          <div class="d-flex justify-center">
            <v-btn text depressed color="#dddddd" large>Categories</v-btn>
            <v-btn text depressed color="#dddddd" large>Explore</v-btn>
            <v-btn text depressed color="#dddddd" large>Vendor</v-btn>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="d-flex justify-end">
            <v-btn icon flat color="#dddddd">
              <v-icon>mdi-cart</v-icon>
            </v-btn>
            <v-btn icon flat color="#dddddd">
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
            <v-btn icon flat color="#dddddd">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {
    //
  }
};
</script>
