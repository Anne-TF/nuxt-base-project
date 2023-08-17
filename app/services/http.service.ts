import { IHttpServiceParams } from '../interfaces/http.interface';
import { getDefaultOptions, getParams } from '../helpers/http.helper';

export class HttpService
{
    static async request<T>(data: IHttpServiceParams)
    {
        const { config, queryParams, user } = data;

        const requestDefaultOptions: any = getDefaultOptions(config, user?.token);

        return (await useFetch<T>(requestDefaultOptions.url, {
            ...requestDefaultOptions,
            query: getParams(queryParams)
        }
        )).data;
    }
}
