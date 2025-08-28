import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

const getAll = async () =>
{
    const res = await axios.get(baseURL)
    return res.data
}

const createNew = async content =>
{
    const object = { content, votes: 0 }
    const res = await axios.post(baseURL, object)

    return res.data
}

const getById = async id =>
{
    const res = await axios.get(`${baseURL}/${id}`)
    return res.data
}

const update = async (id, newObject) =>
{
    const res = await axios.put(`${baseURL}/${id}`, newObject)
    return res.data
}

export default { getAll, createNew, getById, update }
