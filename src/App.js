import Component from "./core/Component";
import State from "./core/State";

// components
import Greeting from "./components/Greeting";

export default class App extends Component {
	targetSelector;
	_state;

	constructor(target, props) {
		super(target, props);
		this.targetSelector = target;
		this._state = new State({});
		this.mount();
	}

	initChildren = () => {
		this.children = [new Greeting(this.targetSelector)];
	};

	template = () => ``;
}
