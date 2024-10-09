const keyboard = document.getElementById('keyboard');

// Função para criar o teclado
function createKeyboard() {
    const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const blackKeys = ['C#', 'D#', '', 'F#', 'G#', 'A#', '']; // Teclas pretas (vazios onde não há teclas pretas)

    // Adiciona teclas brancas e pretas para uma oitava
    for (let i = 0; i < whiteKeys.length; i++) {
        const whiteKey = document.createElement('div');
        whiteKey.classList.add('key', 'white');
        whiteKey.dataset.note = whiteKeys[i]; // Adiciona nome da nota
        keyboard.appendChild(whiteKey);

        if (blackKeys[i]) { // Adiciona teclas pretas apenas onde existem
            const blackKey = document.createElement('div');
            blackKey.classList.add('key', 'black');
            blackKey.dataset.note = blackKeys[i]; // Adiciona nome da nota
            whiteKey.appendChild(blackKey);
        }
    }
}

// Função para destacar as teclas correspondentes às tríades
function highlightChord(chord) {
    // Remove o destaque de todas as teclas
    document.querySelectorAll('.key').forEach(key => {
        key.classList.remove('highlight');
        const redDot = key.querySelector('.red-dot');
        if (redDot) redDot.remove(); // Remove bolinhas vermelhas
    });

    // Define as notas para cada acorde
    let notes = [];
    switch (chord) {
        case 'C': notes = ['C', 'E', 'G']; break;
        case 'Cm': notes = ['C', 'D#', 'G']; break;
        case 'C#': notes = ['C#', 'F', 'G#']; break;
        case 'C#m': notes = ['C#', 'E', 'G#']; break;
        case 'D': notes = ['D', 'F#', 'A']; break;
        case 'Dm': notes = ['D', 'F', 'A']; break;
        case 'D#': notes = ['D#', 'G', 'A#']; break;
        case 'D#m': notes = ['D#', 'F#', 'A#']; break;
        case 'E': notes = ['E', 'G#', 'B']; break;
        case 'Em': notes = ['E', 'G', 'B']; break;
        case 'F': notes = ['F', 'A', 'C']; break;
        case 'Fm': notes = ['F', 'G#', 'C']; break;
        case 'F#': notes = ['F#', 'A#', 'C#']; break;
        case 'F#m': notes = ['F#', 'A', 'C#']; break;
        case 'G': notes = ['G', 'B', 'D']; break;
        case 'Gm': notes = ['G', 'A#', 'D']; break;
        case 'G#': notes = ['G#', 'C', 'D#']; break;
        case 'G#m': notes = ['G#', 'B', 'D#']; break;
        case 'A': notes = ['A', 'C#', 'E']; break;
        case 'Am': notes = ['A', 'C', 'E']; break;
        case 'A#': notes = ['A#', 'D', 'F']; break;
        case 'A#m': notes = ['A#', 'C#', 'F']; break;
        case 'B': notes = ['B', 'D#', 'F#']; break;
        case 'Bm': notes = ['B', 'D', 'F#']; break;
    }

    // Destaca as teclas correspondentes às notas
    notes.forEach(note => {
        const key = document.querySelector(`[data-note="${note}"]`);
        if (key) {
            key.classList.add('highlight');
            addRedDot(key); // Adiciona a bolinha vermelha
        }
    });
}

// Função para adicionar bolinhas vermelhas nas teclas
function addRedDot(key) {
    const redDot = document.createElement('div');
    redDot.classList.add('red-dot');
    key.appendChild(redDot);
}

// Cria o teclado
createKeyboard();
