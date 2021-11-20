import { useState } from "react";

type BananaProps = {

  children?: string

};


export function Button(props: BananaProps) {

  const [counter, setCounter] = useState(0)

  function increment() {

    setCounter(counter + 1);

  }

  return (

    <button onClick={increment}>

      {props.children /*|| 'Default'*/}

      {counter}

    </button>

  )

}