import React, { useState, useEffect } from "react";
import './App.css'
import axios from "axios";


function App() {

    const [data,setdata] = useState([]);
    const [quote,setquote] = useState(0);
    const [enable,setenable] = useState(false);

    useEffect(()=> {
        if (quote == 5 || quote == 10) {
            axios.get('https://api.quotable.io/quotes/random').then((response) => {
                console.log(response.data);
                setdata(response.data[0].content);
            });
        }
        else
        {
            setdata('');
        }
    } , [quote])

    function handleIncrement()
    {
        setquote((quote<10) ? quote+1 : quote)
        setenable(true);
    }

    function handleDecrement()
    {
        setquote((quote>0) ? quote-1 : quote)
    }
    
  return (
    <div className="counter-widget">
        
        <div className="count">{quote}</div>

        <button onClick={handleIncrement} className="increment">Increment</button>
      
        <button onClick={handleDecrement} disabled={!enable} className="decrement">Decrement</button>

        <div className="quote">Random Quote: {data}</div>

    </div>
  );
}

export default App;