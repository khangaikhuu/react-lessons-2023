import { useState } from 'react';
import Anime from './components/Anime';
import Button from './components/Button';
import Input from './components/Input';
import TopAnime from './components/TopAnime';

export default function App() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <Input
        label="First input"
        value={text}
        onChange={handleChange}
      />
      <Input
        label="Second input"
        value={text}
        onChange={handleChange}
      />
      <Anime />
      <Button />
      <TopAnime />
    </div>
  );
}

