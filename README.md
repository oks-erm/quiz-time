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

The project's design springs from the easthetics of gaming machines, because setting a quiz in more obvious pub settings seemed not acceptable for some groups of potential players. A pub setting does not seem very appropriate for younger players, religious and ethnic groups, whose customs disaprove of alcohol and pubs by assosiation. To make it apealing for broader audience a more neutral solution was opted for. 

### Colour Scheme

![Palette](assets/images/readme/palette.png)
Colour scheme is inspired by neon signs and neon glowing effects are used throughout the website. Shades of magenta and blue are bold and cheerful balanced out with deep black-blue and pastel light blue and grey. 

#### **Shades of Whitesmoke** 
represent calm, air and light; two shades are used for volume effect.  
> ![white1](assets/images/readme/white1.png) #efefef (Background Colour, Text Colour on dark background);

> ![white2](assets/images/readme/white2.png) #f8f8f8 (Background Colour, Borders). 

#### **Shades of Charcoal Grey** 
are cool, neutral and balanced, just like Sofing wants its practitioners to be. It is also known as a sophisticated colour. It is used to bring some contrast and draw attention to the ethos block on the home page. Several shades are used to avoid excessive contrast and heavy headings but provide accessibility. 
> ![grey2](assets/images/readme/grey2.png) #333333 (Background Colour);

> ![grey3](assets/images/readme/grey3.png) #515151 (Default Text Colour);

> ![grey1](assets/images/readme/grey1.png) #6a6a6a (Headings, Borders).

#### **Coral** 
represents friendliness, cheerfulness and boldness. Moreover, it seems to be one of the typical sofa colours and it refers to the [famous couch from Friends tv series](https://www.texomashomepage.com/wp-content/uploads/sites/41/2019/09/friends-orange-couch.jpg).
> ![coral](assets/images/readme/coral.png) #e06666 (Background Colour).

#### **Reef**  
represents trust and tranquillity. In fact, [57% of men and 35% of women say blue is their favourite colour](https://ceblog.s3.amazonaws.com/wp-content/uploads/2018/03/24214633/website-color-palettes-35.png), it is the most common “favourite” colour among the majority of the population. So, as I want to appeal to a broad audience, I decided to implement it.
> ![reef](assets/images/readme/reef.png) #a6ceef (Background Colour, Buttons, Hover effects, Gradient for Logo and Headings).

### Typography

[Koulen](https://fonts.google.com/specimen/Koulen) was intended to be used for logo and headings, however, it turned out to be too loud and intense if used for all headings, and also it compromised the legibility of many headings. Therefore, it was decided to limit its implementation and prefer softer and more neutral font for most of the headings throughout the website.

[Montserrat](https://fonts.google.com/specimen/Montserrat) was chosen for this purpose. It is neutral and easy to read. 

[Lato](https://fonts.google.com/specimen/Lato) was chosen for body text as it is light and easy to read.

### Images

The images in this project were sourced from [Unsplash](https://unsplash.com/) and [iStock](https://www.istockphoto.com). They were specifically selected to correlate with the main website colour palette and increase the aesthetic impact of the design.

### Visual Effects

#### Shadows
As the Home Page consists of multiple colourful overlapping blocks, it was important to add volume and make the content easier to perceive so the viewer's eye doesn't have to focus on understanding spatial relationships between elements, which might be daunting. However, to provide better performance on mobile devices, it was implemented only for screens larger than 992px.


#### Logo and Page Headings Gradient
Sofing movement does not have a logo at the moment. Hence, the text logo was established. Although the font provided the style, it still looked rather bland, flat and intensively dull in default text colours and illegible or inappropriate when executed in colours. Thus, it was decided to implement a gradient of [Charcoal](#shades-of-charcoal-grey) and [Reef](#reef). A similar gradient was later applied to the Philosofy Page Heading and the Meetups Page Heading, but based on [Coral](#coral), to maintain the colour palette.   

#### Blocks with CTA
Each block of the Home Page that we want users to interact with and that contains a Call To Action, such as "join the club" or "follow the link", slightly grows (3%) whilst hovered over with a mouse. It provides a stimulating visual effect and draws users' attention even if hovered over with a mouse by accident whilst scrolling. The effect was implemented only for screens larger than 992px to provide better performance on mobile devices.  

#### Buttons
Each button offers a similar growing effect described above combined with a change of its background colour: it is blue by default, and it turns subtle green hovered over with a mouse. The green colour was opted for because it is known to be the [best colour for effective CTA buttons](https://www.wordstream.com/blog/ws/2015/02/20/call-to-action-buttons). To provide better performance on mobile devices, it was implemented only for screens larger than 992px.

#### Links
Due to the bold design and abundance of content on the Home Page, it seemed to be necessary to draw additional attention to the links. When being hovered over with a mouse, links change the text colour and the background colour (depending on the parent block design), and the change is executed with an animated effect - "running" from left to right. To provide better performance on mobile devices, it was implemented only for screens larger than 992px.

#### Navbar Hover effect
The navbar includes a hover-over effect to make the experience more interactive and navigation more intuitive. When the user engages with the link or hovers over the link, its background colour changes to light blue to subtly highlight the item without compromising legibility.
___