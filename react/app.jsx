//component as a function that returns a react virtual dom element
//componenets in react start with a capital letter
//passing props in at the top gives it the value of title="My Scoreboard"
function Application(props){
  return (
    <div className="scoreboard">
      <div className="header">
        <h1>{props.title}</h1>
      </div>

      <div className="players">
        <div className="player">
          <div className="player-name">
            Annie Ann
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score"> 50 </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>
      </div>

      <div className="players">
        <div className="player">
          <div className="player-name">
            Billy Bob
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score"> 30 </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


ReactDOM.render(<Application title="My Scoreboard"/>, document.getElementById('container'));
//takes two arguments
//1st is a virtual dom element
//2nd is a real dom element where we want to place our virtual dom
