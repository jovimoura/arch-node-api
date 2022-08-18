import { Student } from '../../domain/entities/student';
import { InMemoryChallengesRepository } from '../../../test/repositories/in-memory-challenge-repository';
import { InMemoryStudentsRepository } from '../../../test/repositories/in-memory-student-repository';
import { CreateChallengeSubmission } from "./create-challenge-submission"
import { Challenge } from '../../domain/entities/challenge';

describe('Create challenge submission use case', () => {
  it('should be able to create a new challenge submission', async () => {
    const studentsRepo = new InMemoryStudentsRepository()
    const challengesRepo = new InMemoryChallengesRepository()

    const student = Student.create({
      name: 'João',
      email: 'joao@email.com'
    })

    const challenge = Challenge.create({
      intructionsUrl: 'http://example.com',
      title: 'Challenge 01'
    })

    studentsRepo.items.push(student)
    challengesRepo.items.push(challenge)

    const sut = new CreateChallengeSubmission(studentsRepo, challengesRepo)

    const response = await sut.execute({
      studentId: student.id,
      challengeId: challenge.id
    })

    console.log('student', student)

    expect(response).toBeTruthy()
  })
})