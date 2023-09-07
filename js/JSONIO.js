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
        fs_1.default.openSync(filePath, 'w');
        fs_1.default.writeFile(filePath, "[" + jsonData.toString() + "]", function (err) {
            if (err) {
                throw (err);
            }
            ;
        });
    }
    ;
    static readObjectsFromJSON(file, path = ".") {
        const filePath = path + "/" + file;
        const data = JSON.parse(fs_1.default.readFileSync(filePath).toString());
        return data;
    }
    ;
    static rescaleEdges(data) {
        const maxWeight = Math.max(...data.map(d => d.weight));
        if (maxWeight > 1) {
            data.forEach(d => d.weight = d.weight / maxWeight);
        }
        return data;
    }
}
exports.JSONIO = JSONIO;
;
