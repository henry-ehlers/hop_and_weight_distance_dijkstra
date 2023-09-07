export class DistanceEdge {
    private readonly source: string;
    private readonly target: string;
    private readonly sourceIndex: number;
    private readonly targetIndex: number;
    private readonly weight: number;
    private readonly ego: string;
    private readonly hop: number;

    public constructor(source: string, target: string, sourceIndex: number, targetIndex: number, weight: number, ego: string, hop: number) {
        this.source = source;
        this.target = target;
        this.sourceIndex = sourceIndex;
        this.targetIndex = targetIndex;
        this.weight = weight;
        this.ego = ego;
        this.hop = hop;
    }
}