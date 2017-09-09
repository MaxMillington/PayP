export const BINGO = 'BINGO'
export const BINGO_SUCCESS = 'BINGO_SUCCESS'
export const BINGO_ERROR = 'BINGO_ERROR'

export const NEXT_BALL = 'NEXT_BALL'
export const NEXT_BALL_SUCCESS = 'NEXT_BALL_SUCCESS'
export const NEXT_BALL_ERROR = 'NEXT_BALL_ERROR'

export const callBingo = () => {
  return dispatch => {
    dispatch({
      type: BINGO
    })

  }
}

export const getNextBall = () => {
  return dispatch => {
    dispatch({
      type: NEXT_BALL
    })
  }
}