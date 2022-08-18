import { Student } from "../../domain/entities/student";

export interface StudentsRepo {
  findById(id: string): Promise<Student | null>
}