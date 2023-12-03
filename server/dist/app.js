"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 5050;
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
}));
app.use('/api/v1', index_1.default);
// app.use(express.static('../client/dist/')); //<--この場合、package.jsonからの相対パス
app.use(express_1.default.static(path_1.default.join(__dirname, '../../client/dist'))); //<--この場合、app.tsの自ファイルからの相対パス
app.listen(PORT, () => {
    console.log('server is running');
});
