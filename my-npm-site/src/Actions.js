import * as ActionTypes from './ActionTypes';

export const search = (keywords) => {
    return {
        type: ActionTypes.SEARCH,
        keywords: keywords
    }
}