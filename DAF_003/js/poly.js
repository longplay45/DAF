let rectX, rectY, rectWidth, rectHeight;
let handlesSize = 10;
let dragging = false;
let currentHandle = null;
let vertices = [];
let currentVertex = -1;
let vertexRadius = 10;
let showHandles = true;
let flickering = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectX = width / 2 - 50;
    rectY = height / 2 - 50;
    rectWidth = 100;
    rectHeight = 100;

    vertices.push(createVector(width / 2 - 50, height / 2 - 50));
    vertices.push(createVector(width / 2 + 50, height / 2 - 50));
    vertices.push(createVector(width / 2 + 50, height / 2 + 50));
    vertices.push(createVector(width / 2 - 50, height / 2 + 50));

}

function draw() {
    background(0);

    if (flickering) {
        if (random(1) < 0.9) {
            shapeColor = color(255, 0, 0); // Red
        } else {
            shapeColor = color(255); // White
        }
    } else {
        shapeColor = color(255, 0, 0); // Red
    }


    // Draw the polygon with the current color
    fill(shapeColor);
    beginShape();
    vertices.forEach(v => vertex(v.x, v.y));
    endShape(CLOSE);

    // Draw the vertices
    if (showHandles) {
        fill(0, 255, 0);
        vertices.forEach(v => {
            ellipse(v.x, v.y, vertexRadius * 2);
        });
    }

}

function mousePressed() {
    for (let i = 0; i < vertices.length; i++) {
        if (dist(mouseX, mouseY, vertices[i].x, vertices[i].y) < vertexRadius) {
            currentVertex = i;
            break;
        }
    }
}

function mouseDragged() {
    if (currentVertex > -1) {
        vertices[currentVertex].x = mouseX;
        vertices[currentVertex].y = mouseY;
    }
}

function mouseReleased() {
    currentVertex = -1;
}

function keyPressed() {
    if (key === 'A' || key === 'a') {
        // Add a new vertex at the mouse position
        vertices.push(createVector(mouseX, mouseY));
    } else if (key === 'D' || key === 'd') {
        // Remove the last vertex
        if (vertices.length > 3) {
            vertices.pop();
        }
    } else if (key === 'E' || key === 'e') {
        // Toggle the visibility of handles
        showHandles = !showHandles;
    } else if (key === 'F' || key === 'f') {
        // Toggle the visibility of handles
        flickering = !flickering;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Resize canvas when window is resized
}