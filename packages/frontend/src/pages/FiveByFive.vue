<template>
  <div class="five-by-five">
    <div class="input-wrapper">
      <input
        type="number"
        v-model="weight"
        placeholder="最大重量を入力"
        @input="fiveByFive(weight)"
      />
      <p>kg</p>
    </div>
    <div class="table-wrapper">
      <tr class="table__row">
        <th class="table__header">DAY</th>
        <th class="table__header">SET1</th>
        <th class="table__header">SET2</th>
        <th class="table__header">SET3</th>
        <th class="table__header">SET4</th>
        <th class="table__header">SET5</th>
      </tr>

      <tr class="table__row" v-for="(value, key, index) in workout" :key="key">
        <td class="table__data">{{ `DAY${index + 1}` }}</td>
        <td class="table__data">{{ value[0] }}×５</td>
        <td class="table__data">{{ value[1] }}×５</td>
        <td class="table__data">{{ value[2] }}×５</td>
        <td class="table__data">{{ value[3] }}×５</td>
        <td class="table__data">{{ value[4] }}×５</td>
      </tr>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import WorkoutApiService from "../services/workoutApi";

let weight = ref();
let workout = ref({});
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

<stype lang="scss" scoped>
.five-by-five {
  display: flex;
  flex-direction: column;
  align-items: center;
}
// inputタグのスピンボタンを消す
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.input-wrapper {
  display: flex;
  padding: 10px;

  p {
    display: flex;
    align-items: flex-end;
    margin: 0;
  }
  input {
    font-size: 20px;
    width: auto;
    height: 30px;
    border: none;
    text-align: center;
    border-bottom: 2px solid white;
    &:hover {
      border-bottom: 2px solid gray;
    }
    &:focus-visible,
    &:active {
      border: none;
      outline: none;
      border-bottom: 2px solid #1a2adf;
    }
  }
}

.table-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
}

.table__header,
.table__data {
  width: 150px;
  padding: 10px 0;
}
.table__row {
  text-align: center;
  border-bottom: 1px solid gray;
  &:hover {
    background-color: rgb(175, 172, 172);
  }
  &:first-child {
    background-color: #1a2adf;
    color: white;
  }
}
</stype>
