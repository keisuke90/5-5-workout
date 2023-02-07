<script setup lang="ts">
import { ref } from "vue";
import WorkoutApiService from "./services/workoutApi";

let weight = ref();
let workout = ref();
const fiveByFive = (weight: number) => {
  WorkoutApiService.fiveByFiveGenerate(weight)
    .then((res: any) => {
      workout.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<template>
  <input
    type="number"
    v-model="weight"
    placeholder="kg"
    @input="fiveByFive(weight)"
  />
  <div class="table">
    {{ workout }}
  </div>
</template>

<style lang="scss" scoped></style>
