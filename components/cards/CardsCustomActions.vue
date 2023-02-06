<template>
  <div class="pa-1">
    <v-card>
      <div class="img-wrapper">
        <v-img :src="`${img}`" height="300px" cover></v-img>
      </div>

      <v-card-title>{{ model }}</v-card-title>

      <v-card-subtitle>
        <strong>Manufacturer: </strong>{{ manufacturer }}</v-card-subtitle>
      <v-card-subtitle><strong>Power: </strong>{{ power }}</v-card-subtitle>
      <v-card-subtitle><strong>Color: </strong>{{ color }}</v-card-subtitle>
      <v-card-subtitle><strong>Displacement: </strong>{{ displacement }}</v-card-subtitle>
      <v-card-subtitle><strong>Year: </strong>{{ year }}</v-card-subtitle>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" variant="flat" flat :to="{ path: `/${modelUrl(model)}` }" nuxt>
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup lang="ts">
interface Props {
  manufacturer: string;
  model: string;
  power: string;
  description: string;
  color: string;
  displacement: string;
  year: string;
  img: string;
  index: number;
}
const {
  model,
  manufacturer,
  power,
  description,
  color,
  displacement,
  year,
  img,
  index,
} = defineProps<Props>();

const modelUrl = (model: string) => encodeURI(model);
</script>

<style lang="scss">
@import "../scss/variables.scss";

.v-img__img {
  background-color: $brand_white;
}

.img-wrapper {
  border-bottom: 2px solid $brand_black;
}

.v-card-title {
  color: $brand_blue;
}
</style>
