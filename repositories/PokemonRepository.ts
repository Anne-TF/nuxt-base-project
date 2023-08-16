import { IPokemon } from '~/interfaces/IPokemon';
import { config } from '~/app/repositories/config';
import HttpService from '~/app/services/HttpService';
import IPayloadProps from '~/app/interfaces/IPayloadProps';

const { getAll } = config.apiGateway.routes.pokemon;

class PokemonRepository
{
    public getPokemons({ baseUrl, queryParams }: IPayloadProps)
    {
        const options: any = {
            url: `${baseUrl}/${getAll}`,
            method: 'GET'
        };

        return HttpService.requestNoToken<IPokemon>({ config: options, queryParams });
    }
}

export default PokemonRepository;
