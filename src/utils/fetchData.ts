const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
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
