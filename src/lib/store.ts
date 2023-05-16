import { writable } from 'svelte/store';

const createLeftSidebar = () => {
	const { subscribe, set } = writable(false);

	const openSidebar = () => set(true);

	const closeSidebar = () => set(false);

	return {
		subscribe,
		openSidebar,
		closeSidebar
	};
};

const createRightSidebar = () => {
	const { subscribe, set } = writable(false);

	const openSidebar = () => set(true);

	const closeSidebar = () => set(false);

	return {
		subscribe,
		openSidebar,
		closeSidebar
	};
};

export const leftSidebar = createLeftSidebar();
export const rightSidebar = createRightSidebar();
