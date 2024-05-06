"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcome = void 0;
function welcome(req, res) {
    console.log("Welcome to VIM API application");
    return res.json({ message: "Welcome to VIM API application!" });
}
exports.welcome = welcome;
//# sourceMappingURL=home.controller.js.map