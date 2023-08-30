export class DistanceNode {

    private readonly id: string;
    private readonly ego: string;
    private readonly hop: number;
    private readonly weighted: number;

    public constructor(id: string, ego: string, hop: number, weight: number) {
        this.id = id;
        this.ego = ego;
        this.hop = hop;
        this.weighted = weight;
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