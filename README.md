# SearchEngine Simple Web

This is a simple search engine to search images, news, and normal search, there are three pages, the first is **home page**, when you open this web you will see a search input with 3 choices type search.

The second page is **results page**, it's the page to display the results of the search. there are 3 different layouts, the first layout for normal results, the second layout for image results, and the last layout for news results.

The last page is **reading list page**, it's a page for news which added to list reading list. to describe it has similar data with news results, but it's the next step from news results, in the news page you can save each news to your list. and the list can be accessed in the reading list, you can access this page with click the icon bookmark at the top right in this web.

## Setup SearcEngine Simple Web

before you start the project, you should doing a few setup :

1. Create **.env** file at the root project.
2. Edit **.env** file so that have a code like below :

   > REACT_APP_API_SEARCH_URL=https://google-search3.p.rapidapi.com/api/v1/search

   > REACT_APP_API_NEWS_SEARCH_URL=https://google-search3.p.rapidapi.com/api/v1/news

   > REACT_APP_API_IMAGE_SEARCH_URL=https://google-search3.p.rapidapi.com/api/v1/image

   > REACT_APP_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

3. After that, you can run **npm install** to install all package in this project.
4. The last, the project already to run, use **npm start** or **yarn start**

**Happy explore!**

## This project also deployed at [search Engine](https://searchenginesimple.netlify.app/)

Library in this project :

1. [Tailwind CSS](https://tailwindcss.com/)
2. [Axios](https://axios-http.com/)
3. [React Router Dom](https://www.npmjs.com/package/react-router-dom)
4. [React Toastify](https://www.npmjs.com/package/react-toastify)

Thanks a lot!
