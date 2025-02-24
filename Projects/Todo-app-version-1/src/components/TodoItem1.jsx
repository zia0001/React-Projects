function TodoItem1() {

  let todoName = 'Buy Shoes';
  let todoDate= '5/11/2025';
  return (
    <div className="container">
      <div className="row  custom-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger  kg-button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
