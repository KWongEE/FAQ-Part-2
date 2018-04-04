import React from 'react';

const FAQForm = props => {
  return (
    <label>{props.label}
      <input
        name={props.name}
        type="text"
        value={props.value}
        onChange={props.handlerFunction}
      />
    </label>
  )
}

export default FAQForm;
