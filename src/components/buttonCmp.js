import React, { useState } from 'react';
import { Button } from '@mui/material';

function ButtonCmp() {
  const [value, setValue] = useState(0);
    function increase() {
      setValue(value + 1);
    }

    function reset() {
      setValue(0);
    }

    if(value > 14) {
      return(
        <div>
          <p>Nooooo you can't go over 15! Go back or go home</p>
          <Button onClick={reset}>Resetar</Button>
        </div>
      )
    } else {
      return(
        <div>
        <Button onClick={increase}>Hello World mas como botão. Você apertou {value}</Button>
          </div>
        )
    }



}

export default ButtonCmp;
