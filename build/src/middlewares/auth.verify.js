"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtAuthMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token. Access denied' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, 'your_secret_key');
        req.userId = decoded.userId;
        next();
    }
    catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};
exports.default = jwtAuthMiddleware;
//# sourceMappingURL=auth.verify.js.map