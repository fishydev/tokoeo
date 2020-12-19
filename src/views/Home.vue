<template>
  <div class="home">
    <v-app-bar color="#222831" absolute>
      <v-img
        src="../assets/logo-bw.png"
        max-height="50px"
        max-width="75px"
        contain
      ></v-img>
      <v-spacer></v-spacer>
      <div class="loginButton">
        <v-btn class="loginButton" text @click="loginCard" color="#dddddd"
          >Login</v-btn
        >
      </div>
      <div class="loginCard">
        <v-slide-y-transition>
          <v-card class="pa-4 pb-8" width="430" v-show="loginOverlay">
            <v-row>
              <v-spacer></v-spacer>
              <v-btn class="pa-0" icon text height="20px" @click="loginCard()">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-row>
            <v-form align="center">
              <v-text-field
                label="Email"
                required
                v-model="login.email"
              ></v-text-field>
              <v-text-field
                label="Password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                required
                v-model="login.password"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-form>
            <v-btn class="float-right" @click="submitLogin()">Login</v-btn>
            <a
              class="create-account subtitle-2 text-decoration-underline"
              @click="registerCard()"
            >
              Belum punya akun? Klik disini
            </a>
            <v-spacer></v-spacer>
          </v-card>
        </v-slide-y-transition>
      </div>
      <v-btn depressed outlined text @click="registerCard()" color="#dddddd"
        >Register</v-btn
      >
    </v-app-bar>
    <v-img src="https://picsum.photos/1920/1080" height="100vh">
      <div class="d-flex flex-column align-center pt-12 mt-12">
        <v-img src="../assets/logo.png"> </v-img>
        <p class="display-1">Cari Vendor yang Kamu Butuhkan Untuk Eventmu</p>
      </div></v-img
    >
    <div class="register-overlay">
      <v-overlay :value="registerOverlay" :dark="false">
        <div class="register-container">
          <v-container fluid>
            <v-card v-show="registerOverlay">
              <v-app-bar flat color="#222831">
                <v-row>
                  <v-img
                    class="register-logo"
                    src="../assets/logo-bw.png"
                    max-height="50px"
                    max-width="75px"
                    contain
                  ></v-img>
                  <v-btn
                    class="close-button"
                    color="#dddddd"
                    icon
                    absolute
                    top
                    right
                    text
                    @click="registerCard()"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-row>
              </v-app-bar>
              <v-row class="main-section pa-8">
                <v-col class="form-section" cols="12" md="6">
                  <v-form align="center">
                    <v-text-field
                      label="Full Name"
                      required
                      v-model="register.name"
                      prepend-icon="mdi-account"
                    ></v-text-field>
                    <v-text-field
                      label="Email"
                      required
                      v-model="register.email"
                      prepend-icon="mdi-email"
                    ></v-text-field>
                    <v-text-field
                      label="Password"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      required
                      v-model="register.password"
                      @click:append="showPassword = !showPassword"
                      prepend-icon="mdi-lock"
                    ></v-text-field>
                    <div class="register-button">
                      <v-btn
                        class="white--text"
                        color="#222831"
                        @click="submitRegister()"
                        >Register</v-btn
                      >
                    </div>
                  </v-form>
                </v-col>
                <v-col class="image-section" cols="12" md="6" align="center">
                  <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    max-width="344"
                    max-height="480"
                    src="https://picsum.photos/1920/1080"
                    position="center"
                    class="pa-auto ma-auto"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        </div>
      </v-overlay>
    </div>
    <v-snackbar class="pr-0" v-model="error.isError" bottom color="red">
      {{ error.message }}
      <v-btn class="float-right" icon @click="error.isError = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<style lang="css">
@import "../assets/styles.css";
</style>

<script>
import firebase from "firebase";
require("firebase/firestore");

var db = firebase.firestore();

export default {
  data() {
    return {
      loginOverlay: false,
      registerOverlay: false,
      showPassword: false,
      login: {
        email: "",
        password: ""
      },
      register: {
        name: "",
        email: "",
        password: ""
      },
      error: {
        isError: false,
        message: ""
      }
    };
  },

  methods: {
    loginCard() {
      this.loginOverlay = !this.loginOverlay;
      this.registerOverlay = false;
    },

    registerCard() {
      this.registerOverlay = !this.registerOverlay;
      this.loginOverlay = false;
    },

    submitRegister() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.register.email,
          this.register.password
        )
        .then(() => {
          db.collection("users").add({
            name: this.register.name,
            email: this.register.email,
            createdAt: new Date(),
            isVendor: false
          });

          this.registerCard();
        })
        .catch(err => {
          this.showError(err);
        });
    },

    submitLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.login.email, this.login.password)
        .then(() => {
          localStorage.setItem("user", this.login.email);
          this.$router.push({ name: "Dashboard" });
        })
        .catch(err => {
          this.showError(err);
        });
    },

    showError(err) {
      this.error.message = err.message;
      this.error.isError = true;
    }
  },
  name: "Home",
  components: {
    //
  }
};
</script>
