import services from './index';

declare module 'Types' {
    export type Services = typeof services;
}
