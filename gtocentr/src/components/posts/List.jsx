import React from 'react'
import axios from 'axios'
import { Element, SortBtn } from './index'

function List() {

  // Создаем состояния
  const [data, setData] = React.useState([{ 
      is_answered: false, link: "", 
      owner: {display_name: "", link: "", profile_image: "", reputation: 0}, 
      title: "" 
    }]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [sortState, setSortState] = React.useState(false);
  const [currentData, setCurrentData] = React.useState([]);

  // Триггер true/false полученный с дочернего компонента кнопки
  const handleSort = (boolean) => {

    // Меняем состояние триггера передаваемый в дочерний компонент кнопка
    setSortState(boolean);

    // Сортируем в соответствии полученного булевого значения 
    if(boolean) {
      setCurrentData(currentData.sort(function(a, b) {return a.creation_date - b.creation_date}));
    } else {
      setCurrentData(currentData.sort(function(a, b) {return -a.creation_date + b.creation_date}));
    }
  }

  // Получаем данные по API
  React.useEffect(() => {
    try{
      axios.get('https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow')
      .then(({ data }) => {
        setData(data.items);
        setIsLoaded(true);
      })
    } catch (err) {
      alert("Произошла ошибка, повторите позже");
    }
  }, [])

  // Делаем перебор полученных данных по определенным условиям
  React.useEffect(() => {
    let arr = [];

    // Перебираем и записываем те данные что соответствуют условиям
    isLoaded && data.map(obj => (
      obj.is_answered === true && obj.owner.reputation > 50 ? arr.push(obj) : null
    ))

    // Записываем в состояние и сортируем по убыванию даты 
    setCurrentData(arr.sort(function(a, b) {return -a.creation_date + b.creation_date}));

  }, [isLoaded])

  return (
    <>
      {
        isLoaded
          ? <div className="posts">
              <SortBtn 
                sort={handleSort}
                sortBy={sortState}
              />
              <div className="posts__list">
                {isLoaded &&
                  currentData.map((obj, i) => (
                    <Element
                      key={i} 
                      {...obj} 
                    />
                  ))}
              </div>
            </div>
          : <div className="load">
              <p>Loading...</p>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
      }
    </>
  )
}

export default List
