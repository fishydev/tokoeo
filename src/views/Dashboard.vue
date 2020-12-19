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
              <p class="display-1 text-center">{{ userData.name }}</p>
              <p class="subtitle text-center">{{ userData.email }}</p>
            </v-card-subtitle>
            <div class="d-flex flex-column align-center">
              <v-btn
                v-if="userData.isVendor"
                class="mx-auto"
                color="#222831"
                dark
                @click="toPage('VendorDashboard')"
                >Dashboard vendor</v-btn
              >
              <v-btn
                v-else
                class="mx-auto"
                color="#222831"
                dark
                @click="vendorForm"
                >Daftar Vendor</v-btn
              >
              <v-btn class="mt-4" color="#222831" dark @click="editProfile()"
                >Edit Profile</v-btn
              >
            </div>
          </v-card>
        </div>
      </v-col>
      <v-col md="10" lg="6" sm="10">
        <div class="d-flex flex-column">
          <v-card class="mb-4 pa-4">
            <p class="display-1">Your Events</p>
            <v-spacer></v-spacer>
            <div v-if="events.length > 0">
              <v-card
                class="pa-2 my-4"
                v-for="event in events"
                :key="event.index"
                color="#30475e"
              >
                <p class="font-weight-bold">{{ event.eventName }}</p>
                <div class="d-flex justify-end">
                  <v-btn
                    class="mx-2"
                    right
                    color="#222831"
                    @click="$router.push('/event-plan/' + event.eventId)"
                    dark
                    >Detail</v-btn
                  >
                  <v-btn
                    right
                    color="#f05454"
                    @click="cancelEvent(event.eventId)"
                    >Cancel</v-btn
                  >
                </div>
              </v-card>
            </div>
            <div v-else>
              <p>Belum ada event plan.</p>
            </div>
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
              :key="history.index"
              color="#30475e"
            >
              <p class="font-weight-bold">{{ history.eventName }}</p>
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
    <v-overlay :value="registerVendorOverlay" :dark="false">
      <v-card width="400px">
        <v-card-title
          >Daftar Vendor
          <v-spacer></v-spacer>
          <v-btn icon @click="editProfileForm()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <div class="px-4 pt-4">
          <v-form ref="formVendor" v-model="vendorValid" lazy-validation>
            <v-text-field
              v-model="dataVendor.vendorName"
              placeholder="Nama Jasa"
              :rules="required"
              required
            ></v-text-field>
            <v-text-field
              v-model="dataVendor.address"
              placeholder="Alamat"
              :rules="required"
              required
            ></v-text-field>
            <v-text-field
              v-model="dataVendor.number"
              placeholder="Nomor Whatsapp"
              type="number"
              :rules="required"
              required
            ></v-text-field>
            <v-select
              v-model="dataVendor.vendorType"
              placeholder="Jenis Jasa"
              :items="vendorType"
              item-text="name"
              item-value="name"
            ></v-select>
            <v-textarea
              label="Detail"
              :rules="required"
              v-model="dataVendor.detail"
            >
            </v-textarea>
            <v-row>
              <v-spacer></v-spacer>
              <v-btn class="ma-4" color="success" @click="submitVendor()"
                >Daftar</v-btn
              >
            </v-row>
          </v-form>
        </div>
      </v-card>
    </v-overlay>
    <v-overlay :value="editProfileOverlay" :dark="false">
      <v-card width="400px">
        <v-card-title
          >Edit Profile
          <v-spacer></v-spacer>
          <v-btn icon @click="editProfile()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <div class="px-4 pt-4">
          <v-form
            ref="formEditProfile"
            v-model="editProfileValid"
            lazy-validation
          >
            <v-text-field
              v-model="dataEditProfile.name"
              placeholder="Nama Lengkap"
              :rules="required"
              required
            ></v-text-field>
            <v-text-field
              v-model="dataEditProfile.email"
              placeholder="Email"
              :rules="required"
              required
            ></v-text-field>
            <v-row>
              <v-spacer></v-spacer>
              <v-btn class="ma-4" color="success" @click="saveProfile()"
                >Simpan</v-btn
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
// import { ValidationProvider } from "vee-validate";

var db = firebase.firestore();

export default {
  data: () => ({
    valid: true,
    vendorValid: false,
    editProfileValid: false,
    events: [],
    histories: [],
    createEventOverlay: false,
    registerVendorOverlay: false,
    editProfileOverlay: false,
    required: [value => !!value || "Required."],
    eventName: "",
    eventAddress: "",
    eventDate: new Date().toISOString().substr(0, 10),
    dateMenu: false,
    userData: {},
    vendorType: [
      { name: "Venue", value: "venue" },
      { name: "Catering", value: "catering" },
      { name: "Pengisi Acara", value: "pengisi-acara" }
    ],
    dataVendor: {},
    dataEditProfile: {}
  }),
  methods: {
    getUserData() {
      db.collection("users")
        .where("email", "==", localStorage.getItem("user"))
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(doc.data());
            localStorage.setItem("userId", doc.id);
            this.userData = doc.data();
          });
        });
    },

    getEventList() {
      db.collection("events")
        .where("planner", "==", localStorage.getItem("userId"))
        .where("completed", "==", false)
        .get()
        .then(res => {
          res.forEach(doc => {
            console.log(doc.data());
            var element = doc.data();
            element.eventId = doc.id;
            console.log(element);
            this.events.push(element);
          });
        });
    },

    getHistory() {
      db.collection("events")
        .where("planner", "==", localStorage.getItem("userId"))
        .where("completed", "==", true)
        .get()
        .then(res => {
          res.forEach(doc => {
            console.log("history: ", doc.data());
            var element = doc.data();
            element.eventId = doc.id;
            this.histories.push(element);
          });
        });
    },

    cancelEvent(eventId) {
      db.collection("events")
        .doc(eventId)
        .update({
          completed: true
        })
        .then(() => {
          location.reload();
        });
    },

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

    editProfile() {
      this.editProfileOverlay = !this.editProfileOverlay;
    },

    submitEvent() {
      this.$refs.formEvent.validate();
      if (this.valid) {
        db.collection("events")
          .add({
            eventName: this.eventName,
            eventAddress: this.eventAddress,
            eventDate: this.eventDate,
            planner: localStorage.getItem("userId"),
            completed: false
          })
          .then(res => {
            console.log("Created event with ID: ", res.id);
            this.createEvent();
          })
          .catch(err => {
            console.error("Error: ", err);
          });
        this.$router.push({ name: "Event Plan" });
      }
    },

    vendorForm() {
      this.registerVendorOverlay = !this.registerVendorOverlay;
    },

    submitVendor() {
      this.$refs.formVendor.validate();
      if (this.vendorValid) {
        db.collection("vendors")
          .add({
            vendorName: this.dataVendor.vendorName,
            address: this.dataVendor.address,
            detail: this.dataVendor.detail,
            vendorType: this.dataVendor.vendorType,
            number: String(this.dataVendor.number),
            userId: localStorage.getItem("userId")
          })
          .then(res => {
            db.collection("users")
              .doc(localStorage.getItem("userId"))
              .update({
                isVendor: true
              })
              .then(() => {
                // console.log("user vendor status updated");
              });
            console.log("Registered Vendor with id: ", res.id);
            this.toPage("VendorDashboard");
          })
          .catch(err => {
            console.log(err.message);
          });
      }
    },

    saveProfile() {
      this.$refs.formEditProfile.validate();
      if (this.editProfileValid) {
        db.collection("users")
          .doc(localStorage.getItem("userId"))
          .update({
            name: this.dataEditProfile.name,
            email: this.dataEditProfile.email
          })
          .then(() => {
            console.log("Profile updated");
            localStorage.setItem("user", this.dataEditProfile.email);
            this.editProfile();
            this.getUserData();
          })
          .catch(err => {
            console.log(err.message);
          });
      }
    }
  },
  mounted() {
    this.getUserData();
    this.getEventList();
    this.getHistory();
  },
  name: "Dashboard",
  components: {
    Navbar
  }
};
</script>
