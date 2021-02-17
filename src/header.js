import React from 'react';

const Header = (props) => {
  return(
    <div className='card-header'>
      <h1 className='card-header-title header'>
        You have {props.numberTodos} Todos 📝
      </h1>
    </div>
  )
}

export default Header;