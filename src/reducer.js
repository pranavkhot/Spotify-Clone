export const initialState = {
    user: null,
    playlist:[],
    playing: false,
    item: null,
    //REMOVE AFTER FINISH DEVELOPING
   //token: 'BQA5vyzoN_Vfn5PeRRyyi-hsewJnILWliQa9F4FsRLE-hLiq507NR7Xnn19-k_8Ei8Wvr4q963Xh5JMXHgIdvzz0mFUvUy07Tz5k1LC2ldyjNEn6pot75F-ygbB-MOn7SoNAQzJd_wPobw9ebqyRdGRWpIV6TvI0u42A0p2xl586JFBa',
};

const reducer = (state,action) =>{

    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };

            case 'SET_TOKEN':
                return{
                    ...state,
                    token:action.token,
                };

                case 'SET_PLAYLISTS':
                    return{
                        ...state, 
                        playlists: action.playlists,
                    };

                    case "SET_DISCOVER_WEEKLY":
                        return{
                            ...state,
                            discover_weekly: action.discover_weekly,
                        }
            default: 
            return state;
    }
}

export default reducer;