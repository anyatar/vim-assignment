"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3 = require('sqlite3').verbose();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Singleton
let connection = null;
function createSQLiteConnection() {
    try {
        if (!connection) {
            connection = new sqlite3.Database('database.db');
            connection.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT,
        email TEXT
      )`);
        }
        return connection;
    }
    catch (error) {
        console.error('Error creating SQLite connection:', error);
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
}
exports.default = createSQLiteConnection();
//# sourceMappingURL=index-sqlite.js.map