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
        {id:5, firstName:'Jan', surname: 'Kowalski'}
      ]
    }
  }

  onChange = (event) => {
    console.log(this.state)
    const name = event.target.name;
    const value = event.target.value;
    const formData = this.state.formData;
    this.setState(prevstate => (
      {
        workers: [...prevstate.workers],
        formData: {
          ...formData,
          [name]: value
        },
      }
    ));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newWorker = {...this.state.formData}

    if (this.state.formData.firstName === "" && this.state.formData.surname === "") {
      alert('pola nie mogą być puste')
    } else {
      this.setState(prevstate => {
        return (
          {
            formData: {
              firstName: '',
              surname: ''
            },
            workers: [
              ...prevstate.workers,
              {
                id: prevstate.workers[prevstate.workers.length-1].id + 1,
                firstName: newWorker.firstName,
                surname: newWorker.surname
              }
            ],
          }
        )
      });
    }



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
            <input type="submit" value="Wyślij" disabled={this.state.workers.length >= 5} />
          </form>
        </div>
        <div className="workers">
          <span className="workers-top">Pracownicy</span>
            {this.state.workers.map(worker => {
              console.log(worker);
              return  <>
              <span className="worker-left">{worker.firstName}</span>
              <span className="worker-right">{worker.surname}
              </span>
            </>
            }
           )
          }
        </div>
      </div>

    )
  }
}

export default Workers;