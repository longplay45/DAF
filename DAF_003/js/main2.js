/*

    DAF Display - Copyleft & -right 2023 by IN5O.

*/

let lyrics_DAF = `KUNSTSTOFF.
ALLES IST KUNST.
ALLES AN DIR IST KUNST.
DU BIST SO PLASTISCH.
UND SCHMECKST WEM GUT.
DEIN KÖRPER IST SO KÜNSTLICH.
UND DIE FRUCHT IN DEINEM LEIB SO KUNSTVOLL.
PLASTISCH.
DEUTSCHLAND, DEUTSCHLAND, ALLES IST VORBEI.
DEIN GESICHT IST SO ELASTISCH.
ALLES AN DIR IST KUNSTSTOFF.
SPIELZEUG AUS SILBER SPIELZEUG AUS GOLD.
DER STOFF AUS DEM DIE KUNST IST.
DU BIST DER ABFALL.
DENN DU BIST KUNSTSTOFF.
DEIN LEBEN IST SO KÜNSTLICH.
WEIL DU EIN KÜNSTLER BIST.
DRÜCK DICH AN MICH.
SO FEST WIE DU KANNST.
KÜSS MICH.
VERLIER MICH BITTE NICHT.
KÜSS MICH, MEIN LIEBLING.
ALS WÄR' ES DAS LETZTE MAL.
BITTE TU SO, ALS WÄR'S DAS LETZTE MAL.
SO VIEL WIE DU KANNST.
GIB MIR SO VIEL WIE DU KANNST.
LIEBE MICH, MEIN LIEBLING.
ALS WÄR'S DAS LETZTE MAL.
GLAUB MIR, MEIN LIEBLING.
ICH LIEB DICH, MEIN LIEBLING.
GIB MIR DEINE KÜSSE.
LIEB MICH.
OH, LIEB MICH.
SCHNELL.
SO VIEL WIE DU KANNST.
DRÜCK DICH FEST AN MICH.
LIEBLINGS, LIEBE MICH.
OH, LIEBE MICH.
LIEBE MICH MEIN LIEBLING.
O, KINDER.
O, KINDER SIND GRAUSAM.
KINDER BRAUCHEN GOLD.
KINDER BRAUCHEN SILBER.
O, GEBT UNS UNSER GOLD.
GEBT UNS GOLD.
O, GEBT UNS GOLD.
O, GEBT UNS SPIELZEUG.
O, SCHÖNES SPIELZEUG.
UNSERE KLEIDUNG IST SO SCHWARZ.
UNSERE STIEFEL SIND SO SCHWARZ.
LINKS DEN ROTEN BLITZ.
RECHTS DEN SCHWARZEN STERN.
UNSER TANZ IST SO WILD.
KEBAB.
RECHTS DEN ROTEN BLITZ.
UND LINKS DEN SCHWARZEN STERN.
ALLE GEGEN ALLE.
UNSERE FARBEN SIND SO GRELL.
UNSERE SCHREIE SIND SO LAUT.
EIN NEUER BÖSER TANZ.
UNSERE STIEFEL SIND SO SCHÖN.
UNSER TANZ IST VOLLER MACHT.
LINKS DEN BLITZ.
UND RECHTS DEN STERN.
UND RECHTS DEN SCHWARZEN STERN.
ALS WÄR' ES DAS LETZTE MAL, OH LIEBLING.
SO VIEL WIE DU KANNST, SO VIEL WIE DU KANNST.
ICH UND ICH IM WIRKLICHEN LEBEN.
ICH UND ICH IN DER WIRKLICHKEIT.
ICH UND ICH IN DER ECHTEN WELT.
ICH FÜHLE MICH SO SELTSAM.
DIE WIRKLICHKEIT KOMMT.
KEBABTRÄUME IN DER MAUERSTADT.
TÜRK-KÜLTÜR HINTER STACHELDRAHT.
NEU-IZMIR IST IN DER DDR.
ATATÜRK DER NEUE HERR.
MILIYET FÜR DIE SOWJET-UNION.
IN JEDER IMBISSSTUBE EIN SPION.
IM ZK AGENT AUS TÜRKEI.
DEUTSCHLAND, DEUTSCHLAND, ALLES IST VORBEI.
WIR SIND DIE TÜRKEN VON MORGEN.
SCHÖN UND JUNG UND STARK.
DU BIST SCHÖN UND JUNG UND STARK.
NIMM DIR WAS DU WILLST.
SOLANGE DU NOCH KANNST.
VERSCHWENDE DEINE JUGEND.
TU WAS DU WILLST.
DU BIST SCHÖN.
UND DU BIST JUNG.
UND NIMM DIR WAS DU WILLST.
SOLANGE DU NOCH JUNG BIST.
DU BIST JUNG.
UND DU BIST STARK.`


let lyrics_TN = `ICH TANZ DIE GANZE NACHT ALLEIN.
GANZ ALLEIN.
EINS, ZWEI, DREI, VIER, FÜNF, SECHS, SIEBEN, ACHT.
EINS, ZWEI, DREI, VIER.
FÜNF, SECHS, SIEBEN, ACHT.
ALLEIN.
ALLES ANALOG.
PAUL WAR MAL PUNK.
ALLES FÜR DAS DOSENBIER.
ALLES FÜR DEN STRASSENKAMPF.
ALLES FÜR DIE ANARCHIE.
FRISST BILLIGTIER UND MACHT AUF STARK.
ALLES FÜR DAS DOSENBIER.
ES IST VORBEI.
DESTRUCTION.
WER WILL NOCHMAL 18 SEIN?
ICH VOR EUREM GARTENZAUN.
MONTANA FÜR DIE DEUTSCHE BAHN.
HOLIDAYS IN AMSTERDAM.
MUTTI HAT DEIN POT GEFUNDEN.
ICH WILL KEINE MIETE ZAHLEN.
ICH RUF GLEICH DIE POLIZEI.
ICH HAB RÜCKEN, ICH HAB STEISS.
SCHWARZE SCHUHE, NEONLICHT.
SCHWARZE BRILLE, GEGENLICHT.
UND JEDER MIT JEDEM.
UND ALLE GEGEN ALLE.
BERLIN IN DER NACHT, DU WIRST MEHR ZU 0815.
SIE KAMEN WIE FLIEGEN MIT IHREM GELD ÜBER NACHT.
PANIK.
GROSSRAUMBÜRO.
ESSEN AUS PLASTIK.
WINDSTÄRKE 12.
DER KAUGUMMI AN DEINEM SCHUH.
ICH MUSS RAUS AUS DIESER STADT.
DIESE STADT SIE MACHT MICH KRANK.
DIESE STADT, ICH MACH SIE PLATT.
ICH HAB SIE SATT, ICH FACKEL SIE AB.
DOLCE VITA IN ITALIA.
EINS WILL GESAGT SEIN.
SCHILLER IS NOT THE KILLER.
KIFFEN IST KRIMINELL.
WHO YOU LOVE IS WUNDERBAR.
NIEMAND BRAUCHT VERMIETER.
BIER AUS PLASTIKFLASCHEN.
JEDER FÜR SICH.
OHNE DICH.`

let lyrics = lyrics_DAF + lyrics_TN

let data
let usedIndices = []
let sentences = []
let sentence = "PAUL WAR MAL PUNK."
let displaytime = 15000 // Milliseconds
let font_size = 72
let minFontSize = 10 
let maxFontSize = 720 
let border_left = 30
let border_bottom = font_size - font_size * 0.2
let currentLength = 0 
let typingSpeed = 0.1
let cursorVisible = true; 
let cursorBlinkRate = 30; // Blink rate (number of frames per blink)
let displaySentence = true; // Global variable to black-out the display
let cursorHidden = false;
let currentLyricsSet = 'DAF';

function updateSentence() {
    // Depending on the currentLyricsSet, update the sentences array
    if (currentLyricsSet === 'DAF') {
        sentences = lyrics_DAF.split('\n').filter(line => line.length > 0);
    } else if (currentLyricsSet === 'TN') {
        sentences = lyrics_TN.split('\n').filter(line => line.length > 0);
    } else {
        sentences = lyrics.split('\n').filter(line => line.length > 0);
    }

    sentence = getRandomSentence();
    adjustTextSize();
    displaytime = random(10000, 50000);
    currentLength = 0;
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

    if (font_size > maxFontSize) font_size = maxFontSize

    textSize(font_size)
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    sentences = lyrics.split('\n').filter(line => line.length > 0);
    setInterval(updateSentence, displaytime)
    adjustTextSize()
    textStyle(BOLD)
}

function draw() {
    if (currentLength == 0) adjustTextSize();
    background(0);

    if (displaySentence) {
        fill(255, 255, 255);
        textSize(font_size);

        let displayText = sentence.substring(0, currentLength);
        text(displayText, border_left, windowHeight - border_bottom);

        if (currentLength < sentence.length) {
            currentLength += typingSpeed; // Increase by a constant amount each frame
            cursorVisible = true; // Keep the cursor visible while typing
        } else {
            // Blinking cursor effect
            if (frameCount % cursorBlinkRate === 0) {
                cursorVisible = !cursorVisible; // Toggle cursor visibility
            }
        }

        if (cursorVisible) {
            draw_cursor(displayText);
        }
    }
}

function draw_cursor(displayText) {
    textSize(font_size); // Ensure the font size is set correctly
    let cursorX = textWidth(displayText) + border_left;
    let cursorY = windowHeight - border_bottom;

    fill(255, 0, 0); // Set cursor color (white for visibility)
    noStroke(); // No border for the cursor

    textStyle(NORMAL); 
    text('|', cursorX, cursorY);
    textStyle(BOLD); 
}

function windowResized() {
    adjustTextSize()
    resizeCanvas(windowWidth, windowHeight)
}


function keyPressed() {
    console.log('pressed');
    if (key === 'B' || key === 'b') {
        displaySentence = !displaySentence;
    } else if (key === 'c' || key === 'C') {
        cursorHidden = !cursorHidden;
        cursorHidden ? noCursor() : cursor();
    } else if (key === '1') {
        currentLyricsSet = 'DAF';
        updateSentence();
    } else if (key === '2') {
        currentLyricsSet = 'TN';
        updateSentence();
    } else if (key === '3') {
        currentLyricsSet = 'both';
        updateSentence();
    }
}