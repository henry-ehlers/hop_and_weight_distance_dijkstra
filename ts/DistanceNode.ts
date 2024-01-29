export class DistanceNode {

    private readonly id: string;
    private readonly ego: string;
    private readonly hop: number;
    private readonly weighted: number;
    private readonly parent: string;

    public constructor(id: string, ego: string, hop: number, weight: number, parent: string) {
        this.id = id;
        this.ego = ego;
        this.hop = hop;
        this.weighted = weight;
        this.parent = parent;
    };

    public get Weighted(): number {
        return this.weighted;
    };

    public get Hop(): number {
        return this.hop;
    };

    public get ID(): string {
        return this.id;
    };

    public get Ego(): string {
        return this.ego;
    };

}