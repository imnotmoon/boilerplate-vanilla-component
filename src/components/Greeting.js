import Component from "../core/Component";
import State from "../core/State";

export default class Greeting extends Component {
	_state;

	constructor(target, props) {
		super(target, props);
		this._state = new State({});
		this.mount();
	}

	template = () => `
        <div>Greeting</div>
    `;
}
