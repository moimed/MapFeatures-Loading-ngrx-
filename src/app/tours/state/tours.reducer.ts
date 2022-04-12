import { createReducer, on } from "@ngrx/store";
import { Tour } from './tours.state';

export const initialToursState : Tour[] = [
    {
        id: 1,
        numberOfPanos: 7
    }
];

export const toursReducer = createReducer(initialToursState);