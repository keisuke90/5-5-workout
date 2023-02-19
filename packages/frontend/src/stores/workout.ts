import { defineStore } from "pinia";
import { WorkoutApiService } from "../services/workoutApi";

type Workout = {
  day1: [number, number, number, number, number];
  day2: [number, number, number, number, number];
  day3: [number, number, number, number, number];
  day4: [number, number, number, number, number];
  day5: [number, number, number, number, number];
  day6: [number, number, number, number, number];
  day7: [number, number, number, number, number];
  day8: [number, number, number, number, number];
  day9: [number, number, number, number, number];
  day10: [number, number, number, number, number];
  day11: [number, number, number, number, number];
  day12: [number, number, number, number, number];
  day13: [number, number, number, number, number];
  day14: [number, number, number, number, number];
  day15: [number, number, number, number, number];
  day16: [number, number, number, number, number];
};

type State = {
  weight: number | null;
  workout: Workout | null;
};

export const useWorkoutStore = defineStore({
  id: "workout",
  state: (): State => ({
    weight: null,
    workout: null,
  }),
  getters: {},
  actions: {
    fiveByFive() {
      if (this.weight) {
        WorkoutApiService.fiveByFiveGenerate(this.weight)
          .then((res: any): void => {
            this.workout = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
});
