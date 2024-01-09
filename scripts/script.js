/*
    User Interaction 1 - Like/Dislike -------------------------------------------------------------------------------
*/

//Selects all like/dislike elements from the DOM us their class name
var like_images = document.getElementsByClassName("like_image");
var dislike_images = document.getElementsByClassName("dislike_image");
var like_counts = document.getElementsByClassName("like_count");
var dislike_counts = document.getElementsByClassName("dislike_count");

//Updates the like count to each like element
function updateLikes(num){
    for (let i = 0; i < like_counts.length; i++) {
        like_counts[i].innerHTML = num;
    }
}
var like_count = 895;
updateLikes(like_count);

//Updates the dislike count to each dislike element
function updateDislikes(num) {
    for (let i = 0; i < dislike_counts.length; i++) {
        dislike_counts[i].innerHTML = num;
    }
}
var dislike_count = 127;
updateDislikes(dislike_count);

/*
    Event 1 -------------------------------------------------------------------------------------------------------

    Called when the like element is clicked, getting the image source from the triggering element and modifying 
    it accordintly. Also, the like count is updated based on the action (liking/unliking). 
*/
function likedClicked (){
    console.log("Liked was clicked.");

    let source = this.getAttribute("src"); 

    if (source == "/img/heart.png"){
        like_count++;
        updateLikes(like_count);
        this.src = "/img/heart_liked.png";
    }
    else {
        like_count--;
        updateLikes(like_count);
        this.src = "/img/heart.png";
    }
}

/*
    Event 2 -------------------------------------------------------------------------------------------------------

     Called when the dislike element is clicked, getting the image source from the triggering element and modifying 
     it accordintly. Also, the dislike count is updated based on the action (liking/unliking). 
*/
function dislikeClicked (){
    console.log("Disliked was clicked.");

    let source = this.getAttribute("src"); 

    if (source == "/img/dislike_clear.png"){
        dislike_count++;
        updateDislikes(dislike_count);
        this.src = "/img/dislike_filled.png";
    }
    else {
        dislike_count--;
        updateDislikes(dislike_count);
        this.src = "/img/dislike_clear.png";
    }
}

//Adds the appropriate event listeners to each like/dislike element
for (let i = 0; i < like_images.length; i++) {
    like_images[i].addEventListener('click', likedClicked);
}

for (let i = 0; i < dislike_images.length; i++) {
    dislike_images[i].addEventListener('click', dislikeClicked);
}

/*
    User Interaction 2 - Login ---------------------------------------------------------------------------------
*/

var isLoggedIn = false;
var theUsername = "gRamsay";
var thePassword = "donut";

/*
    Event 3 ----------------------------------------------------------------------------------------------------

    Shows the alert for the necessary username and password when the Forgot Password? is clicked.
*/
function givePasswordAlert() {
    let alertMessage = `Here is the username and password needed to login:\n\n   Username: ${theUsername}\n\n   Password: ${thePassword}`;

    alert(alertMessage);
}
var forgot_password = document.getElementById("forgot_password");
if (forgot_password != null){
    forgot_password.addEventListener('click', givePasswordAlert);
}

function onInputChanged (){
    this.style.borderColor = '';
}

/*
    Event 4 ----------------------------------------------------------------------------------------------------

    This is called when the login button is clicked. It gets the username and password inputs and their values,
    and compares them against multiple conditions. For example, when the user doesn't input any values, the input
    boxes are modified to a red border and a new element is displayed as an error message. 
    
    When the user enters both a username and password, they are passed into the loginVerification function to be
    verrified.
*/
function loginClicked (){
    let inputbox_username = document.getElementById("input_username");
    inputbox_username.addEventListener('change', onInputChanged);
    let inputbox_password = document.getElementById("input_password");
    inputbox_password.addEventListener('change', onInputChanged);

    let username = inputbox_username.value;
    let password = inputbox_password.value;

    if (username.length == 0){
        inputbox_username.style.borderColor = ('#eb3434');

        if (password.length == 0){
            inputbox_password.style.borderColor = ('#eb3434');
        }

        let error = document.getElementById("login_error_message");
        error.innerText = "!! Please ensure you enter both your username and password below !!";
    }
    else if (password.length == 0){
        document.getElementById("input_password").style.borderColor = ('#eb3434');

        let error = document.getElementById("login_error_message");
        error.innerText = "!! Please ensure you enter both your username and password below !!";
    }
    else{
        loginVerification(username, password);
    }
}

/*
    Takes the user's username and password, comparing them to the correct password needed. If they are correct,
    the navigation bar is modified and new links to webpages are added. Also, a success message is added to the 
    screen.
*/
function loginVerification (usrn, pwd){
    if (usrn == theUsername && pwd == thePassword) {
        isLoggedIn = true;

        let navLinks = document.getElementById('nav_links_login');
        document.getElementById("login_link").remove();
        navLinks.innerHTML += '<li><a href="/myrecipes.html">MY RECIPES</a></li>';
        navLinks.innerHTML += '<li><a href="/profile.html">PROFILE</a></li>';

        let message = document.getElementById("login_error_message");
        message.style.color = '#008724';
        message.innerText = "Login Successful!";
        document.getElementById("btn_login").removeEventListener('click', loginClicked);
    }
    else {
        let error = document.getElementById("login_error_message");
        error.innerText = "!! The username or password is incorrect !!";

        setTimeout(function () {error.innerText = "";}, 5000);
    }
}

var login_button = document.getElementById("btn_login");
if (login_button != null){
    login_button.addEventListener('click', loginClicked);
}


/*
    User Interaction 3 - Delete a Recipe -----------------------------------------------------------------------------
*/

/* 
    Event 5 ----------------------------------------------------------------------------------------------------------

    This event is triggered when a user selects one of their recipes and clicks on the trash icon. It selects all 
    recipe items by name and loops through them to find the one selected. There is then a confirm pop-up to ensure
    the user wants to carry on with this action and then the recipe item is removed.
*/
function deleteRecipeClicked() {
    console.log("Delete Entered");
    let myRecipes = document.getElementsByName("my_recipes");

    for(i = 0; i < myRecipes.length; i++) {
        if(myRecipes[i].checked){

            if(window.confirm("You are about to delete a recipe.\n\nEnsure this is your intended action.")){
                myRecipes[i].nextElementSibling.remove();
                myRecipes[i].remove();
            }
        }
    }
}

var trash_myrecipe = document.getElementById("trash_recipe");
if (trash_myrecipe != null){
    trash_myrecipe.addEventListener('click', deleteRecipeClicked);
}


/*
    User Interaction 4 - New Recipe Title
*/

/*
    Event 6 -------------------------------------------------------------------------------------------------------

    Once user enters/changes a recipe title into the input, the new recipe heading is changed to what was inputed.
*/
function onRecipeTitleChanged (){
    document.getElementById("recipe_header_title").innerText = document.getElementById("recipe_title_input").value;
}

var recipe_title = document.getElementById("recipe_title_input");
if (recipe_title != null){
    recipe_title.addEventListener('change', onRecipeTitleChanged);
}

/*
    User Interaction 5 - Saving/Canceling New Recipe Creation
*/

/*
    Event 7 --------------------------------------------------------------------------------------------------------

    When a user clicks the submit button for a new recipe, this event is fired. It uses the function checkForms to
    check if every element on the form has input and returns if so or not. Then an appropriate pop-up is displayed,
    given whether there was missing input or not.
*/
function saveRecipeClicked (){
    let noInputMessage;
    let allGood = checkForms();

    function checkForms (){
        let noInput = false;
        noInputMessage = 'You are missing the following: \n\n';
    
        let title = document.getElementById("recipe_title_input").value;

        let num_cuisine = checkDetail(document.getElementsByName("cuisine_type"));
        let num_style = checkDetail(document.getElementsByName("style_type"));
        let difficulty = checkDetail(document.getElementsByName("dif"));
        let time = checkDetail(document.getElementsByName("time"));
        let calories = checkDetail(document.getElementsByName("cal"));

        //Function to check if a detail element is checked
        function checkDetail (detail) {
            let num = 0;

            for(i = 0; i < detail.length; i++) {
                if(detail[i].checked){
                    num++;
                }
            }
            return num;
        }

        let overview = document.getElementById("overview_txtbox").value;
        let ingredients = document.getElementById("ingredient_list_container");
        let instructions = document.getElementById("instruction_list_container");
    
        /*
            Checks if any of the form elements have no input/aren't checked and modifies their colors (i.e., changing 
            their color to red) and adds the missing input to the error message.
        */
        if (title.length == 0){
            noInputMessage += '- Recipe Title\n';
            document.getElementById("recipe_title_input").style.borderStyle = 'solid';
            document.getElementById("recipe_title_input").style.borderColor = '#eb3434';
            noInput = true;
        }
        else {
            document.getElementById("recipe_title_input").style.borderStyle = 'solid';
            document.getElementById("recipe_title_input").style.borderColor = '';
        }
    
        if (num_cuisine == 0){
            noInputMessage += '- Cuisine\n';
            document.getElementById("leg_cuisine").style.color = '#eb3434';
            noInput = true;
        }
        else {
            document.getElementById("leg_cuisine").style.color = '';
        }

        if (num_style == 0){
            noInputMessage += '- Style\n';
            document.getElementById("leg_style").style.color = '#eb3434';
            noInput = true;
        }
        else {
            document.getElementById("leg_style").style.color = '';
        }

        if (difficulty == 0){
            noInputMessage += '- Difficulty\n';
            document.getElementById("leg_dif").style.color = '#eb3434';
            noInput = true;
        }
        else {
            document.getElementById("leg_dif").style.color = '';
        }

        if (time == 0){
            noInputMessage += '- Time\n';
            document.getElementById("leg_time").style.color = '#eb3434';
            noInput = true;
        }
        else {
            document.getElementById("leg_time").style.color = '';
        }
    
        if (calories == 0){
            noInputMessage += '- Calories\n';
            document.getElementById("leg_cal").style.color = '#eb3434';
            noInput = true;
        }
        else {
            document.getElementById("leg_cal").style.color = '';
        }

        if (overview.length == 0){
            noInputMessage += '- Overview\n';
            document.getElementById("leg_overview").style.color = '#eb3434';
            noInput = true;
        }
        else {
            document.getElementById("leg_overview").style.color = '';
        }

        if (ingredients.children.length == 0){
            noInputMessage += '- Ingredients\n';
            document.getElementById("leg_ingredients").style.color = '#eb3434';
            noInput = true;
        }
        else {
            document.getElementById("leg_ingredients").style.color = '';
        }

        if (instructions.children.length == 0){
            noInputMessage += '- Instructions\n';
            document.getElementById("leg_instructions").style.color = '#eb3434';
            noInput = true;
        }
        else {
            document.getElementById("leg_instructions").style.color = '';
        }

        return noInput;
    }

    /*
        If the form has input everywhere, a confirmation pop-up appears and if user is sure of action, an alert is
        displayed to show recipe was successfully submitted. If any input was missing, an alert appears detailing
        what is missing.
    */
    if (!allGood){
        if(window.confirm("Are you sure you want to submit your recipe?")){
            alert("Recipe submitted successfully!");
        }
    }
    else {
        alert(noInputMessage);
    }
}

var submit_recipe = document.getElementById("submit_new_recipe");
if (submit_recipe != null){
    submit_recipe.addEventListener('click', saveRecipeClicked);
}


/*
    User Interaction 6 - Adding Ingredients
*/

/*
    Event 8 --------------------------------------------------------------------------------------------------------

    This event occurs when a user clicks on the plus icon within the ingredients part of the form. It first checks
    to see if the user input is not empty, and then adds a list item to the ingredients list container based
    on the input.
*/
function addIngredientClicked (){
    console.log("Plus Ingredient Clicked");

    let ingredient_input = document.getElementById("ingredient_input").value;
    document.getElementById("ingredient_input").value = '';
    let ingredients_div = document.getElementById("ingredient_list_container");
    
    if (ingredient_input.length > 0){
        ingredients_div.innerHTML += `
            <div class="list_item">
                <p><img src="/img/food.png" alt="beef">${ingredient_input}</p>
                <img src="/img/trash.png" alt="delete">
            </div>
        `;
    }
}

var add_ingredient = document.getElementById("plus_ingredient");
if (add_ingredient != null){
    add_ingredient.addEventListener('click', addIngredientClicked);
}

/*
    User Interaction 7 - Adding Instructions
*/

/*
    Event 9 --------------------------------------------------------------------------------------------------------

    This event occurs when a user clicks on the plus icon within the instructions part of the form. It first checks
    to see if the user input is not empty, and then adds a list item to the instructions list container based
    on the input. It also makes sure to update the step number.
*/

var stepCounter = 1;

function addInstructionClicked (){
    console.log("Plus Instruction Clicked");

    let instruction_input = document.getElementById("step_input").value;
    document.getElementById("step_input").value = '';
    let instructions_div = document.getElementById("instruction_list_container");
    
    if (instruction_input.length > 0){
        instructions_div.innerHTML += `
            <div class="list_item">
                <div class="step">
                    <p>${stepCounter}</p>
                    <p>${instruction_input}</p>
                </div>
                <img src="/img/trash.png" alt="delete">
            </div>
        `;
    }

    stepCounter++;
    document.getElementById("step_label").innerText =  `Step ${stepCounter} : `;
}

var add_instruction = document.getElementById("plus_instruction");
if (add_instruction != null){
    add_instruction.addEventListener('click', addInstructionClicked);
}




//API used is Edamam: Recipe Search API --> https://www.edamam.com/
/*
    By passing in a URL containing a query with the cuisines selected to the API, the return is 
    a JSON file containing hits of recipes. Reading through the recipe, I retrieve necessary 
    data such as recipe name, image, etc. and update the browse recipes items.
*/

cuisine_types = document.getElementById("cuisine_options");
if (cuisine_types != null){
    cuisine_types.addEventListener("change", function(e){
        loadRecipes();
    });
}

//Loads the JSON file returned by the API
function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(JSON.parse(xhr.responseText));
        }
        else {
          error(xhr);
        }
      }
    };
    xhr.open('GET', path, true);
    xhr.send();
}

//Loads the recipes that result from a change to the cuisine filter
async function loadRecipes(){
    let checked_cuisines = [];
    let to_query_cuisines = [];
    let query = "";

    let all_check_boxes = document.getElementsByClassName("input_cuisine_check");
    
    for (var i = 0; i < all_check_boxes.length; i++) {   
        if (all_check_boxes[i].checked){
            checked_cuisines.push(all_check_boxes[i].value);
        } 
    }
    to_query_cuisines = checked_cuisines;  

    for (var j = 0; j < to_query_cuisines.length; j++){
        query += `&cuisineType=${to_query_cuisines[j]}`;
    }

    let stringURL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=6bdf4a01&app_key=59ce9780909be6daf0062dc1f9a2985e${query}&imageSize=REGULAR&random=true&field=label&field=image&field=cuisineType`;

    loadJSON(stringURL, recipeData, 'jsonp');
}

//Changes the UI elements accordingly
async function recipeData(Data)
{
    let browse_item_titles = document.getElementsByClassName("browse_recipe_title");
    let browse_item_image = document.getElementsByClassName("browse_item_image");
    let browse_item_flags = document.getElementsByClassName("browse_item_flag_image");

    for (var i = 0; i < 4; i++) {   
        browse_item_titles[i].innerText = Data.hits[i].recipe.label;
        browse_item_image[i].src = Data.hits[i].recipe.image;
        browse_item_flags[i].src = `/img/${Data.hits[i].recipe.cuisineType[0]}_flag.png`;
    }
}

//Event and function for when a user clicks on the "Learn More" or "About" button (opens profile page)
function openProfile() {
    window.open("/profile.html", "_self");
}

var learn_more_chef = document.getElementsByClassName("btn_learn_more_chef");
if (learn_more_chef != null) {
    for (var i = 0; i < learn_more_chef.length; i++) {   
        learn_more_chef[i].addEventListener('click', openProfile);
    }
}

//Event and function for when a user clicks on "View" recipe button (opens recipe page)
function openRecipe() {
    console.log("What");
    window.open("/recipe.html", "_parent");
}

var view_recipes = document.getElementsByClassName("btn_view_recipe");
if (view_recipes != null) {
    for (var i = 0; i < view_recipes.length; i++) {   
        console.log("Entered");
        view_recipes[i].addEventListener('click', openRecipe);
    }
}
