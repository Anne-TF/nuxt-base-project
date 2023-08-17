import { Store } from 'pinia';
import { PiniaActionAdaptor, PiniaGetterAdaptor } from '../types';

export type State = {
    n: number;
}

export type Getters = {
    GetCounter: number;
};

export type Actions = {
    Increase: () => void;
    Decrease: () => void;
};

export type PiniaStore = Store<'counter', State, Getters, Actions>;

export type PiniaActions = PiniaActionAdaptor<Actions, PiniaStore>;

export type PiniaGetters = PiniaGetterAdaptor<Getters, PiniaStore>;
