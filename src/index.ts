import configurationJavascript from '~configurations/javascript';

type Configuration = 'javascript';

type AllConfigurationOptions = {
	javascript: {
		files: string[],
	}
}

type ConfigurationOptions<T extends Configuration> = T extends 'javascript'
	? Parameters<typeof configurationJavascript>[0]
	: {};

export const defineConfiguration = <T extends Configuration>(name: T, options: ConfigurationOptions<T>) => {
	return configurationJavascript(options);
}
