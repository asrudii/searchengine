# SearchEngine Simple Web

This is simple search engine to search image, news and normal search, there are three pages, the first is **home page**, when you open this web you will see search input with 3 choices type search.

The second page is **results page**, it's page to display result of search. there are 3 different layout, first layout for normal result, second layout for image result and the last layout for news result.

The last page is **reading list page**, it's page for news which added to list reading list. to describe it's have similiar data with news result, but it's next step from news results, in the news page you can save each news to your list. and the list can be access in the reading list, you can access this page with click icon bookmark at the top right in this web.

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

## This project also deployed at [search Engine](https://tailwindcss.com/)

Library in this project :

1. [Tailwind CSS](https://tailwindcss.com/)
2. [Axios](https://axios-http.com/)
3. [React Router Dom](https://www.npmjs.com/package/react-router-dom)
4. [React Toastify](https://www.npmjs.com/package/react-toastify)

Thanks a lot!
