import Component from "./core/Component";
import State from "./core/State";

export default class App extends Component {
	target = () => document.querySelector("#App");
	_state;

	constructor(props) {
		super(this.target(), props);
		this._state = new State({});
	}
}
