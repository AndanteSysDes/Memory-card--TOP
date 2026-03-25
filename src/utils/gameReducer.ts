export type State = {
    isPlaying: boolean;
    touchedList: string[];
    highScore: number;
};

export type Action = |{
    type: 'START'
} | {
    type: 'END'
} | {
    type: 'SUCCESS',
    payload: {
        cardName: string
    }
} | {
    type: 'FAILED'
};

export const initialGameState : State = {
    isPlaying: false,
    touchedList: [],
    highScore: 0
}

export function gameReducer(state : State, action : Action) : State {
    switch(action.type) {
        case 'START':
            return {
                ...state,
                isPlaying: true,
                touchedList: []
            }
        case 'END':
            {
                const currentScore = state.touchedList.length;
                const newHighScore = currentScore > state.highScore
                    ? currentScore
                    : state.highScore;
                return {
                    ...state,
                    isPlaying: false,
                    highScore: newHighScore
                }
            }
        case 'SUCCESS':
            {
                const {cardName} = action.payload;
                return {
                    ...state,
                    touchedList: [
                        ...state.touchedList,
                        cardName
                    ]
                }
            }
        case 'FAILED':
            {
                const currentScore = state.touchedList.length;
                const newHighScore = currentScore > state.highScore
                    ? currentScore
                    : state.highScore;
                return {
                    ...state,
                    isPlaying: false,
                    highScore: newHighScore
                }
            }
        default:
            return state;
    }
}