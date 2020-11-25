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
        <v-btn class="loginButton" text @click="loginCard" color="#dddddd">Login</v-btn>
      </div>
      <div class="loginCard">
        <v-slide-y-transition>
          <v-card class="pa-4 pb-8" width="25vw" v-show="loginOverlay">
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
                required
                v-model="login.password"
              ></v-text-field>
            </v-form>
            <v-btn class="float-right" @click="submitLogin()">Login</v-btn>
            <a
              class="create-account subtitle-2 text-decoration-underline"
              @click="registerCard()"
            >
              Belum punya akun? Klik disini
            </a>
          </v-card>
        </v-slide-y-transition>
      </div>
      <v-btn depressed outlined text @click="registerCard()" color="#dddddd">Register</v-btn>
    </v-app-bar>
    <v-img src="https://picsum.photos/1920/1080" height="100vh"></v-img>
    <v-overlay :value="registerOverlay" :dark="false">
      <v-card class="pa-8" v-show="registerOverlay">
        <v-form align="center">
          <v-spacer></v-spacer>
          <v-btn icon absolute top right text @click="registerCard()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-text-field
            label="Email"
            required
            v-model="register.email"
          ></v-text-field>
          <v-text-field
            label="Password"
            required
            v-model="register.password"
          ></v-text-field>
          <v-btn @click="submitRegister">Register</v-btn>
        </v-form>
      </v-card>
    </v-overlay>
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

export default {
  data() {
    return {
      loginOverlay: false,
      registerOverlay: false,
      login: {
        email: "",
        password: ""
      },
      register: {
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
        .catch(err => {
          this.showError(err);
        });
    },

    submitLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.login.email, this.login.password)
        .then(user => {
          localStorage.setItem("IdToken", user.idToken);
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
