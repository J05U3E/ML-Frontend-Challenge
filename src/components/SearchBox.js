const React = require('react');
const { useState } = React;


function SearchBox() {
  const [search, setSearch] = useState([]);
  function onKeyUp(e){
    setSearch(e.target.value);
    if (e.keyCode === 13 && search != ""){  
      window.location.href = `/results?search=${search}`
    }
  }
  function onClick(){
    if(search != ""){ 
      window.location.href = `/results?search=${search}`
    }
  }
  return(
    <div className='header'>
      <div className='header__width'>
        <div className='Logo-contenedor'>
          <img
            src="/static/images/logoML.png"
            className='LogoML' />
        </div>
        <div className='search-window'>
          <input
            id='input-search' 
            className='input-text'
            type="text"
            onKeyUp= {onKeyUp}
            placeholder="  Nunca dejes de buscar" />
        </div>
        <button 
          type='submit' 
          className='search-button' 
          onClick={onClick}
        >
        <img
          src="/static/images/ic_Search.png"
          className='search-icon' />
        </button>
      </div>
    </div>
  );
};
module.exports = SearchBox;