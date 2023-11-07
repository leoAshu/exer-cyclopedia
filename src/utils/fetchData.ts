const exerciseOptions = {
    method: 'GET',
    params: { limit: '100' },
    headers: {
        'X-RapidAPI-Key': 'a47f439d61msh58fcc89ebefe92cp1d566fjsn0f8da9f4a398',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
}

const fetchData = async (
    url: RequestInfo | URL,
    options?: RequestInit | undefined
) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}

export { exerciseOptions, fetchData }
