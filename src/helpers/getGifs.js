export const getGifs = async category => {
    const token = 'api_key=B21KmtfPljJtAdfRWI0reWXl16DoOotQ';
    const filtro = `q=${category}`;
    const limit = 'limit=3';
    const url = `https://api.giphy.com/v1/gifs/search?${token}&${filtro}&${limit}`;

    const response = await fetch(url);
    const { data } = await response.json();

    return data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
}