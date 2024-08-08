export const mergeParts = (...objects: any[]) => {
	return {
		plugins: objects.reduce((acc, curr) => ({ ...acc, ...curr.plugins }), {}),
		rules: objects.reduce((acc, curr) => ({ ...acc, ...curr.rules }), {}),
	}
}
