function TodoItem2(){
  let todoName = 'Drawing';
  let todoDate= '5/11/2025';
    return(
    <div>
       <div className="container">
      <div className="row custom-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger   kg-button">Delete</button>
      </div>
    </div>
      </div>
      </div>
      ) 

}
export default TodoItem2;