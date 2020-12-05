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
            @click="toPage('Dashboard')"
          ></v-img>
        </v-col>
        <v-col sm="3" md="3" class="px-0 mx-0 d-md-none">
          <div class="d-flex justify-center">
            <!-- <v-btn text depressed color="#dddddd" large>Browse</v-btn> -->
          </div>
        </v-col>
        <v-col lg="6" sm="3" md="3" class="d-none d-lg-block">
          <div class="d-flex justify-center">
            <v-btn
              text
              depressed
              color="#dddddd"
              large
              @click="toPage('Categories')"
              >Categories</v-btn
            >
            <v-btn
              text
              depressed
              color="#dddddd"
              large
              @click="toPage('Explore')"
              >Explore</v-btn
            >
            <v-btn
              text
              depressed
              color="#dddddd"
              large
              @click="toPage('Vendor')"
              >Vendor</v-btn
            >
          </div>
        </v-col>
        <v-col cols="3">
          <div class="d-flex justify-end">
            <v-btn icon text color="#dddddd">
              <v-icon>mdi-cart</v-icon>
            </v-btn>
            <v-btn icon text color="#dddddd" @click="toPage('Dashboard')">
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
  data: () => ({
    items: [
      { name: "Explore", value: "Explore" },
      { name: "Categories", value: "Categories" },
      { name: "Vendor", value: "Vendor" }
    ]
  }),
  name: "Navbar",
  methods: {
    toPage(page) {
      if (page !== this.$route.name) {
        this.$router.push({ name: page });
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
