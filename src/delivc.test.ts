// @ts-nocheck
import {
    createClient,
    // @ts-ignore
    __RewireAPI__ as createClientRewireApi
} from './delivc'
//import { version } from '../package.json'
//import axios from 'axios'

describe('Delivc Tests', () => {
    test('Throws if no accessToken is defined', () => {
        expect(() => {
            // ignoring to prevent lint error
            // @ts-ignore
            createClient({})
        }).toThrow('Expected paramter AccessToken')
    })
    /*
    test('Generate the correct User Agent Header', () => {
        // @ts-ignore
        createClientRewireApi.__Rewire__('axios', jest.fn())
        
        const createHttpClientStub = jest.fn().mockReturnValue({
            defaults: {
                baseURL: 'http://some-base-url.com/'
            },
            interceptors: {
                response: {
                    use: jest.fn()
                }
            }
        })
        const rateLimitStub = jest.fn()
        createClientRewireApi.__Rewire__('createHttpClient', createHttpClientStub)
        createClientRewireApi.__Rewire__('rateLimit', rateLimitStub)

        createClient({ accessToken: 'accessToken', application: 'myApplication/1.1.1', integration: 'myIntegration/1.0.0'})
        expect(createHttpClientStub.mock.calls[0][1].headers['Content-Type'])
        expect(createHttpClientStub.mock.calls[0][1].headers['X-Delivc-User-Agent'])
        const headerParts = createHttpClientStub.mock.calls[0][1].headers['X-Delivc-User-Agent'].split('; ')
        expect(headerParts.length).toEqual(5)
        expect(headerParts[0]).toEqual('app myApplication/1.1.1')
        expect(headerParts[1]).toEqual('integration myIntegration/1.0.0')
        expect(headerParts[2]).toEqual(`sdk delivc.js/${version}`)

        createClientRewireApi.__ResetDependency__('rateLimit')
        createClientRewireApi.__ResetDependency__('createHttpClient')
        createClientRewireApi.__ResetDependency__('axios')
    })

    test('Passes along HTTP client parameters', () => {
        // @ts-ignore
        createClientRewireApi.__Rewire__('axios', jest.fn())
        // @ts-ignore
        createClientRewireApi.__Rewire__('version', 'version')

        const createHttpClientStub = jest.fn().mockReturnValue({
            defaults: {
                baseURL: 'http://some-base-url.com/'
            },
            interceptors: {
                response: {
                    use: jest.fn()
                }
            }
        })

        const rateLimitStub = jest.fn()
        createClientRewireApi.__Rewire__('createHttpClient', createHttpClientStub)
        createClientRewireApi.__Rewire__('rateLimit', rateLimitStub)

        createClient({ accessToken: 'accesstoken' })
        expect(createHttpClientStub.mock.calls[0][1].headers['Content-Type'])
        expect(createHttpClientStub.mock.calls[0][1].headers['X-Delivc-User-Agent'])
        createClientRewireApi.__ResetDependency__('rateLimit')
        createClientRewireApi.__ResetDependency__('createHttpClient')
        createClientRewireApi.__ResetDependency__('axios')
    })

    test('Returns a client instance', () => {
        const createHttpClientStub = jest.fn().mockReturnValue(axios.create({
            baseURL: 'http://some-base-url.com/',
        }))
        const rateLimitStub = jest.fn()
        // @ts-ignore
        createClientRewireApi.__Rewire__('createHttpClient', createHttpClientStub)
        // @ts-ignore
        createClientRewireApi.__Rewire__('rateLimit', rateLimitStub)
        const client = createClient({ accessToken: 'accesstoken' })

        expect(typeof client.getNavigation).toEqual('function')

        createClientRewireApi.__ResetDependency__('rateLimit')
        createClientRewireApi.__ResetDependency__('createHttpClient')
    })*/
})