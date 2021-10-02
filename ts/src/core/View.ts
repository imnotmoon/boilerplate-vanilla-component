export default class View {
	private target: () => HTMLElement | null;

	constructor(target: string) {
		this.target = () => document.querySelector(target);
	}

	template: (state: any, props: object | undefined) => string = (state) => ``;

	render: (state: any, props?: object) => void = (state, props) => {
		this.target()!.insertAdjacentHTML("beforeend", this.template(state, props));
	};
}
