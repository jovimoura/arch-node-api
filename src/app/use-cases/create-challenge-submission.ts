import { ChallengesRepo } from '../repos/ChallengesRepo';
import { StudentsRepo } from '../repos/StudentsRepo';
import { Submission } from "../../domain/entities/submission"

type CreateChallengeSubmissionRequest = {
  studentId: string
  challengeId: string
}

export class CreateChallengeSubmission {
  constructor(private studentsRepo: StudentsRepo, private challengesRepo: ChallengesRepo) {}

  async execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
    const student = await this.studentsRepo.findById(studentId)

    if(!student) throw new Error('Student does not exists')

    const challenge = await this.challengesRepo.findById(challengeId)

    if(!challenge) throw new Error('Challenge does not exists')

    const submission = Submission.create({
      studentId,
      challengeId,
    })

    return submission
  }
}