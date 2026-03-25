# Memory card game

It is a simple Memory game using React and Typescript. User can click every card without clicking the same one twice.

## Back ground of development

This was part of The Odin Project's React Course. 
Since I hadn’t done any serious front-end development for a few years, I took on this project to refresh my skills.
Since the main goal is to refresh my memory on how to write React code with Typescript, I’ve kept it simple and limited the features to the bare minimum.

### Topics I Caught Up On
#### React
 - useEffect
 - useReducer

#### Typescript
 - Explicitly specifying type parameters for useState

#### The others 
 - Card shuffle algorithm

## Demo
[Demo page](https://memory-card-top-pi.vercel.app/)

<img width="1509" height="1578" alt="スクリーンショット 2026-03-25 105100" src="https://github.com/user-attachments/assets/f68917a9-2b76-4417-b901-e0a61b2839f9" />


## Highlights
 - By using useReducer, I improved the readability of each component.
 - User knows whether game started or finished by START/STOP button, text message and result message alert.

## Features to be added
- After drawing all cards, all cards are refreshed, enabling a design that allows players to aim for higher scores.
- The first card set is maked from Pokemon ID 1 - 18. I think it will be more fun when these Pokemon IDs are selected randomly but unique in cards. 
- Responsive design.
