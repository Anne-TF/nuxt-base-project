import { PiniaActions } from './types';

const actions: PiniaActions = {
    Increase()
    {
        this.n++;
    },
    Decrease()
    {
        if (this.n > 0)
        {
            this.n--;
        }
    }
};

export default actions;
