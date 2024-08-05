import configurationJs from '~configurations/js';

type Configuration = 'javascript';

type AllConfigurationOptions = {
	javascript: {
		files: string[],
	}
}

type ConfigurationOptions<T extends Configuration> = T extends 'javascript'
	? Parameters<typeof configurationJs>[0]
	: {};

export const defineConfiguration = <T extends Configuration>(name: T, options: ConfigurationOptions<T>) => {
	return configurationJs(options);
}

defineConfiguration('javascript', {

})
