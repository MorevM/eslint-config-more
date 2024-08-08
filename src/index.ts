import configurationJavascript from '~configurations/javascript';
import configurationNode from '~configurations/node';

type Configuration = 'javascript' | 'node';

type ConfigurationOptions<T extends Configuration> = T extends 'javascript'
	? Parameters<typeof configurationJavascript>[0]
	: T extends 'node'
		? Parameters<typeof configurationNode>[0]
		: {};

export const defineConfiguration = <T extends Configuration>(name: T, options: ConfigurationOptions<T>) => {
	switch (name) {
		case 'javascript': return configurationJavascript(options);
		case 'node': return configurationNode(options);
		default: return {};
	}
}
