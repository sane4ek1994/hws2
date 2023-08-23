type TState = {
    isLoading: boolean
}

type TLoadingAC = ReturnType<typeof loadingAC>
type TActions = TLoadingAC

const initState: TState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: TActions): TState => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
