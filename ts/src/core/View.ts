export default class View {
	private target: () => HTMLElement | null;

	constructor(target: string) {
		this.target = () => document.querySelector(target);
	}

	template: (state: any) => string = (state) => ``;

	render: (state: any) => void = (state) => {
		this.target()!.innerHTML = this.template(state);
	};
}
