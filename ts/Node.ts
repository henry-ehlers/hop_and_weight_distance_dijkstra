export class Node { 

    private readonly _ID: string;

    constructor(id: string) {
        this._ID = id;
    };

    public get ID() {
        return this._ID;
    };

};