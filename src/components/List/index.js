import React from 'react'
import { DebounceInput } from "react-debounce-input";

export default ({ items, edit, del }) => {

  const editItem = (id, type, value) => {
	
    if (typeof edit === 'function') {
      edit(id, type, value)
    }
  }

  const deleteItem = (id) => {
    if (typeof del === 'function') {
      del(id)
    }
  }

  return (
    <div className="container">
      <div className="row">
        <form className="col-md-12" data-testid="list_of_items">
          {items &&
            items.map(item => (
              <div
                className=" d-flex align-items-end justify-content-center"
                key={item.id}
                data-testid={item.id}
              >
                <div className="form-group mr-1">
                  <DebounceInput
                    type="string"
                    className="form-control"
                    value={item.name}
                    onChange={e => editItem(item.id, "name", e.target.value)}
                    debounceTimeout={3000}
                  />
                </div>
                <div className="form-group mr-1">
                  <DebounceInput
                    type="number"
                    className="form-control"
                    value={item.expenses}
                    onChange={e =>
                      editItem(item.id, "expenses", e.target.value)
                    }
                    debounceTimeout={3000}
                  />
                </div>
                <div className="form-group mr-1">
                  <DebounceInput
                    type="number"
                    className="form-control"
                    value={item.incomes}
                    onChange={e =>
                      editItem(item.id, "incomes", e.target.value)
                    }
                    debounceTimeout={3000}
                  />
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteItem(item.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
        </form>
      </div>
    </div>
  );
}