import React, { useState } from "react";
import './count.css'

function Count() {

  let [count, setCount] = useState(0);

  function increment () {
    setCount(count + 1)
  }

  function decrement () {
    setCount(count - 1)
  }

  function reset () {
    setCount(count = 0)
  }

  return (
    <div className="wrapper">
        <header className="wrapper_header"><h1 className="wrapper_header_title">Hello counter</h1></header>
        <section className="wrapper_mainSection">
            <button className="wrapper_mainSection_up" onClick={increment}>Up</button>
            <button className="wrapper_mainSection_down" onClick={decrement}>Down</button>
            <button className="wrapper_mainSection_reset" onClick={reset}>Reset</button>
            <h3>{count}</h3>
        </section>
    </div>
  );
}

export default Count;
