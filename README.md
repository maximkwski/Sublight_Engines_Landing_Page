# Sublight_Engines_Landing_Page
Week: Diving into HTML and CSS

The project folder includes index.html which is the landing page of the project.
All the images used on th pages are in "images"directory. logos and icons are in "logos" directory.
Font for the page is "Roboto" and is included in "fonts" directory, in case.
Styling of the page is placed in separate file "mystyle.css"

You can open the web page locally by cloning the project with: "git clone git@github.com:maximkwski/Sublight_Engines_Landing_Page.git"
or visit deployed web page: https://maximkwski.github.io/Sublight_Engines_Landing_Page/
* if the deployed version of a page does not render the correct font, it can be fixed by changing the path in css file:

src: url('../../Sublight_Engines_Landing_Page/fonts/Roboto-Bold.ttf')  format('truetype'); 

* I decided to keep the path that works fine locally when you clone the project.
@font-face {
    font-family: Roboto-bold;
    src: url('fonts/Roboto-Bold.ttf')  format('truetype');
  }
