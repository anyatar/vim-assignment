"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_mysql_1 = __importDefault(require("../db/index-mysql"));
const USERS_TABLE = 'users';
class RunRepository {
    save(person) {
        return new Promise((resolve, reject) => {
            index_mysql_1.default.query(`INSERT INTO ${USERS_TABLE} (name, age, city, publicKey) VALUES(?,?,?,?)`, [
                person.name,
                person.age,
                person.city,
                ''
            ], (err, res) => {
                if (err)
                    reject(err);
                resolve(true);
            });
        });
    }
    retrieveByName(name) {
        return new Promise((resolve, reject) => {
            index_mysql_1.default.query(`SELECT * FROM ${USERS_TABLE} WHERE name = ?`, [name], (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        });
    }
    update(id, distance) {
        return new Promise((resolve, reject) => {
            index_mysql_1.default.query(`UPDATE ${USERS_TABLE} SET total_distance_run = total_distance_run + ? WHERE id = ?`, [distance, id], (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res.affectedRows);
            });
        });
    }
    getRanking(runner, type) {
        return new Promise((resolve, reject) => {
            const query = `SELECT COUNT(*) AS ranking FROM ${USERS_TABLE} WHERE city = ? AND total_distance_run > (SELECT total_distance_run FROM users WHERE name = ? and id = ?)`;
            const params = [runner.city, runner.name, runner.id];
            index_mysql_1.default.query(query, params, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(1);
            });
        });
    }
}
exports.default = new RunRepository();
//# sourceMappingURL=xxx.repository.js.map