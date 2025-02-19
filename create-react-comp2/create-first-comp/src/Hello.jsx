function Hello() {
  let website= 'Speedious';
  let developer = () => {
    return 'ziauddin';
  };

  return <h2>
    Hello! Welcome to  { website } developed by { developer() }
  </h2>
}

export default Hello;