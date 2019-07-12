// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(response =>{
    const articlesData = response.data.articles;
    console.log(articlesData)
})

.catch(error =>{
    console.log('An error happened:', error)
})


function createCard(article) {
    // create DOM elements
    const cardsContainer = document.querySelector('.cards-container');
    const card = document.createElement('div')
    const hl = document.createElement('div')
    const author = document.createElement('div')
    const imgCtnr = document.createElement('div')
    const authorImg = document.createElement('img')
    const authorByline = document.createElement('span')

    // add elements to DOM structure


    // set content


    // set classes & attributes

}