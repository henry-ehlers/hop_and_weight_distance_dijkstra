"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONIO = void 0;
const fs_1 = __importDefault(require("fs"));
class JSONIO {
    static writeObjectsToJSON(objects, file, path = ".") {
        const filePath = path + "/" + file;
        let jsonData = [];
        objects.forEach(d => jsonData.push(JSON.stringify(d)));
        fs_1.default.writeFile(filePath, jsonData.toString(), function (err) {
            if (err) {
                console.log(err);
            }
            ;
        });
    }
    ;
    static readObjectsFromJSON(file, path = ".") {
        const filePath = path + "/" + file;
        let data;
        fs_1.default.readFile(filePath, function (error, JSONdata) {
            if (error) {
                throw error;
            }
            ;
            data = JSON.parse(JSONdata.toString());
        });
        return (data);
    }
    ;
}
exports.JSONIO = JSONIO;
;
