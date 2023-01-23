import { useState } from 'react';
import Anime from './components/Anime';
import Button from './components/Button';
import FindEvenOdd from './components/Ex-Find-Even-Odd';
import Exercises from './components/Exercises';
import Input from './components/Input';
import Pascal from './components/Pascal';
import PascalTriangle from './components/ChatGPTPascal';
import TopAnime from './components/TopAnime';

export default function App() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <PascalTriangle />
      {/* <Exercises />
      <FindEvenOdd />
      <PascalTriangle /> */}


      {/* <Input
        label="First input"
        value={text}
        onChange={handleChange}
      />
      <Input
        label="Second input"
        value={text}
        onChange={handleChange}
      /> */}
      {/* <Anime />
      <Button />
      <TopAnime /> */}

    </div>
  );
}

