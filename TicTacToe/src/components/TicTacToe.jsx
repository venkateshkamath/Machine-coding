import React, { useCallback, useState } from "react";
import "./tictactoe.css";
import Child from "./Child";
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));

  const [move, setMove] = useState("X");

  const click = (index) => {
    let square = [...board];
    if (square[index] !== "") return;
    if (move == "O") {
      setMove("X");
    } else {
      setMove("O");
    }
    square[index] = move;
    setBoard(square);
    if (checkWin(square)) {
      alert("We have a winner");
      square.fill("");
      setBoard(square);
    }
    if (checkDraw(square)) {
      alert("DRAW");
      square.fill("");
      setBoard(square);
    }
  };
  function checkDraw(board) {
    let count = 0;
    board.forEach((ele) => {
      if (ele != "") count++;
    });

    if (count > 8) {
      return true;
    } else {
      return false;
    }
  }
  function checkWin(board) {
    const conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    let flag = false;
    conditions.forEach((ele) => {
      console.log(ele);
      if (
        board[ele[0]] !== "" &&
        board[ele[1]] !== "" &&
        board[ele[2]] !== ""
      ) {
        if (
          board[ele[0]] === board[ele[1]] &&
          board[ele[1]] === board[ele[2]]
        ) {
          flag = true;
        }
      }
    });
    return flag;
  }

  const dummy = useCallback(() => {
    console.log("dummy");
  }, []);
  return (
    <>
      <Child dummy={dummy} />
      <div className="text-center">
        <h1>TicTacToe</h1>
        <p>{move}'s turn</p>
      </div>

      <table>
        <tbody>
          <tr>
            <td onClick={() => click(0)}>{board[0]}</td>
            <td onClick={() => click(1)}>{board[1]}</td>
            <td onClick={() => click(2)}>{board[2]}</td>
          </tr>
          <tr>
            <td onClick={() => click(3)}>{board[3]}</td>
            <td onClick={() => click(4)}>{board[4]}</td>
            <td onClick={() => click(5)}>{board[5]}</td>
          </tr>
          <tr>
            <td onClick={() => click(6)}>{board[6]}</td>
            <td onClick={() => click(7)}>{board[7]}</td>
            <td onClick={() => click(8)}>{board[8]}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TicTacToe;
