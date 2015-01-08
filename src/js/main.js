var React = require("react");
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;

var MasterContainer = require("./components/master/masterContainer");
var PlayersContainer = require("./components/players/playersContainer");
var PlayerDetailsContainer = require("./components/playerDetails/PlayerDetailsContainer");

React.render((
    <Routes>
        <Route name="app" path="/" handler={MasterContainer}>
            <DefaultRoute handler={PlayersContainer} />
            <Route name="players" path="/players" handler={PlayersContainer}></Route>
            <Route name="player" path="player/:id" handler={PlayerDetailsContainer}></Route>
        </Route>
    </Routes>
), document.getElementById("trackr"));
