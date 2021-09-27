import View from "../core/View";

export default class GreetingView extends View {
	constructor(target: string) {
		super(target);
	}

	template = () => `
        <div style="color: white;">Hello World!</div>
    `;
}
