var React = require("react");
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var MasterContainer = require("./components/master/masterContainer");
var PlayersContainer = require("./components/players/playersContainer");
var PlayerDetailsContainer = require("./components/playerDetails/PlayerDetailsContainer");

var routes = (
    <Route name="Trackr" path="/" handler={MasterContainer}>
        <DefaultRoute handler={PlayersContainer} />
        <Route name="players" path="players" handler={PlayersContainer} />
        <Route name="search" path="players/:search" handler={PlayersContainer} />
        <Route name="player" path="player/:id" handler={PlayerDetailsContainer} />
    </Route>
);


Router.run(routes, Handler => {
    React.render(<Handler /> ,document.getElementById("trackr"))
})
