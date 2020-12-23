<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-list two-line>
          <v-subheader>
            Semua Review
          </v-subheader>
          <template v-for="(item, index) in items">
            <v-divider :key="index" :inset="true"></v-divider>
            <v-list-item :key="item.index">
              <v-list-item-avatar>
                <img src="../assets/avatar.png" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <p class="font-weight-bold">{{ item.userName }}</p>
                </v-list-item-title>
                <div class="d-flex justify-space-between">
                  <v-list-item-subtitle>
                    {{ item.content }}
                  </v-list-item-subtitle>
                  <v-rating
                    v-model="item.rating"
                    small
                    color="warning"
                    readonly
                    background-color="grey"
                    dense
                  ></v-rating>
                </div>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import firebase from "firebase";

var db = firebase.firestore();

export default {
  data: () => ({
    items: []
  }),

  methods: {
    getReviewList() {
      db.collection("reviews")
        .where("vendorId", "==", this.$route.params.vendorId)
        .get()
        .then(res => {
          res.forEach(doc => {
            var element = doc.data();
            this.items.push(element);
          });
        });
    }
  },

  mounted() {
    this.getReviewList();
  }
};
</script>
