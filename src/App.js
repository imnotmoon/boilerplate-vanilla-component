import Component from "./core/Component";
import State from "./core/State";

export default class App extends Component {
	_state;

	constructor(target, props) {
		super(target, props);
		this._state = new State({});
	}
}
