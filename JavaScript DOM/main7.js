"use strict"

// case 1
const paragraph = document.getElementById('paragraph');

function highlightLongWords() {
    const words = paragraph.innerHTML.split(' ');
    const highlightedWords = words.map(word => {
        if (word.length > 8) {
            return `<span class="highlight">${word}</span>`;
        }
        return word;
    });
    paragraph.innerHTML = highlightedWords.join(' ');
}

const style = document.createElement('style');
style.innerHTML = `
    .highlight {
        background-color: yellow;
    }
`;
document.head.appendChild(style); 
highlightLongWords();

//case 2
function addSourceLink() {
    const sourceLink = document.createElement('a');
    sourceLink.href = 'https://google.com/';
    sourceLink.textContent = 'Source';
    paragraph.parentNode.appendChild(sourceLink); // Append after the paragraph
}

addSourceLink();



//case 3
function splitSentences() {
    const sentences = paragraph.innerHTML.split('. ');
    paragraph.innerHTML = sentences.join('.<br><br>'); // Add line breaks after each sentence
}

splitSentences();


//case 4
function displayWordCount() {
    const wordCount = paragraph.innerText.split(' ').length;
    const heading = document.querySelector('h1');
    const wordCountDisplay = document.createElement('p');
    wordCountDisplay.textContent = `Word count: ${wordCount}`;
    heading.parentNode.insertBefore(wordCountDisplay, heading.nextSibling); // Insert after heading
}

displayWordCount();




