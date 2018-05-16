# Movie Maker

## Deployment
 You can view this site by clicking on this link [here](https://github.com/MakenHubbard/Movie-Maker)

## Description
We were assigned this movie maker project in which we needed to create a way to set a budget, have a progress bar that corresponded a condition of having an element selected in all four categories. We had to display a message that states you could not make the movie until that condition is met as well as going over budget. We also had to display a message that states you can now make the movie when the requirements are met.

## Screenshots
This is the home page:

![home-page](https://raw.githubusercontent.com/MakenHubbard/Movie-Maker/master/screenshots/home-page.PNG)

This shows when the budget is set:

![set-budget](https://raw.githubusercontent.com/MakenHubbard/Movie-Maker/master/screenshots/set-budget.PNG)

This shows when an element is clicked:

![element-click](https://raw.githubusercontent.com/MakenHubbard/Movie-Maker/master/screenshots/element-click.PNG)

This shows what is displayed when the budget is exceeded:

![budget-exceeded](https://raw.githubusercontent.com/MakenHubbard/Movie-Maker/master/screenshots/budget-exceeded.PNG)

This shows the confirmation message when the movie is ready to be made:

![all-categories](https://raw.githubusercontent.com/MakenHubbard/Movie-Maker/master/screenshots/all-categories.PNG)

## How To Run
1. Visit the link given in the deployment section of this project
2. Clone the project
3. Open the terminal and make a lib folder (```mkdir lib```).
4. change directory into the lib folder (```cd lib```).
5. type ```npm init``` (press enter until the options stop)
6. type ```npm install grunt grunt-contrib-watch grunt-browserify gruntify-eslint --save-dev```.
7. Before running the program you will have to be in the lib folder and type ```grunt``` to run it
8. Open the terminal and type in ``` hs -p 4556``