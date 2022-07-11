# Quiz Time (JavaScript Game)
![Website Mock Up](assets/images/readme/mockup.png)
# Purpose
This project is a dynamic website - trivia quiz [Quiz Time](https://oks-erm.github.io/quiz-time/). The game provides different levels of difficulty and includes a random fun fact feature between games. The game fetches data from external APIs and provides a variety of questions and facts, thefore it keeps the player amused for multiple game sessions.
The games stores data about all game, this way providing a real competition between all the players over time. 

The core purposes of the website:
- entertain players with a trivia quiz.
- educate via facts after a game session.
- provide real competition.  

The website is built using HTML,CSS,JavaScript and Google Apps Script as a Milestone Project#2 for the Code Institute's Full Stack Developer course.  

[The live website is available here]( https://oks-erm.github.io/quiz-time/)
___
# UX Design
## User stories
### As a **first time user**

- I want to easily understand the main purpose of the site and how to use it.
- I want to be able to easily play the game.
- I want to be able to easily navigate.
- I want to be amused.

### As a **returning** and a **frequent user**

- I want to have different questions without repetitions.
- I want to have a choice of difficulty to progress.
- I want to play multiple games.
- I want to compare my results with other players.
- I want to read funny nicknames of other players and create my own. 

### All users want to be able to access and comfortably view the website on mobile devices.

___
## Structure
### Home Page
- Helps the user to understand what kind of the game it is.
- Invites to enter name and start the game.
- Grabs the user's attention and grips it with bold design.
    #### User Goal:
    >   - Understand the main purpose of the website.
    >   - Easily navigate and interact with the website.
    >   - Be amused.
    #### Website Goal:
    >   - Interest and engage the user.

### Game Page
- Allows to choose difficulty level.
- Allows to play the game.
- Displays highscores in the end of the game.
    #### User Goal:
    >   - Take a quiz.
    >   - Be amused.
    >   - Compare their result with other players.
    #### Website Goal:
    >   - Entertain the user with the quiz.
    >   - Initiate future engagement, such as returning to beat the top score or make sure nobody has beaten yours.

### Funfact Page
- Provides a random interesting fact to entertain the user and extend their knowledge.
- Offer scenarios of further actions, such as "play again" or "change name and play again".
- For the first time player this page is a suprprise.
    #### User Goal:
    >   - Be amused.
    >   - Choose the way to continue playing.
    #### Website Goal:
    >   - Entertain and educate the user.
    >   - Offer further engagement.

### Error Pages (404, 500)
- Informs the user about a broblem occured and offer further actions to keep the user on the website.
    #### User Goal:
    >   - Understand what to do in case of an error.
    #### Website Goal:
    >   - Keep the user on the website.
    >   - Make an unpleasant event of getting an error fun for the user.
___
## Wireframes
.
.
.
.
.

## Design

The project's design springs from the easthetics of gaming machines and [God's Own Junkyard](https://www.godsownjunkyard.co.uk/) art space. One of the reasons is that setting a quiz in more obvious pub settings seemed not acceptable for some groups of potential players. A pub setting does not seem very appropriate for younger players, religious and ethnic groups, whose customs disaprove of alcohol and pubs by assosiation. To make it apealing for broader audience a more neutral solution was opted for. 

### Colour Scheme

![Palette](assets/images/readme/palette.png)
Colour scheme is inspired by neon signs and neon glowing effects are used throughout the website. Shades of magenta and blue are bold and cheerful balanced out with deep black-blue and pastel light blue and grey. 

#### **Cultured White** 
#f8f8f8 - is used for neon glow effect and spreading light effect.

#### **Beau Blue** 
#B9D3E8 - is used for background in the blocks with text content.

#### **Capri Blue** 
#45C0FD - is used for neon glow effect and spreading light effect.

#### **Magenta**  
#FF00FE - is used for neon glow effect, animated glowing, spreading light effect and glowing headings.

#### **Space Cadet**  
#181B3B - is used for shadows and typography.

#### **Rich Black**  
#181B3B - is used for background, background merging with background image and shadows.

### Typography

[Nothing You Could Do](https://fonts.google.com/specimen/Nothing+You+Could+Do?query=nothing+you) is used for headings. It is nonchalant, whilst legible, works well with glowing effect.

[Oxygen](https://fonts.google.com/specimen/Oxygen?query=oxygen) was chosen for body text. It is neutral, soft and easy to read even on the smaller screens.

[God's own junkyard](https://allbestfonts.com/gods-own-junkyard-pro/) is used for the Fun Fact page, as this page is a surprise for the first time user it was decided to use slightly different styling for it. As the page has a plenty of free space, I found it to be a great opportunity to implement the most stereotypical neon font for aesthetic purpose, as it looks good only in bigger sizes.

### Images

The images in this project were sourced from [ShutterStock](https://www.shutterstock.com/). They were specifically selected to set up the vibe of the website and increase the aesthetic impact of the design.

### Visual Effects

#### Shadows
As the Home Page consists of the form with two input elements: a text field and a submit button. It was important to add volume and make them more appealing to engage, especially with such a bold and vibrant surroundings with plenty of neon glowing. 

#### Logo and Page Headings Gradient
Logo was sourced from a shutterstock image, edited by me to maintain the colour palette. Also it inspired the CSS neon frame. 

#### Neon frame
Initially the neon frame was a part of the background image, but it turned out to be a poor solution considering the required responsiveness. So the adaptive neon frame was implemented. Neon glowing effect was immitated by multiple shadows in CSS and the frame was established with a grid.  

#### Buttons and Hover Effects
There are two types of buttons: game buttons and navigation buttons. 
Game buttons offer hover over effect: it changes inset shadow colour to invite the user to engage and demonstrate that the elements are interactive.
Navigation buttons have subtle glowing animation at all times, as well as changing colour when being hoved over with the mouse.

#### Animated glowing
Animated glowing pulsating effect is used for headings and navigation buttons to create the neon aesthetics. The glowing is very subtle, so it does not compromise legibility. Keeping in mind that it might cause accessibility issues, the website includes a media query for people who prefer reduced motion. 

#### Loader
All pages are fitted with loaders(magenta dots on black background), because at many points the website interracts with external APIs and awaits for the data, which might take some time, it was decided to implement a loader to inform the user that something is in progress and the website is not broken. Moreover the slow fadeout effect provides a smooth aesthetical transition between pages even if we do not happen to see the loader running. 

#### Confetti burst
When the highscores modal appears it is celebrated with a confetti burst created with [Confetti](https://www.npmjs.com/package/canvas-confetti) JS library. 

#### Increment Score animation
When the score increments it is accompanied with a little burst of particles around the changing number. The effect is created with [Mo JS](https://mojs.github.io/) JS library.

#### Cursor
For all elements that can be clicked a custom cursor appears when being hovered over with the mouse.
___