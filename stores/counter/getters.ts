import { PiniaGetters } from './types';

const getters: PiniaGetters = {
    GetCounter: (state) =>
    {
        return state.n;
    }
};

export default getters;
