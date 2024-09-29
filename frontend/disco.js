document.getElementById('discoToggle').addEventListener('change', function () {
    var discoBall = document.getElementById("discoBall");

    if (this.checked) {
        document.body.classList.add('disco-mode');
        discoBallRotate();
    } else {
        document.body.classList.remove('disco-mode');
        discoBall.innerHTML = ""; // Clear disco ball content
    }

});

function discoBallRotate() {
    // Calculate radius dynamically based on viewport size (e.g., 20% of the viewport width)
    var radius = Math.min(window.innerWidth, window.innerHeight) * 0.2;  
    var squareSize = radius * 0.1; // Adjust square size relative to the radius
    var prec = 19.55;
    var fuzzy = 0.001;
    var inc = (Math.PI - fuzzy) / prec;
    var discoBall = document.getElementById("discoBall");

    // Adjust the disco ball's position to the center of the viewport
    discoBall.style.position = "absolute";  
    discoBall.style.left = "50%";
    discoBall.style.top = "70%";
    discoBall.style.transform = "translate(-50%, -50%)"; // Center the disco ball

    // Clear previous disco ball tiles
    discoBall.innerHTML = ""; 

    for (var t = fuzzy; t < Math.PI; t += inc) {
        var z = radius * Math.cos(t);
        var currentRadius = Math.abs((radius * Math.cos(0) * Math.sin(t)) - (radius * Math.cos(Math.PI) * Math.sin(t))) / 2.5;
        var circumference = Math.abs(2 * Math.PI * currentRadius);
        var squaresThatFit = Math.floor(circumference / squareSize);
        var angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;
        
        for (var i = angleInc / 2 + fuzzy; i < (Math.PI * 2); i += angleInc) {
            var square = document.createElement("div");
            var squareTile = document.createElement("div");
            squareTile.style.width = squareSize + "px";
            squareTile.style.height = squareSize + "px";
            squareTile.style.transformOrigin = "0 0 0";
            squareTile.style.transform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
            
            if ((t > 1.3 && t < 1.9) || (t < -1.3 && t > -1.9)) {
                squareTile.style.backgroundColor = randomColor("bright");
            } else {
                squareTile.style.backgroundColor = randomColor("any");
            }

            square.appendChild(squareTile);
            square.className = "square";
            squareTile.style.animation = "reflect 2s linear infinite";
            squareTile.style.animationDelay = String(randomNumber(0, 20) / 10) + "s";
            squareTile.style.backfaceVisibility = "hidden";

            var x = radius * Math.cos(i) * Math.sin(t);
            var y = radius * Math.sin(i) * Math.sin(t);
            square.style.transform = "translateX(" + Math.ceil(x) + "px) translateY(" + y + "px) translateZ(" + z + "px)";
            discoBall.appendChild(square);
        }
    }

    function randomColor(type) {
        var c;
        if (type == "bright") {
            c = randomNumber(130, 255);
        } else {
            c = randomNumber(110, 190);
        }
        return "rgb(" + c + "," + c + "," + c + ")";
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// Optional CSS to prevent overflow and center the disco ball
document.body.style.overflow = 'hidden'; // Prevent scrollbars
