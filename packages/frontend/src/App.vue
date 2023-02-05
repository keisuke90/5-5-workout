<script setup lang="ts">
import { ref, onMounted } from "vue";
import WorkoutApiService from "./services/workoutApi";

let workout: any = ref({});
onMounted(() => {
  WorkoutApiService.fiveByFiveGenerate(100).then((res: any) => {
    workout.value = res.data;
  });
});
</script>

<template>
  <div class="table">
    {{ workout }}
  </div>
</template>

<style lang="scss" scoped></style>
