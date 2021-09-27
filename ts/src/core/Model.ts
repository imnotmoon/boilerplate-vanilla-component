export default class Model {
	private state: any;

	constructor(initialState: object) {
		this.state = initialState;
	}

	public get: (key: string) => any | undefined = (key) => {
		return this.state[key];
	};

	public setState: (newState: object) => void = (newState) => {
		this.state = { ...this.state, ...newState };
	};

	public getState: () => any = () => this.state;
}
