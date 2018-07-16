var PLAYERS = [
  {
    name: 'John Doe',
    score: 10,
    id: 1
  },
  {
    name: 'Jane Doe',
    score: 11,
    id: 2
  },
  {
    name: 'Jack Doe',
    score: 20,
    id: 3
  }
];

function Header(props){
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired
  };

function Counter(props){
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

Counter.propTypes = {
  score: React.PropTypes.number.isRequired
}

function Player(props){
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score}/>
      </div>
    </div>
  )
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
}

var Application = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired
    })).isRequired
  },

  getDefaultProps: function(){
    return {
       title: "Scoreboard"
     }
  },

  getInitialState: function(){
    return {
      players: this.props.initialPlayers,
    };
  },
  render: function(props){
    return (
      <div className="scoreboard">
        <Header title={this.props.title}/>
        <div className="players">
          {this.state.players.map(player => <Player name={player.name} score={player.score} key={player.id}/>
          )}
        </div>
      </div>
    )
  }
})


//helps keep track of the prop types.



ReactDOM.render(<Application initialPlayers={PLAYERS}/>, document.getElementById('container'));
//takes two arguments
//1st is a virtual dom element
//2nd is a real dom element where we want to place our virtual dom
