const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
const inpWord = document.getElementById("inp-word");
const loader = document.getElementById("loader");

function searchWord() {
    let word = inpWord.value.trim();
    if (!word) return;

    result.innerHTML = "";
    loader.style.display = "block";
    btn.disabled = true;

    fetch(`${url}${word}`)
        .then((response) => {
            if (!response.ok) throw new Error("Word not found");
            return response.json();
        })
        .then((data) => {
            console.log(data);
            let html = `<div class="word">
                            <h3>${word}</h3>`;

            const audioSrc = data[0].phonetics.find(p => p.audio)?.audio;
            if (audioSrc) {
                sound.setAttribute("src", `https:${audioSrc}`);
                html += `<button onclick="playSound()">
                            <i class="fas fa-volume-up"></i>
                         </button>`;
            }
            html += `</div>
                     <div class="details">
                         <p>${data[0].meanings[0].partOfSpeech || ""}</p>
                         <p>/${data[0].phonetic || ""}/</p>
                     </div>`;

            data[0].meanings.forEach((meaning, index) => {
                html += `<h4>Meaning ${index + 1} (${meaning.partOfSpeech})</h4>`;
                
                meaning.definitions.forEach((def) => {
                    html += `<p class="word-meaning">${def.definition}</p>`;
                    if (def.example) {
                        html += `<p class="word-example">${def.example}</p>`;
                    }
                });

                if (meaning.synonyms && meaning.synonyms.length > 0) {
                    html += `<p class="details">Synonyms: ${meaning.synonyms.join(", ")}</p>`;
                }
                if (meaning.antonyms && meaning.antonyms.length > 0) {
                    html += `<p class="details">Antonyms: ${meaning.antonyms.join(", ")}</p>`;
                }
            });

            result.innerHTML = html;
        })
        .catch((error) => {
            result.innerHTML = `<h3 class="error">${error.message || "Couldn't Find The Word"}</h3>`;
        })
        .finally(() => {
            loader.style.display = "none";
            btn.disabled = false;
        });
}

btn.addEventListener("click", searchWord);
inpWord.addEventListener("keyup", (e) => {
    if (e.key === "Enter") searchWord();
});

function playSound() {
    sound.play();
}