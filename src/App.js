import React, { useState } from 'react';
import './style.css';
import Button from './components/button';
import Input from './components/input';

export default function App() {
  const [value, setValue] = useState('');

  const clear = () => {
    setValue('');
  };

  const foredit = (e) => {
    setValue(e.target.value);
  };
  const cut = () => {
    setValue(value.slice(0, -1));
  };

  const Operations = (e) => {
    setValue(value + e);
  };
  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch (err) {
      setValue('Error !!!');
    }
  };

  const arr = [
    { classname: 'clr back', data: 'clear', func: clear },

    { classname: ' back', data: 'c', func: cut },
    { classname: ' back', data: '/', func: Operations },
    { classname: '', data: '7', func: Operations },
    { classname: '', data: '8', func: Operations },
    { classname: '', data: '9', func: Operations },
    { classname: 'back', data: '*', func: Operations },
    { classname: '', data: '4', func: Operations },
    { classname: '', data: '5', func: Operations },
    { classname: '', data: '6', func: Operations },
    { classname: 'back', data: '-', func: Operations },
    { classname: '', data: '1', func: Operations },
    { classname: '', data: '2', func: Operations },
    { classname: '', data: '3', func: Operations },
    { classname: 'back', data: '+', func: Operations },
    { classname: 'back', data: '%', func: Operations },
    { classname: '', data: '0', func: Operations },
    { classname: 'eql back', data: '=', func: calculate },
  ];

  return (
    <div>
      <div className="box">
        <Input value={value} onChange={foredit} />
        <div className="keys">
          {/* <Button classname="clr back" data="clear" func={clear} />
          <Button classname="back" data="c" func={cut} />
          <Button classname="back" data="/" func={Operations} />
          <Button data="7" func={Operations} />
          <Button data="8" func={Operations} />
          <Button data="9" func={Operations} />
          <Button classname="back" data="*" func={Operations} />
          <Button data="4" func={Operations} />
          <Button data="5" func={Operations} />
          <Button data="6" func={Operations} />
          <Button classname="back" data="-" func={Operations} />
          <Button data="1" func={Operations} />
          <Button data="2" func={Operations} />
          <Button data="3" func={Operations} />
          <Button classname="back" data="+" func={Operations} />
          <Button classname="back" data="%" func={Operations} />
          <Button data="0" func={Operations} />
          <Button classname="eql back" data="=" func={calculate} /> */}

          {arr.map((presentData, index) => (
            <Button key={index} dataa={presentData} />
          ))}
        </div>
      </div>
    </div>
  );
}
