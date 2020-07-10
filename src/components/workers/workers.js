import React, { Component } from 'react';
import './workers.css';

class Workers extends Component {
  constructor(props) {
    super(props);
    this.state = {workers: [
      {id:1, name:'Jan', surname: 'Kowalski'},
      {id:2, name:'Jan', surname: 'Kowalski'},
      {id:3, name:'Jan', surname: 'Kowalski'},
      {id:4, name:'Jan', surname: 'Kowalski'},
      {id:5, name:'Jan', surname: 'Kowalski'},
      ]
    }
  }

  render() {
    return (
      <div className="workers">
        <span className="workers-top">Pracownicy</span>
        {this.state.workers.map(worker => 
          <>
            <span className="worker-left">{worker.name}</span>
            <span className="worker-right">{worker.surname}
            </span>
          </>)
        }
      </div>
    )
  }
}

export default Workers;