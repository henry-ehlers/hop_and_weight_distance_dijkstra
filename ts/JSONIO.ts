import fs from 'fs';
import max from 'mathjs'

export class JSONIO {

    public static writeObjectsToJSON(objects: Array<Object>, file: string, path: string = "."): void {
        const filePath: string = path + "/" + file;
        let jsonData: Array<string> = [];
        objects.forEach(d => jsonData.push(JSON.stringify(d)));
        fs.openSync(filePath, 'w');
        fs.writeFile(filePath, "[" + jsonData.toString() + "]", function(err) {
            if (err) {
                throw (err);
            };
        });
    };

    public static readObjectsFromJSON(file: string, path: string = "."): any {
        const filePath: string = path + "/" + file;
        const data = JSON.parse(fs.readFileSync(filePath).toString());
        return data;
    };

    public static rescaleEdges(data: Array<any>): Array<object> {
        const maxWeight = Math.max(...data.map(d => d.weight));
        if (maxWeight > 1) {
            data.forEach(d => d.weight = d.weight / maxWeight);
        } 
        return data;
    }
};