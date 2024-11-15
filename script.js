//metadatos de los emojis JSON

let emojis = [
    {
        "code": "sonrie",
        "name": "cara sonriente",
        "image": "https://openmoji.org/data/color/svg/1F600.svg",
        "hexcode": "1F600",
    },
    {
        "code": "sonriente",
        "name": "grinning face with big eyes",
        "image": "https://openmoji.org/data/color/svg/1F603.svg",
        "hexcode": "1F603",
    },
    {
        "code": "sonriente chino",
        "name": "grinning face with smiling eyes",
        "image": "https://openmoji.org/data/color/svg/1F604.svg",
        "hexcode": "1F604",
    },
    {
        "code": "muriendose de la risa",
        "name": "rolling on the floor laughing",
        "image": "https://openmoji.org/data/color/svg/1F923.svg",
        "hexcode": "1F601",

    }
];

document.getElementById('loadEmoji').addEventListener('click', function () {
    let code = document.getElementById('emojiCode').value.trim();
    let emoji = emojis.find(e => e.code === code || e.hexcode === code);

    if (emoji) {
        let emojiImage = document.getElementById('emojiImage');
        emojiImage.src = emoji.image;
        emojiImage.style.display = 'block';
    } else {
        alert('Código de emoji no encontrado. Intenta de nuevo.');
    }

});





