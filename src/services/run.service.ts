import runRepository from "../repositories/xxx.repository";
import Person from "../interfaces/person.model";
import Runner from "../interfaces/person.model";

class RunService {

  async save(person: Person): Promise<boolean> {
    return await runRepository.save(person);
  }

  async retrieveRunners(name: string): Promise<Runner[]> {
    return await runRepository.retrieveByName(name);
  }
  
  async update(id: number, distance: number): Promise<number> {
    return await runRepository.update(id, distance);
  }
}

export default new RunService();
