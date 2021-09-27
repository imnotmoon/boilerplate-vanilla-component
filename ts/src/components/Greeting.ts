import Component from "../core/Component";
import Model from "../core/Model";
import View from "../core/View";

export default class Greeting extends Component {
	constructor(target: string, model: Model, view: View, props?: any) {
		super(target, model, view, props);
		this.addEvents();
		this.initChildren();
		console.log("greeting init");
	}
}
