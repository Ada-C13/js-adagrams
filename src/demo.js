import Model from 'demo/model';
import View from 'demo/view';
import Controller from 'demo/controller';

// Initialize the controller I guess
const game = new Controller(Model, View);
game.start();

// making the demo game work is optional-- passing the unit tests is mandatory