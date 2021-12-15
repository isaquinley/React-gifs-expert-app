export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=WgNHdC14M39r8jyGZyKTMKaRH6nVX3IF&q=${encodeURI(category)}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.original.url,
    };
  });
  console.log(gifs);
  return gifs;
};
