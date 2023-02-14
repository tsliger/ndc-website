import { atom } from 'recoil'

const navState = atom({
    key: 'navState', // unique ID (with respect to other atoms/selectors)
    default: true, // default value (aka initial value)
});

export { navState }