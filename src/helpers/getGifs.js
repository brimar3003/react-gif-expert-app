export const getGifs = async (category) =>{
    //api.giphy.com/v1/gifs/search
    //tfm1XfqHGGBurS9bJxsEVuCEuJKJUlht
    //api.giphy.com/v1/gifs/search?q=Batman&limit=20&api_key=tfm1XfqHGGBurS9bJxsEVuCEuJKJUlht
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=tfm1XfqHGGBurS9bJxsEVuCEuJKJUlht`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map((img) =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}