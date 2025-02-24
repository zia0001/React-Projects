function AddTodo() {
  return (
    <div className="container">
    <div className="row custom-row ">
      <div class="col-6">
        <input typeof="text" placeholder="Enter Todo here"></input>
      </div>
      <div className="col-4">
        <input type="date"></input>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success kg-button">
          Add
        </button>
      </div>
    </div>
    </div>
  );
}
export default AddTodo;
