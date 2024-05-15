const accessKey = '41432bdc2fbdb096f31723a91ca6312b';
const axios = require('axios');


function fetchNews() {
  const apiUrl = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&token=${accessKey}`;
  return axios.get(apiUrl)
    .then(function(response) { 
      return response.data.articles;
    })
    .catch(function(error) {
      console.error('Error fetching news:', error);
      throw error;
    });
}

function showArticles(articles) {
  const newsContainer = document.getElementById('container');
  articles.forEach((article, index) => {
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article');
    articleDiv.innerHTML = `
      <h3>${index + 1}. ${article.title}</h3>
      ${article.urlToImage ? `<img src="${article.urlToImage}" alt="Image">` : 'No image in article'}
      <p>${article.description}</p> 
    `;
    newsContainer.appendChild(articleDiv);
  });
}

function fetchAndShowNews() {
  fetchNews()
    .then(function(articles) {
      console.log(articles);
      showArticles(articles);
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
}

fetchAndShowNews();

