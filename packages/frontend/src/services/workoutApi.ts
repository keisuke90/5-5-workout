import http from "../http-common";

class WorkoutApiService {
  fiveByFiveGenerate<T>(weight: number): Promise<T> {
    return http.post("/workout/5x5", { weight: weight });
  }
}

export default new WorkoutApiService();
