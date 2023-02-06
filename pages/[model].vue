<template>
  <section>
    <template v-for="(bike, index) in data.bikes" :key="index">
      <div v-if="encodeURI(bike.model) === encodedModel">
        <v-row>
          <v-col cols="12">
            <v-img min-height="300" :src="`${bike.img}`"> </v-img></v-col></v-row>
        <v-row>
          <v-col cols="12">
            <h1 class="text-h2 text-center py-4 text-primary">
              {{ bike.model }}
            </h1>
            <hr color="accent" align="center" maxWidth="200" />
          </v-col>
        </v-row>
        <v-row class="v-row align-center justify-center">
          <v-col cols="6">
            <p><strong>Manufacturer: </strong>{{ bike.manufacturer }}</p>
            <p><strong>Power: </strong>{{ bike.power }}</p>
            <p><strong>Color: </strong>{{ bike.color }}</p>
            <p><strong>Displacement: </strong>{{ bike.displacement }}</p>
            <p><strong>Year: </strong>{{ bike.year }}</p>
          </v-col>
        </v-row>

        <v-row class="v-row align-center justify-center">
          <v-col cols="6">
            <strong>Description: </strong>
            <p class="mb-6 body-1">
              {{ bike.description.replaceAll("&nbsp;", " ") }}
            </p>
          </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-3 mb-8">
          <v-btn to="/" color="primary">Go Back</v-btn>
        </v-row>
      </div>
    </template>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";

const route = useRoute();
// const { data } = await useFetch("data.json");
const model = route.params.model;
const { data } = await useFetch("data.json");
const encodedModel = encodeURI(model);
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

hr {
  border-color: $brand-red;
}

.body-1 {
  word-break: break-word;
}
</style>
