function App() {
  return (
    <center class="todo-container">
      TODO App
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input typeof="text" placeholder="Enter Todo here"></input>
          </div>
          <div class="col-4">
            <input type="date"></input>
          </div>
          <div class="col-2"><button type="button" class="btn btn-success">Add</button></div>

        </div>
      </div>
    </center>
  );
}

export default App;
