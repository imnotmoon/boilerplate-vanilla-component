import View from "../core/View";

export default class AppView extends View {
	constructor(target: string) {
		super(target);
	}

	template = () => `
        <div class="header"></div>
        <div class="container"></div>
    `;
}
