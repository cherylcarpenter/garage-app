<template>
  <home-hero :title="data.title" :subTitle="data.subTitle"></home-hero>
  <home-intro-banner></home-intro-banner>
  <section class="card-wrapper">
    <v-container>
    <v-row justify="center" align="center" class="pa-6">
      <template v-for="(bike, index) in data.bikes" :key="index">
        <v-col cols="6">
          <cards-custom-actions class="" v-bind="bike" :index="index" data="{{data}}" index="{{index}}" />
        </v-col>
      </template>
    </v-row>
    </v-container>
  </section>
</template>

<script setup>
const { data } = await useFetch("data.json");
</script>
<style lang="scss">
@import "../scss/variables.scss";

.card-wrapper {
  background-color: $brand_black;
}
</style>
