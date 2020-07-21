import { AxiosInstance, AxiosError } from 'axios'
import entities from './entities'
import { getNavigationEndpoint } from './endpoints'
import { getNavigationParams } from './types'
/**
 * Delivc Delivery API Client. Contains methods which allow access to the
 * different kinds of entities present in Delivc (Products, Assets, etc).
 * @namespace DelivcClientAPI
 * @see Entities
 */



export default function createDelivcApi({ http }: { http: AxiosInstance }) {
    const { wrapNavigation } = entities.navigation

    const notFoundError = (id: any) => {
        const error = new Error('The resource could not be found.')
    }

    function errorHandler(error: AxiosError) {
        if (error.response?.status === 401) {
            throw new Error("[delivc]: Access key is invalid and could not be identified.")
        }
        if (error.response && error.response.data) {
            throw error.response.data
        }
        

        throw error
    }



    async function getNavigation(params?: getNavigationParams) {
        let depth = 3
        if (params) {
            depth = params.depth ?? 3
        }

        return http.post(getNavigationEndpoint(), { depth })
            .then((response) => {
                console.log(response.data)
                return response.data
            })
            .catch((e: AxiosError) => errorHandler(e))
    }

    return {
        getNavigation,
    }
 }