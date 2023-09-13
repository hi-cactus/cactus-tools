import type { RequestConfig } from '../http';

export const interceptorRequestArgs = (config: RequestConfig) => {
  const { url = '', args } = config;

  if (!args) return config;

  const lostUrlParams: string[] = [];

  const replacedUrl = url.replace(/\{([^}]+)\}/g, (res, arg) => {
    if (!args[arg]) lostUrlParams.push(arg);
    return args[arg];
  });

  if (lostUrlParams.length)
    return Promise.reject(
      new Error(
        `url params: ${lostUrlParams.join()} no found in args\nurl: ${url}`
      )
    );

  return { ...config, url: replacedUrl };
};
