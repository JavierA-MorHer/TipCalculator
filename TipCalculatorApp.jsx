import React, { useState } from "react";

import iconDolar from './src/img/icon-dollar.svg';
import iconPerson from './src/img/icon-person.svg'

export const TipCalculatorApp = () => {

  const [bill, setBill] = useState();
  const [guest, setGuest] = useState();
  const [tip, setTip] = useState(0);
  const [custom, setCustom] = useState(0);
  const [choosen, setChoosen] = useState(null);


  function handleTip(e) {
    setTip(parseInt(e.target.innerText));
    agregarClase(e)
  }

  function agregarClase(e) {
    if (choosen == null) {
        setChoosen(e.target)
        addActive(e.target, true)
    }
    else if (choosen != e.target) {
        addActive(choosen, false)
        setChoosen(e.target)
        addActive(e.target, true)
    }
    else if (choosen == e.target) {
        setChoosen(null)
        addActive(e.target, false)
    }
    else {
        setChoosen(e.target)
        addActive(e.target, true)
    }
  }
  
  function addActive(element, bool) {
    if (bool) {
        element.classList.add('selected')
    }
    else {
        element.classList.remove('selected')
    }
  }

  function onInputChangeCustom(e) {
    setCustom(e.target.value);
    console.log(e.target.value)
  }

  function onInputChangeBill(e) {
    setBill(e.target.value);
  }

  function onInputChangeGuest(e) {
    setGuest(e.target.value);
  }

  function reset(){
    location.reload()
    
  }


  const resultado = parseInt( 
                    custom === 0 ?
                             (bill * (tip/100)) / guest :
                             (bill * (custom/100)) / guest 
                             );

  return (
    <div className="container">
      <div className="bill-container">
        <div className={`bill ${bill == 0 ? "error" : ""}`}>
          <div className="text">
            <h5 className="title">Bill</h5>
            <h5 className="title-error">Can't be zero</h5>
          </div>
          <div className="input">
            <input
              onChange={onInputChangeBill}
              className="input-bill"
              type="number"
              placeholder="0"
              value={bill}
            />
            <img
              className="icon"
              src={iconDolar}
              alt="icon dollar"
            />
          </div>
        </div>

        <div className="select-tip">
          <h5 className="title">Selecte Tip %</h5>
          <div className="button-tip">
            <button onClick={handleTip} className='btn'>
              5
            </button>
            <button onClick={handleTip} className='btn'>
              10
            </button>
            <button onClick={handleTip} className='btn'>
              15
            </button>
            <button onClick={handleTip} className='btn'>
              25
            </button>
            <button onClick={handleTip} className='btn'>
              50
            </button>
            <input onChange={onInputChangeCustom} type="number" placeholder="Custom" className="btn-custom" />
          </div>
        </div>

        <div className={`number-people ${guest == 0 ? "error" : ""}`}>
          <div className="text">
            <h5 className="title">Number of Persons</h5>
            <h5 className="title-error">Can't be zero</h5>
          </div>
          <div className="input">
            <input
              onChange={onInputChangeGuest}
              className="input-bill"
              type="number"
              placeholder="0"
              value={guest}
            />
            <img
              className="icon"
              src={iconPerson}
              alt="icon person"
            />
          </div>
        </div>
      </div>

      <div className="results-container">
        <div className="tip">
          <h5 className="tip-title">
            Tip Amount <br />
            <span className="subtitle">/ person</span>
          </h5>
          <h2 className="tip-result">
            ${isNaN(resultado) ? 0 : resultado.toFixed(2)}
          </h2>
        </div>

        <div className="tip">
          <h5 className="tip-title">
            Total <br />
            <span className="subtitle">/ person</span>
          </h5>
          <h2 className="tip-result">
            ${isNaN(resultado) ? 0 : (resultado / guest).toFixed(2)}
          </h2>
        </div>

        <button className="btn-reset" onClick={reset} >
          Reset
        </button>
      </div>
    </div>
  );
};
