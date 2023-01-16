import { useState } from 'react';
export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSend] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await setMessage(text);
    setIsSending(false);
    setIsSend(true);
  }

  function setMessage(text) {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  return isSent ? (
    <h1>Thanks for feedback</h1>
  ) : (
    <div className="App">
      <h1>Day-43 - React Routers</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>Ta текстээ оруулна уу</p>
        <textarea
          value={text}
          disabled={isSending}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <br />
        <button>Send</button>
        {isSending && <p>Sending ....</p>}
      </form>
    </div>
  );
}
