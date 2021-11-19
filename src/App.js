import logo from "./logo.svg";
import "./App.css";
import Square from "./components/Square";
import { useState, useEffect } from "react";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [boolNext, setBoolNext] = useState(true);

  const winnerCalculate = (board) => {
    let winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];
    console.log(" ===== ");
    for (let i = 0; i < winLines.length; i++) {
      // const element = array[i];
      let [a, b, c] = winLines[i];
      // console.log(a , "a");
      // console.log(b , "b");
      // console.log(c , 'c');
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        console.log("winner");
                  
        console.log(board[a]);
          return board[a];
      }
      // if (board) {
      //   console.log(board[a] , "board");
      //   // console.log(board[a]);
      // }
    }
    return null;
  };

  let winner = winnerCalculate(board);

  const handleClick = (i) => {
    // console.log(i, "Btn Index");
    let boardDup = [...board];

    if (boardDup[i] === null) {
      // console.log(boardDup);
      if (winner || boardDup[i]) {
        return false;
      } else {
        boardDup[i] = boolNext ? "X" : "O";
        setBoard(boardDup);
        setBoolNext(!boolNext);
      }
      // console.log(boardDup[i]);
    } else {
      return false;
    }
  };

  return (
    <div className="App">
      <div className="text_tic">
        <h1>TIC TAC TOE</h1>
      </div>
      <div className="main_tic">
        {board.map((item, i) => {
          return <Square value={item} onClick={() => handleClick(i)} />;
        })}
      </div>
      <div className="winner_text">{winner ? "Winner is : " + winner : ""}</div>
    </div>
  );
}

export default App;
