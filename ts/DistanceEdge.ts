export class DistanceEdge {
    private readonly source: string;
    private readonly target: string;
    private readonly weight: number;
    private readonly hop: number;

    public constructor(source: string, target: string, weight: number, hop: number) {
        this.source = source;
        this.target = target;
        this.weight = weight;
        this.hop = hop;
    }
}