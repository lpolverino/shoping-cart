import React from 'react'
import styles from "./searchingBar.module.css"

const SearchingBar = ({text, onChange}) => {
  return (
    <div className={styles.searchBar}>
        <input className={styles.filter} type="text" onChange={onChange} value={text}/>
    </div>
  )
}

export default SearchingBar