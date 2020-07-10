import React, { Component } from 'react';
import './workers.css';

class Workers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: '',
        surname: ''
      },
      workers: [
        {id:1, firstName:'Jan', surname: 'Kowalski'},
        {id:2, firstName:'Jan', surname: 'Kowalski'},
        {id:5, firstName:'Jan', surname: 'Kowalski'},
        ]
    }
  }

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const formData = this.state.formData;
    this.setState(prevstate => (
      {
        formData: {
          ...formData,
          [name]: value
        },
        workers: prevstate.workers
      }
    ));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);    
  }

  render() {
    return (
      <div className="workers-wrapper">
        <div className="workers-form">
          <form onSubmit={this.handleSubmit}>
            Imię
            <input type="text" name="firstName" defaultValue={this.state.formData.firstName} onChange={this.onChange} />
            Nazwisko
            <input type="text" name="surname" defaultValue={this.state.formData.surname} onChange={this.onChange} />
            <input type="submit" value="Wyślij" />
          </form>
        </div>
        <div className="workers">
          <span className="workers-top">Pracownicy</span>
          {this.state.workers.map(worker => 
            <>
              <span className="worker-left">{worker.firstName}</span>
              <span className="worker-right">{worker.surname}
              </span>
            </>)
          }
        </div>
      </div>

    )
  }
}

export default Workers;