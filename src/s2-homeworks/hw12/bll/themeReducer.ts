
export type TThemeState = {
    themeId: number
}
const initState = {
    themeId: 1,
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

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const) // fix any
