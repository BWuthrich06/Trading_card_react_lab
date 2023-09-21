'use strict';

function Homepage() {
  return ( 
  <div>
    <h1>This is a great site for viewing trading cards.</h1>
    <a href="/cards">click here to view the trading cards!</a>
    <img src='static/img/balloonicorn.jpg'></img>

  </div>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
