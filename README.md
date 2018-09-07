Langauge Translator:
HMTL:
<!-- Card Title: Create HTML  -->

User Story: The user should see the following on the page <H1> Holiday Card  Message Maker, textarea, 3 buttons (elements) with each containing a different language, and one final empty element that will display their desired personalized message.
HTML page will contain 6 elements and 4 divs:
-H1 div class=heading
-textarea div class=perMsg
-button 1 (German) div class=langButtons
-button 2 (French)
-button 3 (Spanish)
-empty element  div class=newMsg

Dev Notes:
-Create H1 -centered
-Create textarea- centered
-create 3 buttons with languages displayed on them (space between flex in a row centered below textarea element
1. German
2. French
3.Spanish


Acceptance:
When the user types in their desired msg and
clicks a button their message will translate and text will appear on the DOM in the empty (element).


<!-- Card Title: Create Buttons and placeholder for JS -->

User Story: User should see 3 buttons with language choices displayed

Dev Notes:
Create 3 buttons in div class=langButtons

Acceptance Criteria:
The buttons should be on page and display correct language on them.

<!-- Card Title: CSS -->

User Story:  User should see the following styling
H1 centered
Textarea centered.
The user should see 3 centered buttons.
Empty Element centered.

Dev Notes:
Link main.css to html file

Acceptance Criteria:
The css should make html page look like mockup (see attached)

<!-- Card Title: JS Functions -->

User Story: When a user clicks on one of the buttons on the html page the function linked to that element will run and the outcome will be the translated message to be printed in the empty DOM element with the class=newMsg.

Dev Notes:
-Create functions
-Link main.js to html

Acceptance Criteria:
Test each button on html page that is produces the desired language to the empty DOM element with the class=newMsg