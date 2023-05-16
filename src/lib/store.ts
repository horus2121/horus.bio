import { writable } from 'svelte/store';

const createSidebar = () => {
	const { subscribe, set } = writable(false);

	const openSidebar = () => set(true);

	const closeSidebar = () => set(false);

	return {
		subscribe,
		openSidebar,
		closeSidebar
	};
};

export const sidebar = createSidebar();
