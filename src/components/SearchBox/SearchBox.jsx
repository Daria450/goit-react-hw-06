import React from 'react'
import s from './SearchBox.module.css'

const SearchBox = ({ value, onFilter }) => {
    return (
        <>
            <label htmlFor="search" className={s.label}>Find contacts by name <input type="text" id='search' value={value}
                onChange={(e) => onFilter(e.target.value)} /></label>

        </>
    )
}

export default SearchBox