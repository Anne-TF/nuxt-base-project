import { IHttpServiceParams } from '../interfaces/IHttp';
import { getDefaultOptions, getDefaultOptionsWithoutToken } from '../helpers/HttpHelper';

class HttpService
{
    static async request<T>(data: IHttpServiceParams)
    {
        const { config, queryParams, user } = data;

        const requestDefaultOptions: any = getDefaultOptions(config, user?.token);

        return (await useFetch<T>(requestDefaultOptions.url, {
            ...requestDefaultOptions,
            query: queryParams
        }
        )).data;
    }

    static async requestNoToken<T>(data: IHttpServiceParams)
    {
        const { config, queryParams } = data;

        const requestDefaultOptions: any = getDefaultOptionsWithoutToken(config);

        return (await useFetch<T>(requestDefaultOptions.url, {
            ...requestDefaultOptions,
            query: queryParams
        }
        )).data;
    }
}

export default HttpService;
