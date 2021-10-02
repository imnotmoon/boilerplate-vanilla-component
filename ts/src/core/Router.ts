class Router {
	public urls: any;

	constructor() {
		this.urls = {};
		window.onpopstate = () => {};
	}
	route = (path: string, itemId?: number) => {
		if (!Object.keys(this.urls).includes(path)) return;
		history.pushState({ page: path }, "", `/${path}`);
		const prop = itemId ? { itemId } : {};
		const newPage = new this.urls[path]("#App", prop);
		return newPage;
	};
}

const router = new Router();
export default router;
