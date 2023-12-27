import React from 'react'

const SearchingBar = ({text, onChange}) => {
  return (
    <div>
        <input type="text" onChange={onChange} value={text}/>
    </div>
  )
}

export default SearchingBar