import { useState } from 'react';
import Box from './component/Box'
import './App.css';

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3, 4의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패 결과에 따라 테두리 색이 바뀐다 (이기면 초록, 지면 빨강, 비기면 검정)

const choice = {
  scissors : {
    name: 'scissors',
    img : 'https://www.ikea.com/kr/en/images/products/manoega-scissors-stainless-steel-black__1215197_pe911911_s5.jpg?f=s',
  },
  rock : {
    name: 'rock',
    img : 'https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg',
  },
  paper : {
    name: 'paper',
    img : 'https://images.prismic.io/xometry-marketing/d4407d91-5c2d-4704-b090-d0820c8e802e_paper-stack.jpg?auto=compress%2Cformat&rect=165%2C0%2C669%2C669&w=486&h=486&fit=max',
  },
}

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');

  const play = ( userChoice ) => {
    setUserSelect(choice[userChoice])

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement(choice[userChoice].name, computerChoice.name));
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomNumber = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomNumber];

    return choice[final];
  }
  
  const judgement = (user, computer) => {
    if(user === computer){ return 'tie' }
    else if(user === 'rock') return computer === 'scissors' ? 'win' : 'lose'
    else if(user === 'scissors') return computer === 'paper' ? 'win' : 'lose'
    else if(user === 'paper') return computer === 'rock' ? 'win' : 'lose'
  }

  return (
    <div className='App'>
      <div className="box-container">
        <Box title={'You'} item={userSelect} result={result} />
        <Box title={'Computer'} item={computerSelect} result={result} />
      </div>
      <div className='btn-container'>
        <button onClick={() => {play('scissors')}} id='scissors'>가위</button>
        <button onClick={() => {play('rock')}} id='rock'>바위</button>
        <button onClick={() => {play('paper')}} id='paper'>보</button>
      </div>
    </div>
  );
}

export default App;
