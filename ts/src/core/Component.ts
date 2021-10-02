import View from "./View";
import Model from "./Model";

export default class Component {
	protected target;
	protected targetSelector;
	protected model: Model | undefined;
	protected view: View | undefined;
	protected props: any;
	protected eventHandlers = [];
	protected children: Array<Component> = [];

	constructor(target: string, props?: any) {
		this.target = () => document.querySelector(target);
		this.targetSelector = target;
		if (props) this.props = props;
	}

	initChildren: () => void = () => {};

	setState = (newState: object) => {
		this.model?.setState(newState);
		this.render();
	};

	addEvents: () => void = () => {};

	render() {
		this.view!.render(this.model!.getState(), this.props);
	}
}
