export function getDefaultOptions(config: any, token?: string): any
{
    return {
        method: 'GET',
        ...config,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : '',
            ...config.headers
        }
    };
}

export function getDefaultOptionsWithoutToken(config: any): any
{
    return {
        method: 'POST',
        ...config,
        headers: {
            'Content-Type': 'application/json',
            ...config.headers
        }
    };
}
