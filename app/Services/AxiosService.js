// @ts-ignore
export const sandBoxApi = axios.create({
  //TODO Change YOURNAME to your actual name
  baseURL: "https://bcw-sandbox.herokuapp.com/api/ChesterG/songs",
  setTimeout: 10000
});

export const itunesApi = axios.create({
  baseURL: "https://itunes.apple.com/search",
  setTimeout: 10000
})