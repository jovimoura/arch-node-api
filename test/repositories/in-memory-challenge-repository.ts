import { ChallengesRepo } from "../../src/app/repos/ChallengesRepo";
import { Challenge } from "../../src/domain/entities/challenge";

export class InMemoryChallengesRepository implements ChallengesRepo {
  public items: Challenge[] = []

  async findById(id: string): Promise<Challenge | null> {
    const challenge = this.items.find(challenge => challenge.id === id)

    if(!challenge) return null

    return challenge
  }
}