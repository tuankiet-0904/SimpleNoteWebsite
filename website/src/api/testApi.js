import axiosClient from './axiosClient'

const testApi = {
    getAll: (params) => {
        const url = '/test'
        return axiosClient.get(url, { params })
    },
    get: (id) => {
        const url = `/test/${id}`
        return axiosClient.get(url)
    },
    update: (id, credentials) => {
        const url = `/test`
        return axiosClient.patch(url, credentials)
    },
}

export default test
