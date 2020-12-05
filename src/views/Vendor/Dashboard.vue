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
                <p class="display-1 text-center">John Doe</p>
              </v-card-subtitle>
            </v-card>
          </div>
        </v-col>
        <v-col md="10" lg="6" sm="10">
          <div class="d-flex flex-column">
            <v-card class="mb-4 pa-4">
              <p class="display-1">Detail</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas aliquam velit ut congue faucibus. Aliquam finibus lorem
                quis neque fringilla porta. Maecenas congue dapibus ligula, non
                tristique diam. Etiam commodo cursus velit. Duis ut sem turpis.
                Sed ac lorem euismod, venenatis odio ac, porta metus. Quisque
                lacinia neque ut urna sollicitudin, eu tempus enim efficitur.
                Nam in lectus nunc. Pellentesque venenatis urna sed elit luctus,
                non porta quam pretium. Nam sed dignissim diam, eu mattis augue.
                Mauris dui nunc, elementum non nisi vel, fringilla vehicula
                urna. Donec pulvinar risus eu leo malesuada fringilla.
                Suspendisse quis sem rutrum, elementum est ut, feugiat lectus.
                Vivamus libero sapien, porttitor at justo eget, lobortis auctor
                dolor. Nam arcu urna, auctor eu viverra vel, tempor nec dolor.
                Nulla nec auctor orci.
              </p>
            </v-card>
            <v-card class="pa-4">
              <div class="d-flex flex-row justify-space-between">
                <div>
                  <p class="display-1">Lokasi</p>
                </div>
                <v-divider vertical></v-divider>
                <div>
                  <p class="display-1 text-right">Kontak</p>
                </div>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-row justify="center">
        <p class="display-1">Produk</p>
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
import Navbar from "../../components/Navbar";

export default {
  data: () => ({
    orders: [{ text: "Lorem Ipsum" }, { text: "Dolor Sit Amet" }],
    histories: [{ text: "Lorem Ipsum" }, { text: "Dolor Sit Amet" }]
  }),
  methods: {
    toPage(page) {
      if (page !== this.$route.name) {
        this.$router.push({ name: page });
      } else {
        this.$forceUpdate();
      }
    }
  },
  name: "VendorDashboard",
  components: {
    Navbar
  }
};
</script>
