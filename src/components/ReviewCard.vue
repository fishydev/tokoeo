<template>
  <div class="main-content">
    <v-btn @click="overlayReview = !overlayReview">Add Review</v-btn>
    <div class="overlay-review">
      <v-overlay :value="overlayReview">
        <v-card class="elevation-16 mx-auto" width="460" light>
          <v-card-title class="headline">
            Beri Review Vendor!
          </v-card-title>
          <v-card-text>
            Tulis Review-mu!
            <div class="review-text mt-5">
              <v-textarea solo></v-textarea>
            </div>
            Beri Bintang!
            <div class="review-rating text-center mt-5">
              <v-rating
                v-model="rating"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="$ratingFull"
                half-increments
                hover
                large
              ></v-rating>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="justify-space-between">
            <v-btn text @click="overlayReview = false" color="red">
              Close
            </v-btn>
            <v-btn color="primary" text>
              Simpan Review
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-overlay>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    rating: 4.5,
    overlayReview: false
  })
};
</script>
