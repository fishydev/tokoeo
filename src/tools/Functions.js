export default {
  toPage(page) {
    if (page !== this.$route.name) {
      this.$router.push({ name: page });
    } else {
      this.$forceUpdate();
    }
  }
}