<template>
  <div class="dashboard">
    <Navbar />
    <v-row class="py-16" justify="center">
      <v-col cols="4">
        <div class="user-profile-card">
          <v-card class="mx-auto" width="400px" height="600px">
            <v-card-title>
              <v-avatar class="mx-auto" size="200">
                <img src="../assets/avatar.png" alt="avatar" />
              </v-avatar>
            </v-card-title>
            <v-card-subtitle class="mt-4">
              <p class="display-1 text-center">John Doe</p>
            </v-card-subtitle>
          </v-card>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="d-flex flex-column">
          <v-card class="mb-4 pa-4">
            <p class="display-1">Your Order</p>
            <v-card
              class="pa-2 my-2"
              v-for="order in orders"
              :key="order.text"
              color="#30475e"
            >
              <p color="#dddddd">{{ order.text }}</p>
              <div class="d-flex justify-end">
                <v-btn class="mx-2" right color="#222831">Detail</v-btn>
                <v-btn right color="#f05454">Cancel</v-btn>
              </div>
            </v-card>
          </v-card>
          <v-card class="pa-4">
            <p class="display-1">History</p>
            <v-card
              class="pa-2 my-2"
              v-for="history in histories"
              :key="history.text"
              color="#30475e"
            >
              <p color="#dddddd">{{ history.text }}</p>
              <div class="d-flex justify-end">
                <v-btn color="#222831">Detail</v-btn>
              </div>
            </v-card>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  data: () => ({
    orders: [{ text: "Lorem Ipsum" }, { text: "Dolor Sit Amet" }],
    histories: [{ text: "Lorem Ipsum" }, { text: "Dolor Sit Amet" }]
  }),
  name: "Dashboard",
  components: {
    Navbar
  }
};
</script>
