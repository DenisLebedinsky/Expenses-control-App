import React, { useState } from 'react'

export default ({ addItem }) => {
  const [expenses, setExpenses] = useState(0)
  const [incomes, setIncomes] = useState(0)
  const [name, setName] = useState('')

  const id = Math.floor(Math.random() * (1000 - 1) + 1)

  const _addItem = () => {
    if (typeof addItem === 'function') {
      addItem({ id, name, expenses, incomes })
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <form
          onSubmit={_addItem}
          className="col-md-12 d-flex align-items-end mt-3 justify-content-center"
          data-testid='form_for_add'>
          <div className="form-group mr-1">
            <label >Item name</label>
            <input
              type="string"
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-group mr-1">
            <label >expenses</label>
            <input
              type="number"
              className="form-control"
              value={expenses}
              onChange={e => setExpenses(e.target.value)}
            />
          </div>
          <div className="form-group mr-1">
            <label >incomes</label>
            <input
              type="number"
              className="form-control"
              value={incomes}
              onChange={e => setIncomes(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">+</button>
          </div>
        </form >
      </div>
    </div>

  )
} 