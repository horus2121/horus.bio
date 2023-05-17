export function handleError({ event, error }) {
	//  @ts-expect-error. - bypass unknown error
	console.error(error.stack);

	return {
		message: 'everything is fine.'
	};
}
