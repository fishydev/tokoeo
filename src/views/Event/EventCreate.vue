<template>
  <div class="create-event">
    <Navbar />
    <div class="my-16 py-16">
      <v-row justify="center">
        <v-col cols="8">
          <v-card class="pb-1">
            <v-img src="../../assets/event-header.png" height="150">
              <div class="event-card-header px-4 pt-4 d-flex flex-column">
                <div>
                  <v-text-field placeholder="Nama Event"></v-text-field>
                </div>
                <p class="text-right">Tanggal</p>
                <div class="d-flex justify-space-between">
                  <div>
                    Alamat
                  </div>
                  <div class="pb-2">
                    <v-btn icon right color="white">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn icon right color="white">
                      <v-icon>mdi-trash-can</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-img>
            <div class="d-flex flex-column">
              <v-divider></v-divider>
              <p>Venue</p>
              <v-card class="pb-4 px-4" tile elevation="0">
                <v-row>
                  <v-col cols="2">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                      height="120"
                      width="120"
                    ></v-img>
                  </v-col>
                  <v-col cols="10">
                    <p>Nama Venue</p>
                    <p class="text-right">Status</p>
                    <v-btn class="mr-4">Contact</v-btn>
                    <v-btn>Cancel</v-btn>
                  </v-col>
                </v-row>
              </v-card>
              <v-divider></v-divider>
              <p>Catering</p>
              <div class="d-flex flex-column">
                <p class="text-center">Belum ada</p>
                <v-card class="pb-4 px-4 mx-auto" tile elevation="0">
                  <v-btn icon x-large color="#222831">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-card>
              </div>
              <v-divider></v-divider>
              <p class="text-center">Tambah Jasa Lain</p>
              <v-card class="pb-4 mx-auto" tile elevation="0">
                <v-btn icon x-large color="#222831">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-card>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn width="" color="success">Simpan</v-btn>
      </v-row>
    </div>
  </div>
</template>

<script>
import Functions from "../../tools/Functions";

import Navbar from "../../components/Navbar";
export default {
  methods: {
    toPage(page) {
      Functions.toPage(page);
    }
  },
  components: {
    Navbar
  }
};
</script>
