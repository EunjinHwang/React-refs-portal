import { useState } from "react";

export default function Player() {
  const [username, setUsername] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  function handleChange(event){
    setSubmitted(false);
    setUsername(event.target.value)
  }

  function handleButtonClick(){
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? username : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={username}/>
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
    </section>
  );
}
