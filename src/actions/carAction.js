export const buyItem = newFeature => {
    console.log('newfeature from actions', newFeature)
    return {
        type: 'BUY_ITEM',
        payload: newFeature
    };
};

export const removeFeature = removeFeature => {
    console.log('removeFeatreu from actions', removeFeature)
    return{
        type: 'REMOVE_ITEM',
        payload: removeFeature
    }
}