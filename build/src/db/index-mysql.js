"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Singleton
let connection = null;
function createMySQLConnection() {
    try {
        if (!connection) {
            connection = mysql2_1.default.createConnection({
                host: process.env.DB_HOST || 'localhost',
                user: process.env.DB_USER || 'root',
                password: process.env.DB_PASSWORD || '',
                database: process.env.DB_DATABASE || 'mydatabase'
            });
        }
        return connection;
    }
    catch (error) {
        console.error('Error creating MySQL connection:', error);
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
}
exports.default = createMySQLConnection();
//# sourceMappingURL=index-mysql.js.map