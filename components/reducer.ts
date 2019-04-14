// import Router from "next/router";
// import competitions from "pages/competitions";

export function appReducer(state, action) {
    switch (action.type) {
        case 'AUTHENTICATE':
            let isAdmin = false;
            if (action.payload.facebookId, process.env.adminFacebookId) isAdmin = true;
            return { ...state, auth: { authenticated: true, user: action.payload, isAdmin } };
        case 'DEAUTHENTICATE':
            return { ...state, auth: { authenticated: false, user: null } };
        case 'ADD_COMPETITION':
            return { ...state, competitions: [action.payload, ...state.competitions] };
        case 'UPDATE_COMPETITION':
            const competitions = state.competitions.map((competition: any) => {
                if (competition._id === action.payload._id) return action.payload
                return competition;
            });
            return { ...state, competitions };
        case 'SET_COMPETITIONS':
            return { ...state, competitions: action.payload, loaded: true };
        default:
            return state;
    }
}