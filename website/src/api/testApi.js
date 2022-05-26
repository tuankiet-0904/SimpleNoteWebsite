import axiosClient from './axiosClient'

const testApi = {
    getAll: (params) => {
        const url = '/api/test'
        return axiosClient.get(url, { params })
    },
    get: (id) => {
        const url = `/api/test/${id}`
        return axiosClient.get(url)
    },
    update: (data) => {
        const url = `/api/test`
        return axiosClient.patch(url, data)
    },
    
    getFirstNote: (test_id) => {
        const url = `/api/test/getFirstnote`
        return axiosClient.get(url)
    },
    getNote: (test_id, note_id) => {
        const url = `/api/test/${test_id}/note/${note_id}`
        return axiosClient.get(url)
    },
}

export default testApi
