<template>
  <div class="dashboard">
    <Navbar />
    <v-row class="py-16 px-4" justify="center">
      <v-col md="10" lg="4" sm="10">
        <div class="user-profile-card">
          <v-card class="mx-auto" height="400px">
            <v-card-title>
              <v-avatar class="mx-auto" size="100">
                <img src="../assets/avatar.png" alt="avatar" />
              </v-avatar>
            </v-card-title>
            <v-card-subtitle class="mt-4">
              <p class="display-1 text-center">John Doe</p>
            </v-card-subtitle>
            <v-card-actions>
              <v-btn
                class="mx-auto"
                color="#222831"
                dark
                @click="toPage('VendorDashboard')"
                >Dashboard vendor</v-btn
              >
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
      <v-col md="10" lg="6" sm="10">
        <div class="d-flex flex-column">
          <v-card class="mb-4 pa-4">
            <p class="display-1">Your Events</p>
            <v-spacer></v-spacer>
            <v-card
              class="pa-2 my-4"
              v-for="order in orders"
              :key="order.text"
              color="#30475e"
            >
              <p color="#dddddd">{{ order.text }}</p>
              <div class="d-flex justify-end">
                <v-btn
                  class="mx-2"
                  right
                  color="#222831"
                  @click="toPage('Event Plan')"
                  dark
                  >Detail</v-btn
                >
                <v-btn right color="#f05454">Cancel</v-btn>
              </div>
            </v-card>
            <div class="d-flex justify-end">
              <v-tooltip left transition="scroll-x-reverse-transition">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    right
                    fab
                    color="#222831"
                    small
                    dark
                    v-on="on"
                    v-bind="attrs"
                    @click="createEvent()"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <span>Buat Event Plan Baru</span>
              </v-tooltip>
            </div>
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
                <v-btn color="#222831" dark>Detail</v-btn>
              </div>
            </v-card>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-overlay :value="createEventOverlay" :dark="false">
      <v-card width="400px">
        <v-card-title
          >Create Event
          <v-spacer></v-spacer>
          <v-btn icon @click="createEvent()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <div class="px-4 pt-4">
          <v-form ref="formEvent" v-model="valid" lazy-validation>
            <v-text-field
              v-model="eventName"
              placeholder="Nama Event"
              prepend-icon="mdi-rename-box"
              :rules="required"
              required
            ></v-text-field>
            <v-text-field
              v-model="eventAddress"
              placeholder="Alamat"
              prepend-icon="mdi-google-maps"
              :rules="required"
              required
            ></v-text-field>
            <v-menu
              ref="dateMenu"
              v-model="dateMenu"
              :close-on-content-click="false"
              :return-value.sync="eventDate"
              transition="scale-transition"
              content-class="elevation-0"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="eventDate"
                  :rules="required"
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="eventDate" no-title scrollable flat>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="dateMenu = false"
                  >Cancel</v-btn
                >
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dateMenu.save(eventDate)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>
            <v-row>
              <v-spacer></v-spacer>
              <v-btn class="ma-4" color="success" @click="submitEvent()"
                >Buat Event</v-btn
              >
            </v-row>
          </v-form>
        </div>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import firebase from "firebase";

var db = firebase.firestore();

export default {
  data: () => ({
    valid: true,
    orders: [{ text: "Lorem Ipsum" }, { text: "Dolor Sit Amet" }],
    histories: [{ text: "Lorem Ipsum" }, { text: "Dolor Sit Amet" }],
    createEventOverlay: false,
    required: [value => !!value || "Required."],
    eventName: "",
    eventAddress: "",
    eventDate: new Date().toISOString().substr(0, 10),
    dateMenu: false
  }),
  methods: {
    toPage(page) {
      if (page !== this.$route.name) {
        this.$router.push({ name: page });
      } else {
        this.$forceUpdate();
      }
    },

    createEvent() {
      this.createEventOverlay = !this.createEventOverlay;
    },

    submitEvent() {
      this.$router.push({ name: "Event Plan" });
      db.collection("events")
        .add({
          eventName: this.eventName,
          eventAddress: this.eventAddress,
          eventDate: this.eventDate,
          planner: localStorage.getItem("user")
        })
        .then(res => {
          console.log("Created event with ID: ", res.id);
          this.createEvent();
        })
        .catch(err => {
          console.error("Error: ", err);
        });
    }
  },
  name: "Dashboard",
  components: {
    Navbar
  }
};
</script>
