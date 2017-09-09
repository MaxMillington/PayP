export const BINGO = 'BINGO'
export const BINGO_SUCCESS = 'BINGO_SUCCESS'
export const BINGO_ERROR = 'BINGO_ERROR'

export const NEXT_BALL = 'NEXT_BALL'
export const NEXT_BALL_SUCCESS = 'NEXT_BALL_SUCCESS'
export const NEXT_BALL_ERROR = 'NEXT_BALL_ERROR'

export const callBingo = () => {
  console.log('calling bingo')
  return dispatch => {
    dispatch({
      type: BINGO
    })
  }
}

export const getNextBall = () => {
  console.log('getting next ball')
  return dispatch => {
    dispatch({
      type: NEXT_BALL
    })
  }
}