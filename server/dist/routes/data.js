"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const temp = { 1: 100, 2: 200, 3: 300 };
router.get('/', (req, res, next) => {
    res.send(temp);
});
exports.default = router;
