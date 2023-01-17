import { ToastContainer, toast } from 'react-toastify';

export default function ToasterPage() {
  const notify = () => toast("Амжилттай хадгалагдлаа.!");
  return (
    <div>
      <button onClick={notify}>Хадгалах</button>
      <ToastContainer />
    </div>
  );
}
