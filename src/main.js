import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCk_3tY9o4Z9gDHHunttL3jqpCLcELswKE",
  authDomain: "tokoeo-25905.firebaseapp.com",
  databaseURL: "https://tokoeo-25905.firebaseio.com",
  projectId: "tokoeo-25905",
  storageBucket: "tokoeo-25905.appspot.com",
  messagingSenderId: "85773324130",
  appId: "1:85773324130:web:939aecaed8e4104514e63b"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
