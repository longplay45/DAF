/*

    DAF Display - Copyleft & -right 2023 by IN5O.

*/

let data
let usedIndices = []
let sentences = []
let sentence = "PAUL WAR MAL PUNK."
let displaytime = 15000 // Milliseconds
let font_size = 72
let minFontSize = 10 // Minimum font size
let maxFontSize = 240 // Maximum font size to prevent infinite loop
let border_left = 20
let border_bottom = font_size - font_size * 0.2
let currentLength = 0 // Ttrack the number of characters displayed
let typingSpeed = 0.1 // Characters per frame
let typingSpeedRange = [0.1, 0.2]
let cursorVisible = true; // Variable to track the cursor's visibility
let cursorBlinkRate = 30; // Blink rate (number of frames per blink)


function loadData() {
    let url = "data/lyrics.txt"
    loadStrings(url, gotData)
}

function gotData(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].length > 0) {
            sentences.push(data[i])
        }
    }
    const textLengths = sentences.map(sentence => sentence.length)
}

function updateSentence() {
    sentence = getRandomSentence()
    adjustTextSize()
    currentLength = 0 // Reset the current length for the typewriter effect
}

function getRandomSentence() {
    let index
    do {
        index = Math.floor(Math.random() * sentences.length)
    } while (usedIndices.includes(index))

    usedIndices.push(index)

    // Reset if all sentences have been used
    if (usedIndices.length === sentences.length) {
        usedIndices = []
    }

    return sentences[index]
}

function adjustTextSize() {
    let targetWidth = windowWidth - (4 * border_left) // 95% of window width

    font_size = minFontSize // Start with minimum font size
    textSize(font_size)

    while (textWidth(sentence) < targetWidth && font_size < maxFontSize) {
        font_size++
        textSize(font_size) // Update the text size for measurement
    }

    if (font_size > maxFontSize) {
        font_size = maxFontSize // Ensure font size doesn't exceed max limit
    }

    textSize(font_size) // Set the final calculated font size
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    loadData()
    setInterval(updateSentence, displaytime)
    adjustTextSize()
}

function draw() {
    if (currentLength == 0) adjustTextSize()
    background(0)
    fill(255, 255, 255)
    textSize(font_size)

    // Typewriter effect
    let displayText = sentence.substring(0, currentLength);
    text(displayText, border_left, windowHeight - border_bottom);

    if (currentLength < sentence.length) {
        // Randomly vary the typing speed
        let randomSpeed = random(typingSpeedRange[0], typingSpeedRange[1]);
        currentLength += randomSpeed; // Increase the number of characters displayed
        cursorVisible = true; // Keep the cursor visible while typing
    } else {
        // Blinking cursor effect
        if (frameCount % cursorBlinkRate === 0) {
            cursorVisible = !cursorVisible; // Toggle cursor visibility
        }
    }

    // Draw cursor
    let cursorX = textWidth(displayText) + border_left * 1.75
    let cursorY = windowHeight - border_bottom + 10
    if (cursorVisible) {
        fill(255, 0, 0); // Set cursor color (red)
        noStroke(); // No border for the cursor

        let cursorWidth = 5; // Width of the cursor
        let cursorHeight = font_size; // Height of the cursor
        rect(cursorX, cursorY - cursorHeight, cursorWidth, cursorHeight);
    }
}


function draw1() {
    if (currentLength == 0) adjustTextSize()
    background(0)
    fill(255, 255, 255)
    textSize(font_size)

    // Typewriter effect
    let displayText = sentence.substring(0, currentLength);
    text(displayText, border_left, windowHeight - border_bottom);

    if (currentLength < sentence.length) {
        currentLength += typingSpeed; // Increase the number of characters displayed
        cursorVisible = true; // Keep the cursor visible while typing
    } else {
        // Blinking cursor effect
        if (frameCount % cursorBlinkRate === 0) {
            cursorVisible = !cursorVisible; // Toggle cursor visibility
        }
    }

    // Draw cursor
    let cursorX = textWidth(displayText) + border_left * 1.75
    let cursorY = windowHeight - border_bottom + 10
    if (cursorVisible) {
        fill(255, 0, 0); // Set cursor color (white)
        noStroke(); // No border for the cursor

        let cursorWidth = 5; // Width of the cursor (adjust as needed)
        let cursorHeight = font_size; // Height of the cursor
        rect(cursorX, cursorY - cursorHeight, cursorWidth, cursorHeight);
    }
}

function windowResized() {
    adjustTextSize()
    resizeCanvas(windowWidth, windowHeight)
}
