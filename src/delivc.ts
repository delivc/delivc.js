import { getUserAgentHeader, createHttpClient } from '@delivc/delivc-sdk-core'
import axios  from 'axios'
import createDelivcApi from './create-delivc-api'
import { CreateClientParams } from './types'
import { httpClientConfig } from '@delivc/delivc-sdk-core/dist/types'

/**
 * create a client instance
 * @param {Options} params - Client initialization parameters
 */
export function createClient(params: CreateClientParams) {
    if (!params.accessToken) {
        throw new TypeError('Expected paramter AccessToken')
    }

    const config = {
        ...params
    }

    // @ts-ignore
    const userAgentHeader = getUserAgentHeader(`delivc.js/${__VERSION__}`,
        config.application ?? "",
        config.integration ?? ""
    )

    config.headers = {
        ...config.headers,
        'Content-Type': 'application/vnd.delivc.delivery.v1+json',
        'X-Delivc-User-Agent': userAgentHeader
    }

    const http = createHttpClient(axios, config as httpClientConfig)

    return createDelivcApi({ http })
}