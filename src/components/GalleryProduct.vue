<template>
  <div class="card-carousel">
    <div class="card-img">
      <img :src="currentImage" alt="" />
      <div class="actions">
        <span @click="prevImage" class="prev">
          <v-icon large color="#dddddd"
            >mdi-arrow-left-drop-circle-outline</v-icon
          >
        </span>
        <span @click="nextImage" class="next">
          <v-icon large color="#dddddd"
            >mdi-arrow-right-drop-circle-outline</v-icon
          >
        </span>
      </div>
    </div>
    <div class="thumbnails">
      <div
        v-for="(image, index) in images"
        :key="image.id"
        :class="['thumbnail-image', activeImage == index ? 'active' : '']"
        @click="activateImage(index)"
      >
        <img :src="image.thumb" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-carousel {
  user-select: none;
  position: relative;
}
.progressbar {
  display: block;
  width: 100%;
  height: 5px;
  position: absolute;
  background-color: rgba(221, 221, 221, 0.25);
  z-index: 1;
}
.progressbar > div {
  background-color: rgba(255, 255, 255, 0.52);
  height: 100%;
}
.thumbnails {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}
.thumbnail-image {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 5px;
}
.thumbnail-image > img {
  width: 100%;
  height: 100%;
  transition: all 250ms;
  border: 1px solid #dddddd;
  border-radius: 3px;
  padding: 2px;
}
.thumbnail-image:hover > img,
.thumbnail-image.active > img {
  opacity: 0.6;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.5);
}
.card-img {
  position: relative;
  margin-bottom: 15px;
}
.card-img > img {
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  border: 1px solid #dddddd;
  border-radius: 3px;
  padding: 4px;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.5);
}
.actions {
  font-size: 1.5em;
  height: 40px;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #585858;
}
.actions > span {
  cursor: pointer;
  transition: all 250ms;
  font-size: 45px;
}
.actions > span.prev {
  margin-left: 5px;
}
.actions > span.next {
  margin-right: 5px;
}
.actions > span:hover {
  color: #eee;
  opacity: 1;
}
span.prev,
span.next {
  opacity: 0.5;
}
</style>

<script>
export default {
  data() {
    return {
      //Array to hold all carousel images
      images: [
        {
          id: "1",
          big: "https://picsum.photos/1920/1080",
          thumb: "https://picsum.photos/1920/1080"
        },
        {
          id: "2",
          big: "https://picsum.photos/1920/1080",
          thumb: "https://picsum.photos/1920/1080"
        },
        {
          id: "3",
          big: "https://picsum.photos/1920/1080",
          thumb: "https://picsum.photos/1920/1080"
        },
        {
          id: "4",
          big: "https://picsum.photos/1920/1080",
          thumb: "https://picsum.photos/1920/1080"
        }
      ],
      //Index of the active image on the images array
      activeImage: 0
    };
  },
  computed: {
    // currentImage gets called whenever activeImage changes
    // and is the reason why we don't have to worry about the
    // big image getting updated
    currentImage() {
      return this.images[this.activeImage].big;
    }
  },
  methods: {
    // Go forward on the images array
    // or go at the first image if you can't go forward :/
    nextImage() {
      var active = this.activeImage + 1;
      if (active >= this.images.length) {
        active = 0;
      }
      this.activateImage(active);
    },
    // Go backwards on the images array
    // or go at the last image
    prevImage() {
      var active = this.activeImage - 1;
      if (active < 0) {
        active = this.images.length - 1;
      }
      this.activateImage(active);
    },
    activateImage(imageIndex) {
      this.activeImage = imageIndex;
    }
  }
};
</script>
