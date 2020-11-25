<template>
  <div class="home">
    <v-app-bar color="primary" absolute>
      <p class="h3">TokoEO</p>
      <v-spacer></v-spacer>
      <v-btn class="mx-4" depressed @click="loginCard()">Login</v-btn>
      <v-btn depressed @click="registerCard()">Register</v-btn>
    </v-app-bar>
    <v-img src="https://picsum.photos/1920/1080" height="80vh"></v-img>
    <v-overlay :value="loginOverlay" :dark="false">
      <v-card class="pa-0">
        <v-row class="pa-0 ma-0">
          <v-col class="pa-8">
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
              <v-btn type="submit">Login</v-btn>
            </v-form>
          </v-col>
          <v-col class="pa-0 ma-0 d-none d-lg-block">
            <v-img
              class="rounded-tr rounded-br"
              src="https://picsum.photos/1920/1080"
              height="300px"
              max-width="245px"
            ></v-img>
            <v-btn
              color="white"
              icon
              right
              absolute
              top
              text
              @click="loginCard()"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-overlay>
    <v-overlay :value="registerOverlay" :dark="false">
      <v-card class="pa-8">
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
    <v-snackbar class="pr-4" v-model="error.isError" bottom color="red">
      {{ error.message }}
      <v-icon class="float-right">mdi-close</v-icon>
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
    },

    registerCard() {
      this.registerOverlay = !this.registerOverlay;
    },

    submitRegister() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.register.email,
          this.register.password
        )
        .catch(err => {
          this.error.message = err.message;
          this.error.isError = true;
          console.log(err.message);
        });
    }
  },
  name: "Home",
  components: {
    //
  }
};
</script>
