<template>
  <v-theme-provider>
    <div id="heroBg" class="bg">
      <v-row>
        <v-col cols="12" md="6" class="hero-text">
          <h1 class="text-h2">{{ title }}</h1>
          <h3 class="text-h4">{{ subTitle }}</h3>
          <div class="text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            aliquet mauris non venenatis auctor. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per."
          </div>
        </v-col>
      </v-row>
    </div>
  </v-theme-provider>
</template>

<script>
export default {
  name: "HomeHero",
  props: ["title", "subTitle"],
};
</script>

<style lang="scss" scoped>
.hero-text {
  background: rgba(255, 255, 255, 0.37);
  margin: 2rem;
}

#heroBg.bg {
  width: 100%;
  background-size: cover !important;
  height: 500px;
  background: url(../images/AdobeStock_113405276_Preview.jpeg);
  background-repeat: no-repeat;
}
</style>
