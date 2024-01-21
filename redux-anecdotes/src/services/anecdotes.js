import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes"

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data
}

const add = async (content) => {
    const body = {content, votes: 0}
    const response = await axios.post(baseUrl, body);
    return response.data
}

const vote = async (data) => {
    const response = await axios.put(`${baseUrl}/${data.id}`, data);
    console.log(response.data)
    return response.data
}

export default { getAll, add, vote };