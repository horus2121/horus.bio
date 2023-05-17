import { writable } from 'svelte/store';

const createSidebarStore = () => {
	const { subscribe, set } = writable(false);

	const openSidebar = () => set(true);

	const closeSidebar = () => set(false);

	return {
		subscribe,
		openSidebar,
		closeSidebar
	};
};

export const sidebarStore = createSidebarStore();
