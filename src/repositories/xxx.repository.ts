import { OkPacket } from "mysql2";
import connection from "../db/index-mysql";

import Person from "../interfaces/person.model";
import Runner from "../interfaces/person.model";
import {RunStatType} from "../interfaces/person.model";

const USERS_TABLE = 'users';

class RunRepository {
  
  save(person: Person): Promise<boolean> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>(
        `INSERT INTO ${USERS_TABLE} (name, age, city, publicKey) VALUES(?,?,?,?)`,
        [
          person.name,
          person.age,
          person.city,
          ''
        ],
        (err, res) => {
          if (err) reject(err);
          resolve(true);
        }
      );
    });
  }
  
  retrieveByName(name: string): Promise<Runner[]> {
    return new Promise((resolve, reject) => {
      connection.query<Runner[]>(
        `SELECT * FROM ${USERS_TABLE} WHERE name = ?`,
        [name],
        (err, res) => {
          if (err) reject(err);
          else resolve(res);
        }
      );
    });
  }

  update(id: number, distance: number): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>(
        `UPDATE ${USERS_TABLE} SET total_distance_run = total_distance_run + ? WHERE id = ?`, [distance, id],
        (err, res) => {
          if (err) reject(err);
          else resolve(res.affectedRows);
        }
      );
    });
  }

  getRanking(runner: Runner, type: RunStatType): Promise<number> {
    return new Promise((resolve, reject) => {
        const query:any = `SELECT COUNT(*) AS ranking FROM ${USERS_TABLE} WHERE city = ? AND total_distance_run > (SELECT total_distance_run FROM users WHERE name = ? and id = ?)`;
        const params = [runner.city, runner.name, runner.id];
              
        connection.query(query, params, (err, res:any) => {
            if (err) reject(err);
            else resolve(1);
        });
      });
    }

}

export default new RunRepository();
