# Here-And-There-Recipes

## Context
### Purpose
The purpose of this web application is to provide a place to browse, create, and like recipes amongst a community of people who enjoy cooking and want to share and learn.

### Intended Users
There is not “one” intended user or group of users. This web application is intended for both expert chefs to novice cooks in their home kitchens. It is intended for new and experienced users who want to look for a new recipe to try. It is also intended for new and experienced chefs that want to share their own recipes they created. Overall, this web application is intended for everyone who wants to cook a tasty recipe.

### Key Features/Actions
- **Recipe Creation**:
One of the most key features of this web application is the ability for registered users to create their own recipes and save them to the application for others to view. There is no pre-requisite, only that the user is registered, logged in, but most importantly, eager to share.

- **Recipe Exploration**: 
Another feature available to anyone, registered or not, is the ability to browse recipes shared by chefs/users around the world. This exploration feature can be found on the home page or the browse page. On the home page, users are met with a list of the recent “Top Recipes” and a “Featured Chef” they can explore and learn more about. On the browse page, users can filter through all recipes given the cuisine, style, time to cook, difficulty level, etc. From both pages, users can click into these recipes and start cooking.

- **Recipe Like/Dislike**:
On each recipe, there is the ability for any registered user on the web application to like or dislike the recipe. For example, if a user tried out a recipe and enjoyed it, the user can like the recipe which will later be found easily in their “Liked Recipes” section. However, if a user tried a recipe out and disliked it, they can dislike the recipe as well. This feature drives what recipes appear in the “Top Recipes” and what chef is picked for the “Featured Chef”.

### Example Process
A example process a registered user might go through is recipe creation. That starts with navigating to their “My Recipes” page and clicking the plus button to create a new recipe. Then they are prompted to add an image, detail the filters, and fill out the overview, ingredients, and instructions. 


## Web API and User Input
### Edamam – Recipe Search API
Edamam offers multiple API’s for nutrition data and analytics. Those API’s are a Nutrition Analysis API, Food Database API, and Recipe Search API. The API I utilized for this project was the Recipe Search API. This API offers the ability to search over 2.3 million recipes gathered from 500+ internet sources. You are able to filter these recipes and obtain information such as calories, ingredients, etc. 
In order to use the Recipe Search API, you need required information such as app_id and app_key which is unique to each user that uses the API. This information is then passed into a URL that contains a query, filtering, etc. The URL is then used to retrieve a JSON file of hit objects or individual recipes. Reading through this file, you can obtain an individual recipe’s name, image, etc.

[Edamam](https://developer.edamam.com/edamam-recipe-api)

### User Input
The user input I utilized along with the API was a group of checkboxes containing cuisine types found in the filter area on the browse recipe page. A user is able to check any number of these boxes, and upon a change, the checked boxes values are retrieved and applied as filters in the URL. This URL is then used to retrieve the JSON file and the file is then read through and the browse recipe items are updated via their name, image, etc.
