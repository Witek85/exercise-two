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
      error: "",
      hover: null,
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
        error: '',
        workers: [...prevstate.workers],
        formData: {
          ...formData,
          [name]: value
        },
      }
    ));
  }

  onDelete = (id) => {
    this.setState(prevstate => (
      {
        ...prevstate,
        workers: prevstate.workers.filter(worker => worker.id !== id),
      }
    ));
  }

  onHover = (id) => {
    this.setState(prevstate => (
      {
        ...prevstate,
        hover: id
      }
    ));
  }

  
  onHoverEnd = () => {
    this.setState(prevstate => (
      {
        ...prevstate,
        hover: null
      }
    ));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newWorker = {...this.state.formData}
    const nextId = this.state.workers.length > 0 ? this.state.workers[this.state.workers.length-1].id + 1 : 0

    if (this.state.formData.firstName === "" && this.state.formData.surname === "") {
      this.setState(prevstate => ({
          ...prevstate,
          error: "Pola nie mogą być puste"  
        })      
      )
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
                id: nextId,
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
            <input type="text" name="firstName" value={this.state.formData.firstName} onChange={this.onChange} />
            Nazwisko
            <input type="text" name="surname" value={this.state.formData.surname} onChange={this.onChange} />
            <input type="submit" value="Wyślij" disabled={this.state.workers.length >= 5} />
          </form>
          {this.state.error && <p>{this.state.error}</p>}
        </div>
        <div className="workers">
          <span className="workers-top">Pracownicy</span>
            {this.state.workers.map(worker => 
            <>
              <span className={worker.id === this.state.hover ? 'worker-left hover' : 'worker-left'}>{worker.firstName}</span>
              <span className={worker.id === this.state.hover ? 'worker-right hover' : 'worker-right'}>{worker.surname}
              <button type="button" onMouseOver={() => this.onHover(worker.id)} onMouseOut={this.onHoverEnd}  onClick={() => this.onDelete(worker.id)}>delete</button> 
              </span>
            </>
           )
          }
        </div>
      </div>

    )
  }
}

export default Workers;