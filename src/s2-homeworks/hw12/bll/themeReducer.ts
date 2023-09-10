export enum THEME_VALUE {
    LIGHT = 1,
    BLUE = 2,
    DARK = 3
}

export type TThemeState = {
    themeId: THEME_VALUE
}
const initState = {
    themeId: THEME_VALUE.LIGHT,
}

type TActions = ReturnType<typeof changeThemeId>

export const themeReducer = (state: TThemeState = initState, action: TActions): TThemeState => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: THEME_VALUE) => ({type: 'SET_THEME_ID', id} as const) // fix any
