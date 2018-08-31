<!-- <p align="center"><img src="./assets/images/perceptionlogo.png" width=350px/></p> -->

<h1 align="center">SNIPPET</h1>

<!-- <h2 align="center">
  <a href="https://aguamenti.github.io/Perception/">Click to Play!</a>
</h2> -->

<p align="center">
  <a href="#background-and-overview">Background and Overview</a> •
  <a href="#functionality-and-minimum-viable-product">Functionality and MVP</a> •
  <a href="#technologies-and-technical-challenges">Technologies</a> •
  <a href="#weekend-accomplishments">Weekend Accomplishments</a> •
  <a href="#timeline">Timeline</a> •
  <a href="#marketing">Marketing</a>
</p>
<br>

<!-- <p align="center"><img src="./assets/images/shortanimationdemo.gif" width=700px/></p> -->

# Background and Overview
Snippet is a Chrome Web extension that aims to fulfill the curiosity cravings of every lifelong learner.  

Feel like you’ve hit a learning plateau? Want to be more well-rounded? Have you been looking for a convenient way to achieve this? Search no further! Snippet provides extracts of information from a variety of customizable categories to appear whenever you open a new tab. From vocabulary to biology, Snippet has you covered with easy-to-digest learnings that will keep your mind fresh with knowledge.

# Functionality and Minimum Viable Product

## Core Features
- [ ] Categories and data for the following categories: science, history, vocabulary, fun fact/miscellaneous (from Reddit TIL), top 5 NYT trending news stories (will be dynamically updating)
- [ ] Have the user customize the categories of Snippets they would like on their homepage
- [ ] Snippets are updated daily
- [ ] Ensure same content each day for a computer
- [ ] Google Earth images/National Geographic/etc. API for background behind the snippet

## Bonus Features
- Feature expansion
   - [ ] Widgets: todo, links, weather
   - [ ] News: dropdown to toggle NYT homepage news, national, business, tech, etc. specifics
- User customizable
  - [ ] Allow users to see their Snippet history (1)
  - [ ] Favorite capabilities (3)
  - [ ] Custom styling for their homepage (5)
- [ ] Styling
  - [ ] Before-loaded gray boxes (like on LinkedIn) (4)
  - [ ] Flippable vocab and brainteaser (2)
- [ ] Use external database (6)
  - [ ] Allow for users to submit snippets: form to send a link (ex.: a Wikipedia link) that will be curated if it fits a category

# Technologies and Technical Challenges
- JavaScript
- HTML5/CSS3
- Google Chrome API (Storage, ...)
- Reddit API
- News API
- Vocabulary API

# Weekend Accomplishments
- All team members completed sample Google Chrome extension
- Confirm feasibility of the following APIs:
  - Reddit (Extract TIL subreddit data)
  - New York Times API

# Timeline

## Weekend
- [X] Compile 15 Snippets for each category
- [X] Explore APIs to leverage for seed data for each category (esp. for the live news)
- [X] Do sample Google Chrome extension
- [X] Finalize proposal README.md

## Day 1: Setup, Seed
- Both
   - [X] Watch all Chrome Extension Tutorials
   - [X] Setup for Chrome extension (manifest, background, popup files)
- Amanda
  - [X] Design display page (that shows up on new tab or new window) to display snippets
  - [X] Make this display page pull from some sort of seed data for now
- Dustin
  - [X] Design preferences page for users (choose snippet categories)
  - [X] Make this page permanently store user preferences with Chrome Storage

## Day 2: TIL, News
- Dustin
  - [X] Create Reddit API requests for fetching TIL posts
- Amanda
  - [X] Create News API requests for top stories
- Both
  - [X] Connect display page to API calls

## Day 3: Vocab, Photos
- Amanda
  - [X] Finish News API with carousel transitioning
  - [ ] Vocab API
  - [ ] More history seed data
- Dustin
  - [ ] Add "Good morning/good afternoon/good evening, [customized name]!" message
  - [ ] More science seed data
- Both
  - [ ] Connect display to API calls

## Day 4: Brainteasers, Customized Message
- Amanda
  - [ ] Use riddle API for new functionality
  - [ ] Connect display to API calls
- Dustin
  - [ ] Finish customized message, initial settings page

## Day 5: History, Favorites
- Amanda
  - [ ] Add favorited functionality
- Dustin
  - [ ] Create local database with Google Chrome Storage to store old Snippets

## Day 6 (weekend): Day 5 cont., Widgets
- Both
  - [ ] Finish history/favorites work
- Amanda
  - [ ] Weather widget
- Dustin
  - [ ] Links, todo widgets

## Day 7 (weekend): Polish
- [ ] Both: polish seed data, and code
- [ ] Amanda: finalize design layout, design logo
- [ ] Dustin: push to Chrome store, production README

# Marketing
- [ ] Both members will each share with at least 15 friends and family members
- [ ] Get 18 users from App Academy
- [ ] Dustin will post on LinkedIn about it, Amanda will on Facebook
