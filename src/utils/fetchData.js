export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_EXERCISE_API,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export  const youtubeOptions = {
    params: {
    maxResults: '50'
    },
    headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YT_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchData = async(url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}