import React, { useState } from "react";
import Tile from "./Tile";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./Constants"
import { canSwap, shuffle, swap, isSolved } from "./Helpers"

import { Button, Box } from '@material-ui/core';

//Credit to Barely Coding with Daniel Bark
//https://www.youtube.com/watch?v=_wdbhVvMOCs

function Board(props) {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);
  console.log('is started:', isStarted)
  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles)
    setTiles(shuffledTiles);
  }

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1))
      setTiles(swappedTiles)
    }
  }

  const handleTileClick = (index) => {
    swapTiles(index)
  }

  const handleShuffleClick = () => {
    shuffleTiles()
  }

  const handleStartClick = () => {
    shuffleTiles()
    setIsStarted(true)
  }

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };
  const hasWon = isSolved(tiles)

  return (
    <>
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
            imgUrl={props.imgUrl}
          />
        ))}
      </ul>
      <Box textAlign ='center'>
        {hasWon && isStarted && <div>Great success!</div>}
        {!isStarted ?
          (<Button className='button-board' onClick={() => handleStartClick()}>Start Quest</Button>) :
          (<Button className='button-board' onClick={() => handleShuffleClick()}>Restart Quest</Button>)}
        </Box>
    </>
  );
}

export default Board;
