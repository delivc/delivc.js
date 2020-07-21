export interface AxiosProxyConfig {
    host: string;
    port?: number;
    auth?: {
        username: string;
        password: string;
    };
}

export type ClientLogLevel = 'error' | 'warning' | 'info'

export interface CreateClientParams {
    accessToken: string
    environment?: string
    insecure?: boolean
    host?: string
    basePath?: string
    httpAgent?: any
    httpsAgent?: any
    proxy?: AxiosProxyConfig
    headers?: any
    adapter?: any
    application?: string
    integration?: string
    resolveLinks?: boolean
    removeUnresolved?: boolean
    retryOnError?: boolean
    logHandler?: (level: ClientLogLevel, data?: any) => void
    timeout?: number
    retryLimit?: number
}

export interface getNavigationParams {
    depth?: number
}