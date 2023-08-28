import fs from 'fs';
export class JSONIO {
    static writeObjectsToJSON(objects, file, path = ".") {
        const filePath = path + "/" + file;
        let jsonData = [];
        objects.forEach(d => jsonData.push(JSON.stringify(d)));
        fs.writeFile(filePath, jsonData.toString(), function (err) {
            if (err) {
                throw (err);
            }
            ;
        });
    }
    ;
    static readObjectsFromJSON(file, path = ".") {
        const filePath = path + "/" + file;
        const data = JSON.parse(fs.readFileSync(filePath).toString());
        return (data);
    }
    ;
}
;
