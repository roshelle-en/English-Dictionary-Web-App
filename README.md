📚 English Dictionary Web App

A simple and responsive web-based dictionary application that allows users to search for English word definitions, pronunciations, synonyms, antonyms, and example sentences using the Dictionary API
.

✨ Features

Word Search: Enter a word in the search box and click the Search button or press Enter to retrieve its details.

Multiple Meanings: Displays all meanings of a word, organized by part of speech (noun, verb, etc.) with numbered definitions.

Pronunciation: Shows phonetic transcription and plays an audio pronunciation via a clickable speaker icon.

Synonyms & Antonyms: Lists synonyms and antonyms for each meaning (when available).

Example Sentences: Displays example sentences for definitions (if provided).

Loading Indicator: Shows a Loading… animation while fetching data.

Error Handling: Displays a clear error message if the word is not found or the API request fails.

Responsive Design: Works smoothly on desktops, tablets, and mobile devices.

Interactive UI: Hover effects on buttons and search icon enhance user experience.

🛠 Technologies Used

HTML: Structures the webpage with a search box, audio element, and results display.

CSS: Provides a clean, modern design using Poppins font (Google Fonts) and Font Awesome icons.

JavaScript: Handles API requests, dynamic content rendering, and audio playback.

Dictionary API: Fetches word data from Dictionary API
.

Font Awesome: Icons for search button and audio playback.

Google Fonts: Poppins font for typography.

⚡ Setup Instructions

Clone the Repository:

git clone https://github.com/roshelle-en/English-Dictionary-Web-App.git
cd English-Dictionary-Web-App


Project Structure:

dictionary-web-app/
├── dictionary.html
├── background.css
├── wordsearch.js


Run the App:

Open dictionary.html in a modern web browser (Chrome, Firefox, Edge).

No server or additional dependencies required — everything runs client-side using external CDNs.

🌐 Usage

Open dictionary.html in your browser.

Type a word (e.g., "book" or "run") in the input field.

Click Search or press Enter.

View details:

✅ Phonetic pronunciation and audio (if available)

✅ Multiple meanings with parts of speech

✅ Example sentences (if provided)

✅ Synonyms and antonyms (if available)

Click the speaker icon to hear pronunciation.

If the word is not found, an error message will display.

⚠️ Notes

The Dictionary API may not provide audio, examples, or synonyms/antonyms for all words.

Check the browser console (Right-click → Inspect → Console) for debugging API responses or errors.

The app works offline for static content, but an internet connection is required for API requests.

🤝 Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Suggestions for additional features like search history or dark mode are welcome!
