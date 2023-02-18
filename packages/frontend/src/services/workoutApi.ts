import http from "../http-common";

export const WorkoutApiService = {
  fiveByFiveGenerate<T>(weight: number): Promise<T> {
    return http.get(`/workout/5x5?weight=${weight}`);
  },
};
