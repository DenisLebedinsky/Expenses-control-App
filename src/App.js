import React, { useState } from 'react';
import Chart from "./components/Chart";
import Form from './components/Form';
import List from './components/List';

const data = [
  {
    id: 1, name: 'January', expenses: 4000, incomes: 2400, amt: 2400,
  },
  {
    id: 2, name: 'February', expenses: 2222, incomes: 1398, amt: 2210,
  },
  {
    id: 3, name: 'March', expenses: 2000, incomes: 9800, amt: 2290,
  },
  {
    id: 4, name: 'April', expenses: 2780, incomes: 3908, amt: 2000,
  },
  {
    id: 5, name: 'June', expenses: 1890, incomes: 4800, amt: 2181,
  },
  {
    id: 6, name: 'July', expenses: 2390, incomes: 3800, amt: 2500,
  },
  {
    id: 7, name: 'August', expenses: 3490, incomes: 4300, amt: 2100,
  },
];



function App() {

  const [items, setItems] = useState(data)

  const addItem = (item) => {
    const arr = items.slice();
    arr.push(item)
    setItems(arr)
  }

  const editItem = (id, type, value) => {
    const editArr = items.slice()
    editArr.forEach(el => {
      if (el.id === id) {
        el[type] = value
      }
    })
    setItems(editArr)
  }

  const deleteItem = (id) => {
    const newArr = items.filter(el => el.id !== id)
    setItems(newArr)
  }

  return (
    <div className="Container">
      <h1 className="text-center">Flow chart</h1>
      <Chart data={items} />
      <Form addItem={addItem} />

      <List
        items={items}
        edit={editItem}
        del={deleteItem}
      />
    </div>
  );
}

export default App;
