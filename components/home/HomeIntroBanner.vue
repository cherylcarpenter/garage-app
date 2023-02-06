<template>
  <v-theme-provider>
    <section class="intro-banner">
      <v-row justify="center" align="center" class="px-10">
        <v-col cols="12" md="4">
          <div class="text-center py-10">
            <h1 class="text-h3 heading">My Collection</h1>
            <hr color="accent" align="center" maxWidth="200" />
            <p class="text-body-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              aliquet mauris non venenatis auctor. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per.
            </p>
          </div>
        </v-col>
      </v-row>
    </section>
  </v-theme-provider>
</template>

<script>
export default {
  name: "HomeIntroBanner",
};
</script>
<style lang="scss">
@import "../scss/variables.scss";

.heading {
  color: $brand-blue;
}

hr {
  border-color: $brand-red;
}

.intro-banner {
  background-color: $brand-ltgray;
}
</style>
