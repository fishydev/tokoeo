<template>
  <div class="dashboard">
    <Navbar />
    <div>
      <v-row class="py-16 px-4" justify="center">
        <v-col md="10" lg="4" sm="10">
          <div class="user-profile-card">
            <v-card class="mx-auto" height="400px">
              <v-card-title>
                <v-avatar class="mx-auto" size="100">
                  <img src="../../assets/avatar.png" alt="avatar" />
                </v-avatar>
              </v-card-title>
              <v-card-subtitle class="mt-4">
                <p class="display-1 text-center">{{ userData.name }}</p>
                <p class="body-1 text-center">{{ vendorData.vendorName }}</p>
              </v-card-subtitle>
            </v-card>
          </div>
        </v-col>
        <v-col md="10" lg="6" sm="10">
          <div class="d-flex flex-column">
            <v-card class="mb-4 pa-4">
              <p class="display-1">Detail</p>
              <p>
                {{ vendorData.detail }}
              </p>
            </v-card>
            <v-card class="pa-4">
              <div class="d-flex flex-row justify-space-between">
                <div>
                  <p class="display-1">Alamat</p>
                  <p class="subtitle">{{ vendorData.address }}</p>
                </div>
                <v-divider vertical></v-divider>
                <div>
                  <p class="display-1 text-right">Kontak</p>
                  <p class="subtitle">{{ vendorData.number }}</p>
                </div>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-row justify="center">
        <p class="display-1">Incoming Order</p>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <div class="d-flex flex-wrap mx-auto justify-center">
            <v-card class="ma-3 pb-0" v-for="n in 4" :key="n">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
                width="225px"
                height="150px"
              ></v-img>
              <v-card-title>Nama Event</v-card-title>
              <v-card-text class="pb-0">
                <p class="subtitle-1">Tanggal Event</p>
                <div class="d-flex justify-end mb-2">
                  <v-btn icon><v-icon color="red">mdi-cancel</v-icon></v-btn>
                  <v-btn icon
                    ><v-icon color="green">mdi-whatsapp</v-icon></v-btn
                  >
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import firebase from "firebase";

var db = firebase.firestore();

export default {
  data: () => ({
    orders: [{ text: "Lorem Ipsum" }, { text: "Dolor Sit Amet" }],
    histories: [{ text: "Lorem Ipsum" }, { text: "Dolor Sit Amet" }],
    userData: {},
    vendorData: {}
  }),
  methods: {
    toPage(page) {
      if (page !== this.$route.name) {
        this.$router.push({ name: page });
      } else {
        this.$forceUpdate();
      }
    },

    getData() {
      db.collection("users")
        .doc(localStorage.getItem("userId"))
        .get()
        .then(res => {
          this.userData = res.data();
        })
        .catch(err => {
          console.log(err.message);
        });

      db.collection("vendors")
        .where("userId", "==", localStorage.getItem("userId"))
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.vendorData = doc.data();
          });
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  },
  mounted() {
    this.getData();
  },
  name: "VendorDashboard",
  components: {
    Navbar
  }
};
</script>
