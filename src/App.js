import React, { Component } from 'react';
import './App.css';
import MyCalendar from './calendar';




class App extends Component {
  state={
    userInput:'',
    list:[],
    date: new Date(), 
  }
  userChangInput = (event)=>{ // binding by default 
    const newInput = event.target.value
    
    this.setState({
      userInput: newInput
    })

  }
  addToList = (date)=>{

    let newItem = this.state.userInput;
    // console.log(date);
    const tmpDate = new Date(this.state.date);
    const formatedDate = tmpDate.getDate() + "/" +tmpDate.getMonth()+"/"+ tmpDate.getFullYear();
    newItem += "  -  " + formatedDate;
    let ldate = this.state.date;
    const listArray = this.state.list.slice(0);
    listArray.push( newItem);
    this.setState({
      list:listArray,
      date: new Date(),
      userInput: '',

    })
    

  }
  clearList = () => {
 const deleteItem = this.state.list;
    const listArray = this.state.list.slice(0);
    listArray.splice(deleteItem);
    this.setState({
      list:listArray
    })
  }
  doneItem =(event) =>{
    
    if (event.target.className === ''){
      event.target.className = 'done'
    }
     else{
      event.target.className = ''
    }
  }
   addDateToList = (ldate) => { 
   this.setState({ date: ldate })
   console.log(ldate)


   
    }

  render() {
    const userList =  this.state.list.map((val) => {
      return < div onClick={this.doneItem} > { val }</ div >;

    })

   
  return(
    
    <div className='container mt-5'>
    <div>
      <h1> Todos</h1>
    </div>
        <div>
          {userList}
        </div>
        
      <form onSubmit={(event)=>{
        // to press enter when you like to add new list
        event.preventDefault()
        this.addToList();
      }
        }>
    <MyCalendar addDateToList={this.addDateToList}/>
      <div className="input-group mt-5">
        <input type="text" value={this.state.userInput} onChange={this.userChangInput} className="form-control" placeholder="what do you like to do" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" onClick={this.addToList}>Add</button>
          <div className="input-group-append">
          </div>
          </div>
      </form>

        
      <button type="button" onClick={this.clearList} className="btn btn-outline-secondary mt-5">clear</button>

        </div>

    ); 
      
    }
}

export default App;
