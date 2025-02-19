function Random() {
  let randomNum = Math.random() * 10;

  return( 
  <p style={{'background-color':'#C0C0C0'}}>
    random number is {Math.round(randomNum) }
  </p>)
}
export default Random;