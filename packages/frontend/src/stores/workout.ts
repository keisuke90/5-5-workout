import { defineStore } from "pinia";
import { WorkoutApiService } from "../services/workoutApi";
import { WorkoutState } from "../../../shared/types/workout";

export const useWorkoutStore = defineStore({
  id: "workout",
  state: (): WorkoutState => ({
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
  persist: true,
});
