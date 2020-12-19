<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header">
              {{ item.header }}
            </v-subheader>
            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>
            <v-list-item v-else :key="item.title">
              <v-list-item-avatar>
                <img :src="item.avatar" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.name"> </v-list-item-title>
                <v-list-item-subtitle
                  v-html="item.review"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    items: [
      { header: "Semua Review" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        name: '<p class="font-weight-bold">Ali Connors</p>',
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rating: 4.5
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        name: '<p class="font-weight-bold">Alex Scott</p>',
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rating: 4
      }
    ]
  })
};
</script>
