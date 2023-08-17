import { QueryParams } from '~/app/interfaces/http.interface';
import { IUseFetchOptionsInterface } from '~/app/interfaces/use-fetch-options.interface';

export function getDefaultOptions(config: IUseFetchOptionsInterface, token?: string): any
{
    if (token)
    {
        Object.assign(config.headers, { Authorization: `Bearer ${token}` });
    }
    return {
        method: 'GET',
        ...config,
        headers: {
            'Content-Type': 'application/json',
            ...config.headers
        }
    };
}

export function getParams(queryParams?: QueryParams)
{
    let params;

    if (queryParams?.pagination)
    {
        if (queryParams?.pagination?.limit)
        {
            params = {
                'pagination[limit]': queryParams?.pagination?.limit
            };
        }
        if (queryParams?.pagination?.offset !== undefined)
        {
            params = {
                ...params,
                'pagination[offset]': queryParams?.pagination?.offset
            };
        }
    }

    if (queryParams?.filter)
    {
        params = {
            ...params,
            filter: queryParams?.filter
        };
    }
    return params || queryParams;
}
