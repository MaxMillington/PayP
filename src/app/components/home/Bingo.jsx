import React, { PropTypes } from 'react'
import BingoBoard from './BingoBoard'
import Button from './Button'

const Bingo = (props) => {
  return (
    <div className="container home">
      <div className="boards-container">
        <BingoBoard numbers={props.board1Numbers} />
        <BingoBoard numbers={props.board2Numbers} />
        <BingoBoard numbers={props.board3Numbers} />
        <BingoBoard numbers={props.board4Numbers} />
      </div>
      <div className="buttons-container">
        <Button text="Call Bingo!" click={props.callBingo}/>
        <Button text="Next Ball" click={props.getNextBall}/>
      </div>
    </div>
  )
}

Bingo.propTypes = {
  board1Numbers: PropTypes.array.isRequired,
  board2Numbers: PropTypes.array.isRequired,
  board3Numbers: PropTypes.array.isRequired,
  board4Numbers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  callBingo: PropTypes.func.isRequired,
  getNextBall: PropTypes.func.isRequired
}


export default Bingo
