import React, { Component } from "react";


const Form = (props) => {

    
    return (
      <>  
      <form onSubmit={props.submit}>
        <label>
          Miasto 
          <input
            type="text"
            value={props.value}
            onChange={props.change}
          />
        </label>
        <button>Wyszukaj miasto</button>
      </form>
      </>
    );
  }

export default Form;
