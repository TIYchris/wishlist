var initialState = {};

export default function(state = initialState, action) {
    var newState = Object.assign({}, state)

    switch (action.type) {
        case 'ITEM_SELECTED':
            newState.selectedItem = action.selectedItem;
            break;
            
        case 'VIEW_ITEM':
            newState.item = action.item;
            break;

        case 'LISTS_UPDATED':
            newState.lists = action.lists;
            break;

        case 'PLEDGES_UPDATED':
            newState.pledges = action.pledges;
            break;

        case 'ADD_LIST':
            newState.newList = action.newList;
            break;

        // case 'ADD_EVENT_LIST':
        //     newState.newList = action.newList;
        //     break;

    }

    return newState;
}
