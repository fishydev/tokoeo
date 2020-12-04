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
            <v-btn
              text
              depressed
              color="#dddddd"
              large
              @click="toPage('explore')"
              >Explore</v-btn
            >
            <v-btn text depressed color="#dddddd" large>Vendor</v-btn>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="d-flex justify-end">
            <v-btn icon text color="#dddddd">
              <v-icon>mdi-cart</v-icon>
            </v-btn>
            <v-btn icon text color="#dddddd" @click="toPage('dashboard')">
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
            <v-btn icon text color="#dddddd">
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
  methods: {
    toPage(page) {
      if (page !== this.$route.name.toLowerCase()) {
        this.$router.push(`/${page}`);
      } else {
        this.$forceUpdate();
      }
    }
  },
  components: {
    //
  }
};
</script>
