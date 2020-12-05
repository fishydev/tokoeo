<template>
  <div class="create-event">
    <Navbar />
    <div class="my-16 py-16">
      <v-row justify="center" class="mx-2">
        <v-col lg="8" sm="10" md="10">
          <v-card class="pb-1">
            <div class="pa-0 ma-0 event-card-header">
              <v-img
                class="px-8 pt-8 rounded-t-lg"
                src="../../assets/event-header.png"
                height="11em"
              >
                <div class="event-card-header">
                  <v-row>
                    <p class="display-1">Name Event</p>
                  </v-row>
                  <v-row>
                    <v-spacer></v-spacer>
                    Tanggal
                  </v-row>
                  <v-row class="my-4">
                    <p>Alamat</p>
                    <v-spacer></v-spacer>
                    <v-btn icon color="white">
                      <v-icon>
                        mdi-image
                      </v-icon>
                    </v-btn>
                  </v-row>
                  <v-row> </v-row>
                </div>
              </v-img>
            </div>
            <div class="">
              <v-divider></v-divider>
              <div class="pa-4">
                <p>Venue</p>
                <div>
                  <v-card class="pa-0" width="80vw">
                    <div>
                      <v-row class="pa-0">
                        <v-col class="py-0" lg="2" sm="2" md="2">
                          <v-avatar tile size="100%">
                            <v-img
                              class="rounded-l"
                              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                            ></v-img>
                          </v-avatar>
                        </v-col>
                        <v-col class="pl-8 mb-0 pr-6" lg="10" sm="10" md="10">
                          <v-row>
                            <p class="my-0">Vendor A</p>
                          </v-row>
                          <v-row class="my-4 mr-2" justify="end">
                            Status
                          </v-row>
                          <v-row class="mb-0" justify="end">
                            <v-btn class="mr-4" color="#222831" dark icon>
                              <v-icon>mdi-whatsapp</v-icon>
                            </v-btn>
                            <v-btn class="mr-2" color="error" icon>
                              <v-icon>mdi-cancel</v-icon>
                            </v-btn>
                          </v-row>
                        </v-col>
                      </v-row>
                      <!-- <div>
                        <v-avatar tile size="20%">
                          <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                        </v-avatar>
                      </div>
                      <div class="px-6" width="80%">
                        <v-row>
                          Vendor A
                        </v-row>
                        <v-row justify="end">
                          Status
                        </v-row>
                        <v-row justify="end">
                          <v-btn class="mr-4" color="#222831" dark icon>
                            <v-icon>mdi-phone</v-icon>
                          </v-btn>
                          <v-btn class="mr-2" color="error" icon>
                            <v-icon>mdi-cancel</v-icon>
                          </v-btn>
                        </v-row>
                      </div> -->
                    </div>
                  </v-card>
                </div>
                <!-- <v-card class="pb-4 px-4" tile elevation="0">
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
                </v-card> -->
              </div>
              <v-divider></v-divider>
              <div class="pa-4">
                <p>Catering</p>
                <div class="d-flex flex-column">
                  <p class="text-center">Belum ada</p>
                  <v-card class="pb-4 px-4 mx-auto" tile elevation="0">
                    <v-btn small fab color="#222831" dark>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </v-card>
                </div>
              </div>
              <v-divider></v-divider>
              <div class="pa-4">
                <p>Pengisi Acara</p>
                <div class="d-flex flex-column">
                  <p class="text-center">Belum ada</p>
                  <v-card class="pb-4 px-4 mx-auto" tile elevation="0">
                    <v-btn small fab color="#222831" dark>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </v-card>
                </div>
              </div>
              <v-divider></v-divider>
              <div class="pa-4">
                <div class="d-flex flex-column pt-4">
                  <p class="text-center font-weight-bold">Perlu Jasa Lain?</p>
                  <v-card class="pb-4 px-4 mx-auto" tile elevation="0">
                    <v-btn small fab color="#222831" dark>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </v-card>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn :disabled="!valid" color="warning" @click="submitEvent()">
          <v-icon left>mdi-trash-can</v-icon>
          Hapus Event
        </v-btn>
      </v-row>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
export default {
  data: () => ({
    valid: true,
    rules: {
      required: value => !!value || "Required."
    },
    eventName: "",
    eventAddress: "",
    eventDate: new Date().toISOString().substr(0, 10),
    dateMenu: false
  }),
  methods: {
    submitEvent() {
      this.$refs.formEvent.validate();
    }
  },
  components: {
    Navbar
  }
};
</script>
