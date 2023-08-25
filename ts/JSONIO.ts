import fs from "fs";

export class JSONIO {

    public static writeObjectsToJSON(objects: Array<Object>, file: string, path: string = "."): void {
        const filePath: string = path + "/" + file;
        let jsonData: Array<string> = [];
        objects.forEach(d => jsonData.push(JSON.stringify(d)));
        fs.writeFile(filePath, jsonData.toString(), function(err) {
            if (err) {
                console.log(err);
            };
        });
    };

    public static readObjectsFromJSON(file: string, path: string = "."): any {
        const filePath: string = path + "/" + file;
        let data: any;
        fs.readFile(filePath, function(error, JSONdata) {
            if (error) {throw error};
            data = JSON.parse(JSONdata.toString());
        });
        return (data);
    };
};