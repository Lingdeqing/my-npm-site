import * as ActionTypes from './ActionTypes';

export default (state, action) => {

    switch (action.type){
        case ActionTypes.SEARCH:
            return {
                items: state.items.map(item => {
                    return {...item, visible: action.keywords === '' || item.name.indexOf(action.keywords) !== -1}
                })
            };
        default:
            return state;
    }
}