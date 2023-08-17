import { PokemonInterface } from '~/interfaces/pokemons/pokemon.interface';
import { config } from '~/app/repositories/config';
import { HttpService } from '~/app/services/http.service';
import PayloadPropsInterface from '~/app/interfaces/payload-props.interface';

const { getAll } = config.apiGateway.routes.pokemon;

class PokemonRepository
{
    public getPokemons({ baseUrl, queryParams, data }: PayloadPropsInterface)
    {
        const options: any = {
            url: `${baseUrl}/${getAll}`,
            method: 'GET',
            ...data
        };

        console.log(options);

        return HttpService.request<PokemonInterface>({ config: options, queryParams });
    }
}

export default PokemonRepository;
