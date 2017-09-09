import React from 'react'
import Chance from 'chance'
import BingoBoard from './BingoBoard'


const Bingo = () => {
  const chance = new Chance()
  const numbers1 = chance.unique(chance.natural, 25, {min: 1, max: 99})
  const numbers2 = chance.unique(chance.natural, 25, {min: 1, max: 99})
  const numbers3 = chance.unique(chance.natural, 25, {min: 1, max: 99})
  const numbers4 = chance.unique(chance.natural, 25, {min: 1, max: 99})
  return (
    <div className="container home">
      <div className="boards-container">
        <BingoBoard numbers={numbers1} />
        <BingoBoard numbers={numbers2} />
        <BingoBoard numbers={numbers3} />
        <BingoBoard numbers={numbers4} />
      </div>
    </div>
  )
}


export default Bingo
