# Pre-work - _Memory Game_

**Memory Master** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Stephanie De Leon**

Time spent: **11** hours spent in total

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Informs the player when they have a strike!
- [x] Added hover features on the buttons.
- [x] Added 5 seconds to the timer after the player makes a mistake (to make up for interruption).

## Video Walkthrough

Here's a walkthrough of implemented user stories:

|                                            Win                                             |
| :----------------------------------------------------------------------------------------: |
| ![](https://cdn.glitch.com/bc0d0ba8-ca45-4100-83f6-c7dbf1b7c24c%2Fwin.gif?v=1614927261913) |

|                                      Lose - Run out of time                                      |                                       Lose - Exceeded strikes                                       |
| :----------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: |
| ![](https://cdn.glitch.com/bc0d0ba8-ca45-4100-83f6-c7dbf1b7c24c%2Flose-time.gif?v=1614927253003) | ![](https://cdn.glitch.com/bc0d0ba8-ca45-4100-83f6-c7dbf1b7c24c%2Flose-strikes.gif?v=1614927272587) |

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

  - For HTML, CSS, and JavaScript, I read W3Schools.com
  - For implementing the countdown timer, I utilized a YouTube Tutorial (https://youtu.be/x7WJEmxNlEs), as well as the given links in the prework.md

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

  - I encountered quite a few challenges in implementing the optional features. In adding images to the game buttons when they clicked, I first used the hidden class created for the Start & Stop buttons. But when clicked, it would go a couple of pixels down the screen. I was able to fix this by implementing a new class called conceal, which set the image’s opacity to 0 instead of setting the display to none. Another challenge I had was implementing the countdown timer. I struggled in figuring out how to display it on the page while changing its values in JavaScript and the logic itself. With this, I watched a YouTube tutorial on how to code a timer in JavaScript and then restructured it to better fit game mechanics (such as just counting down in seconds and not in minutes). Although after tinkering around with the program, I realized that the seconds become negatives after surpassing 0. Using the conditional operator, I added a check that if the timeLeft is less than 0, it would just make timeLeft equal to 0. If it is greater than 0, it will set timeLeft with its value. After overcoming this, I faced another problem. The timer starts but never resets back to 10 seconds even after the player has answered correctly; thus, ending the game quickly. To resolve this issue, I added a resetTimer function which changes the timeLeft back to 10 seconds after the player answers correctly in the guess function. Additionally, while testing the program, I noticed that sometimes the buttons would lose their sounds. I thought it was a glitch, so I just kept refreshing the program. When it continued to happen, I decided to check the warnings in developer tools. I also read Chrome’s documentation to learn that the audio context needed to be resumed. I then added context.resume() to the startTone function. Lastly, throughout the project, I utilized log statements to help me debug.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

  - After completing this submission, I developed a few curiosities. I am curious about how front-end and back-end codes will come together at the end for deployment. During this project, we learned about the front-end. Now I am interested in learning how to implement the back-end code for this program. I would love to know more about how they work together. I also want to explore more about implementing web accessibility. What are some tips in designing and developing a website so that people with disabilities may use them? Also, I want to find out more about dynamic websites, its difference from static websites, and their essential features. I also want to get more info about what affects a website’s load time. What are the ways to increase and maintain its speed? And what can make it slow down? Lastly, I want to know what differentiates a great website from others. What are the features that make a website exceptional?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

  - If I had a few more hours to work on this project, I would add levels. The user would be able to choose what level of difficulty they would want to attempt. As the level increases, the pattern lengthens, the time to answer decreases, and the sequence will play faster. In addition, for informing the player of their number of strikes. I would implement a tally at the top right corner of the game box instead of an alert message. As a result, it won’t disrupt the game and simply inform the player. I may also remove the alert messages and code a better pop-up message for when the player wins or loses. I can achieve this by styling my own pop-up message. Furthermore, when a player makes a mistake, a buzzer sound will play when they click on the wrong button. I would add this by probably importing a buzzer sound and override the button's original tune. It would also be nice to have patterns that make a song, instead of using Math.random(). I would probably upload data with song patterns that the program will randomly choose. If this was added, I would also add an extra challenge to the player to guess the song that was played. Lastly, I would make this website mobile-friendly, so users can play no matter where they go. I would make the buttons smaller when the window reaches a certain dimension.

## License

    Copyright [Stephanie De Leon]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
