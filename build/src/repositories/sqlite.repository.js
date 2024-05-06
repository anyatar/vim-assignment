"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_sqlite_1 = __importDefault(require("../db/index-sqlite"));
const xxx_TABLE = 'xx';
class SQLiteRepository {
    getAll() {
        return new Promise((resolve, reject) => {
            index_sqlite_1.default.all(`SELECT * FROM ${xxx_TABLE}`, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        });
    }
    save(name, email) {
        return new Promise((resolve, reject) => {
            index_sqlite_1.default.run(`INSERT INTO  ${xxx_TABLE} (name, email) VALUES (?, ?)`, [name, email], (err, res) => {
                if (err)
                    reject(err);
                resolve(true);
            });
        });
    }
}
;
exports.default = new SQLiteRepository();
//# sourceMappingURL=sqlite.repository.js.map