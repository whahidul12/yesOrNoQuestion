document.getElementById('submitBtn').addEventListener('click', () => {
    const choices = document.getElementsByName('choice');
    let selectedValue = null;
    for (let choice of choices) {
        if (choice.checked) {
            selectedValue = choice.value;
            break;
        }
    }

    if (!selectedValue) {
        alert('Please select an option!');
        return;
    }

    const animationDiv = document.getElementById('animation');
    const celebrationMusic = document.getElementById('celebrationMusic');
    const angryMusic = document.getElementById('angryMusic');

    if (selectedValue === 'yes') {
        window.location.href = "./congratulation/congratulation.html";
        // animationDiv.innerHTML = '<div class="party">🎉 YES! Party Time! 🎉</div>';
        // animationDiv.style.display = 'flex';
        // celebrationMusic.play();
        // setTimeout(() => {
        //     animationDiv.style.display = 'none';
        // }, 2000);
    } else {
        animationDiv.innerHTML = '<div class="angry">😡 NO?! Try Again! 😡</div>';
        animationDiv.style.display = 'flex';
        angryMusic.play();
        setTimeout(() => {
            animationDiv.style.display = 'none';
        }, 2000);
    }
});
