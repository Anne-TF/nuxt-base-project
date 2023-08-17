import { WatchSource } from 'vue';

// FOR MORE INFORMATION CHECK THE FOLLOWING LINK: https://nuxt.com/docs/api/composables/use-fetch
export interface IUseFetchOptionsInterface {
    key?: string;
    method?: string;
    query?: object;
    body?: RequestInit['body'] | Record<string, any>;
    headers?: Record<string, string> | [key: string, value: string][] | Headers;
    baseURL?: string;
    server?: boolean;
    lazy?: boolean;
    immediate?: boolean;
    default?: () => any;
    transform?: (input: any) => any;
    pick?: string[];
    watch?: WatchSource[];
}
