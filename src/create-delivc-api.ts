import { AxiosInstance } from 'axios'
import entities from './entities'
import { getNavigationEndpoint } from './endpoints'
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

    function errorHandler(error: any) {
        if (error.data) {
            throw error.data
        }
        if (error.response && error.response.data) {
            throw error.response.data
        }

        throw error
    }

    function getNavigation() {
        return http.get(getNavigationEndpoint()).then((response) => wrapNavigation(response.data), errorHandler)
    }

    return {
        getNavigation,
    }
 }