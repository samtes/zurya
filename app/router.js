import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("index", { path: "/" });
  this.route("style", {});
  this.route("zurya", {});
  this.route("tilfi", {});
});

export default Router;
