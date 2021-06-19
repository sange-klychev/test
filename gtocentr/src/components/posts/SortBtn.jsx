import React from 'react'

function SortBtn({ sort, sortBy }) {

  // триггер true/false передаем в компонент выше
  const handleSort = () => {
    sort(!sortBy);
  }

  return (
    <button 
      onClick={handleSort}
      className="posts__btn"
      type="button"
    >
      {sortBy ? "По возрастанию" : "По убыванию"}
    </button>
  )
}

export default SortBtn
