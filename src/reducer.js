export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove token after deployment
     token: "BQCFTjZCR2uOKjf66R0K3W3UTtW6-k8setdHuHxFMAL3lnHPPe…7XJM9xldpioNmEEvHoosobGjDdpBxBWbY5N2NN72nnNdb11n-"
}

const reducer = (state, action)=>{
    console.log(action)
    // Action => type, [payload]
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state;
    }
}

export default reducer;