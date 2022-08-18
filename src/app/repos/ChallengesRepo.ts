import { Challenge } from "../../domain/entities/challenge";

export interface ChallengesRepo {
  findById(id: string): Promise<Challenge | null>
}