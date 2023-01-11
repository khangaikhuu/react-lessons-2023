import { useState } from 'react';
import userList from '../data/data';
 
export default function User() {
  // let index = 0;
  const [index, setIndex] = useState(0)
  // memo variable-iig state-eer zarlana uu. Ehnii utga ""
  const [memo, setMemo] = useState(userList[index].name)

  let user = userList[index];
  return (
    <div>
      <button onClick={()=>{
        // index = index + 1
        setMemo(userList[index+1].name)
        setIndex(index + 1)
      }}>Next</button>
      <p>{user.name}</p>
      <input value={memo}/>
    </div>
  );
}