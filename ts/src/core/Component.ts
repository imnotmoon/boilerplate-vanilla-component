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

	constructor(target: string, model: Model, view: View, props?: any) {
		this.target = () => document.querySelector(target);
		this.targetSelector = target;
		this.model = model;
		this.view = view;
		if (props) this.props = props;

		this.render();
	}

	initChildren: () => void = () => {
		console.log(this);
	};

	addEvents: () => void = () => {};

	render: () => void = () => {
		this.view!.render(this.model!.getState());
	};
}
