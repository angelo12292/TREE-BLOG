// sound 
document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Seleziona l'elemento audio e avvia la riproduzione
        const audio = document.getElementById('audioPlayer');
        audio.play();
    });
});

// menu

document.addEventListener("DOMContentLoaded", function() {
    const treeIcon = document.querySelector(".tree-icon");
    const menuItems = document.querySelector(".menu-items");

    let rotated = false;

    treeIcon.addEventListener("click", function() {
        if (!rotated) {
            treeIcon.classList.add("rotate-icon");
            menuItems.classList.add("open");
        } else {
            treeIcon.classList.remove("rotate-icon");
            menuItems.classList.remove("open");
        }
        rotated = !rotated;
    });

    // Aggiungi un listener per chiudere il menu quando si fa clic al di fuori di esso
    document.addEventListener("click", function(event) {
        if (!menuItems.contains(event.target) && !treeIcon.contains(event.target)) {
            menuItems.classList.remove("open");
            rotated = false;
        }
    });
});

// counter dei like


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.likeButton');

    buttons.forEach(button => {
        let count = 0;
        button.addEventListener('click', () => {
            count++;
            const likeCountElement = button.nextElementSibling;
            likeCountElement.textContent = count;
        });
    });
});


