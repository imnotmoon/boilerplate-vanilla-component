import Component from "./core/Component";
import Model from "./core/Model";
import AppView from "./views/AppView";
import "./stylesheets/App.scss";

// components
import Greeting from "./components/Greeting";
import GreetingView from "./views/GreetingView";

export default class App extends Component {
	children: Array<Component> = [];

	constructor(target: string, props: any) {
		super(target, new Model({}), new AppView(target), props);
		this.addEvents();
		this.initChildren();
	}

	initChildren = () => {
		const $greeting = new Greeting(this.targetSelector, new Model({}), new GreetingView(".container"));
		this.children.push($greeting);
	};
}
