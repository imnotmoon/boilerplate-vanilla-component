export default class Component {
	_target;
	_view;
	eventHandlers = [];

	constructor(target, props) {
		this._target = () => document.querySelector(target);
		this._props = props;
		this.mount();
	}

	template = () => "";
	addEvents() {}

	// mount
	componentDidMount() {
		this.addEvents();
	}
	mount() {
		this.render();
		this.componentDidMount();
	}

	// props, state update
	updateProps(props) {
		if (!this.shouldComponentUpdate(props)) return;
		this._props = props;
		this.render();
		this.componentDidUpdate();
	}

	updateState(state) {
		this._model.setState(state);
		this.render();
		this.componentDidUpdate();
	}

	shouldComponentUpdate(props) {
		if (Object.keys(this._props).length !== Object.keys(props).length) return false;
		for (key in this._props) {
			if (props[key] !== this._props[key]) return true;
		}
		return false;
	}
	render() {
		this._target.innerHTML = this.template();
	}
	componentDidUpdate() {}

	// unmount
	componentWillUnmount() {}
}
