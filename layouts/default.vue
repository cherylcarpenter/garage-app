<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-0">
        <slot />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} Cheryl Carpenter</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "My Garage",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/variables.scss";

.v-footer {
  background-color: $brand_ltgray;
  border-top: 1px solid $brand_black;
}
</style>
