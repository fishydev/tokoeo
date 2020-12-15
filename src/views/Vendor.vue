<template>
  <div class="vendor">
    <Navbar />
    <div class="py-16 px-4">
      <v-row justify="center">
        <v-col cols="10">
          <p class="display-1">Lihat Vendor yang Tersedia</p>
          <div class="d-flex">
            <div class="d-flex flex-wrap mx-auto justify-center">
              <v-card
                class="ma-3 pb-0"
                v-for="vendor in vendors"
                :key="vendor.index"
                @click="toPage('ProductDetail')"
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
                  width="225px"
                  height="150px"
                ></v-img>
                <v-card-title>{{ vendor.vendorName }}</v-card-title>
                <v-card-text class="pb-0">
                  <p class="body-1">{{ vendor.vendorType }}</p>
                  <p class="body-2">{{ vendor.address }}</p>
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
import firebase from "firebase";

var db = firebase.firestore();

export default {
  data: () => ({
    vendors: []
  }),
  methods: {
    toPage(page) {
      if (page !== this.$route.name) {
        this.$router.push({ name: page });
      } else {
        this.$forceUpdate();
      }
    },

    getVendors() {
      db.collection("vendors")
        .get()
        .then(res => {
          res.forEach(doc => {
            var vendorData = doc.data();
            this.vendors.push(vendorData);
          });
        });
    }
  },

  mounted() {
    this.getVendors();
  },
  name: "Vendor",
  components: {
    Navbar
  }
};
</script>
