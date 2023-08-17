export interface PokemonInterface {
    count: number;
    next: string;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[]
}
