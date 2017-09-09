import React from 'react'
import Chance from 'chance'
import BingoBoard from './BingoBoard'
import Button from './Button'

const Bingo = () => {
  const chance = new Chance()
  const numbers1 = chance.unique(chance.natural, 25, {min: 1, max: 99})
  const numbers2 = chance.unique(chance.natural, 25, {min: 1, max: 99})
  const numbers3 = chance.unique(chance.natural, 25, {min: 1, max: 99})
  const numbers4 = chance.unique(chance.natural, 25, {min: 1, max: 99})

  const bingo = () => {
    console.log('bingo')
  }

  const getBall = () => {
    console.log('basl')
  }

  return (
    <div className="container home">
      <div className="boards-container">
        <BingoBoard numbers={numbers1} />
        <BingoBoard numbers={numbers2} />
        <BingoBoard numbers={numbers3} />
        <BingoBoard numbers={numbers4} />
      </div>
      <div className="buttons-container">
        <Button text="Call Bingo!" click={bingo}/>
        <Button text="Next Ball" click={getBall}/>
      </div>
    </div>
  )
}


export default Bingo
