Dictionary Web App

A simple and responsive web-based dictionary application that allows users to search for English word definitions, pronunciations, synonyms, antonyms, and examples using the Dictionary API.

Features





Word Search: Enter a word in the search box and click the "Search" button or press Enter to retrieve its details.



Multiple Meanings: Displays all meanings of a word, organized by part of speech (e.g., noun, verb), with numbered definitions.



Pronunciation: Shows phonetic transcription and plays an audio pronunciation (if available) via a clickable speaker icon.



Synonyms and Antonyms: Lists synonyms and antonyms for each meaning, when provided by the API.



Example Sentences: Displays example sentences for definitions, if available.



Loading Indicator: Shows a "Loading..." animation while fetching data from the API.



Error Handling: Displays a clear error message if the word is not found or the API request fails.



Responsive Design: Adapts to different screen sizes, ensuring usability on desktops, tablets, and mobile devices.



Interactive UI: Includes hover effects on buttons and a search icon for better user experience.

Technologies Used





HTML: Structures the webpage with a search box, audio element, and result display.



CSS: Styles the app with a clean, modern design using the Poppins font (via Google Fonts) and Font Awesome icons.



JavaScript: Handles API requests, dynamic content rendering, and audio playback.



Dictionary API: Fetches word data from https://api.dictionaryapi.dev/api/v2/entries/en/.



Font Awesome: Provides icons for the search button and audio playback.



Google Fonts: Uses the Poppins font for typography.

Setup Instructions





Clone the Repository:

git clone [https://github.com/your-username/dictionary-web-app.git](https://github.com/roshelle-en/English-Dictionary-Web-App.git)
cd dictionary-web-app



Project Structure: Ensure the following files are in the project folder:

dictionary-web-app/
├── dictionary.html
├── background.css
├── wordsearch.js



Run the App:





Open dictionary.html in a modern web browser (e.g., Chrome, Firefox, Edge).



No server or additional dependencies are required, as the app runs client-side and uses external CDNs for fonts and icons.



Dependencies:





Internet connection is required to fetch data from the Dictionary API and load external resources (Font Awesome, Google Fonts).



No local installations or build tools are needed.

Usage





Open dictionary.html in a browser.



Type a word (e.g., "book" or "run") in the input field.



Click the "Search" button or press Enter.



View the word’s details, including:





Phonetic pronunciation and audio (if available).



Multiple meanings with definitions and parts of speech.



Example sentences (if provided).



Synonyms and antonyms (if available).



Click the speaker icon to hear the pronunciation (if audio is available).



If a word is not found, an error message will display.

Notes





The Dictionary API may not provide audio, examples, or synonyms/antonyms for all words.



Check the browser console (right-click > Inspect > Console) for debugging API responses or errors.



The app is lightweight and works offline for static content, but an internet connection is needed for API requests.

Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Suggestions for additional features (e.g., search history, dark mode) are welcome!
