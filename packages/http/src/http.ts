import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';
import { interceptorRequestArgs } from './interceptors/interceptorRequestArgs';

export interface ResultFormat<T = any> {
  data?: T;
  err: AxiosError | null;
  response: AxiosResponse<T> | null;
}

export interface RequestConfig<
  D = any,
  Params = any,
  Args = Record<string, any>
> extends AxiosRequestConfig<D> {
  /**
   * @type {string} url
   * @memberof RequestConfig
   */
  url: string;
  /** 用于设置 url params 参数 如 `/get-user/{id}/username` */
  args?: Args;
  params?: Params;
  /** 可利用 fetch api AbortController 取消请求 */
  controller?: AbortController;
}

export interface HttpConfig extends CreateAxiosDefaults {
  /**
   * 实例Http 用于拦截修改 config
   * @param {InternalAxiosRequestConfig} config
   * @returns
   */
  interceptorsRequest?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  /**
   * 实例Http 用于拦截修改 response
   * @param response
   * @returns
   */
  interceptorsResponse?: (response: AxiosResponse) => AxiosResponse;
}

export interface HttpRequest {
  <T>(config: RequestConfig): Promise<ResultFormat<T>>;
  <T, Data>(config: RequestConfig<Data>): Promise<ResultFormat<T>>;
  <T, Data, Params>(config: RequestConfig<Data, Params>): Promise<
    ResultFormat<T>
  >;
  <T, Data, Params, Args>(config: RequestConfig<Data, Params, Args>): Promise<
    ResultFormat<T>
  >;
}

interface MarkRequest {
  <T>(): (config: RequestConfig) => Promise<ResultFormat<T>>;
  <T, Data>(): (config: RequestConfig<Data>) => Promise<ResultFormat<T>>;
  <T, Data, Params>(): (
    config: RequestConfig<Data, Params>
  ) => Promise<ResultFormat<T>>;
  <T, Data, Params, Args>(): (
    config: RequestConfig<Data, Params, Args>
  ) => Promise<ResultFormat<T>>;
}

export class Http {
  private defaultConfig: AxiosRequestConfig = {
    url: '',
  };
  private instance: AxiosInstance;
  static pendingMap = new Map<string, AbortController | undefined>();
  constructor(config: HttpConfig) {
    const { interceptorsRequest, interceptorsResponse, ...otherConfig } =
      config;
    this.instance = axios.create(otherConfig);

    this.instance.interceptors.request.use(interceptorsRequest, undefined);
    this.instance.interceptors.response.use(interceptorsResponse, undefined);
  }
  /**
   *
   * @param config
   * @returns
   */
  public get: HttpRequest = (config: RequestConfig) =>
    this.request({ ...config, method: 'GET' });
  public post: HttpRequest = (config: RequestConfig) =>
    this.request({ ...config, method: 'POST' });
  public put: HttpRequest = (config: RequestConfig) =>
    this.request({ ...config, method: 'PUT' });
  public delete: HttpRequest = (config: RequestConfig) =>
    this.request({ ...config, method: 'DELETE' });
  public patch: HttpRequest = (config: RequestConfig) =>
    this.request({ ...config, method: 'PATCH' });
  public request: HttpRequest = (config: RequestConfig) =>
    this.markRequest()({ method: 'GET', ...config });
  private markRequest: MarkRequest = () => async (config: RequestConfig) => {
    const mergeConfig = {
      ...this.defaultConfig,
      ...config,
      headers: {
        ...(this.defaultConfig.headers ?? {}),
        ...(config.headers ?? {}),
      },
    };

    // bind AbortController
    if (!mergeConfig.controller) mergeConfig.controller = new AbortController();

    mergeConfig.signal = mergeConfig.controller?.signal;

    if (Http.pendingMap.has(JSON.stringify(mergeConfig))) {
      return {
        err: new Error('Duplicate request!'),
        data: null,
        response: null,
      };
    }

    this.addPending(mergeConfig);

    try {
      const next = await interceptorRequestArgs(mergeConfig);
      const response = await this.instance(next);
      return { err: null, data: response.data, response };
    } catch (err: any) {
      return { err, data: null, response: null };
    } finally {
      this.removePending(mergeConfig);
    }
  };

  private addPending(config: RequestConfig) {
    Http.pendingMap.set(JSON.stringify(config), config.controller);
  }
  private removePending(config: RequestConfig) {
    Http.pendingMap.delete(JSON.stringify(config));
  }
  static clearPending(config: RequestConfig) {
    const configStr = JSON.stringify(config);
    Http.pendingMap.get(configStr)?.abort?.();
  }
  static clearAllPending() {
    Http.pendingMap.forEach((c) => c?.abort?.());
    Http.pendingMap.clear();
  }
}
