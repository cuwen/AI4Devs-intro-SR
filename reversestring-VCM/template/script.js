document.addEventListener('DOMContentLoaded', () => {
    const textbox = document.getElementById('textbox1');
    const historyList = document.getElementById('historyList');
    const autoReverse = document.getElementById('chkb1');
    const btnReverse = document.getElementById('btn1');
    const btnCopy = document.getElementById('btn2');
    const btnPaste = document.getElementById('btn3');

    const history = [];

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    function updateHistory(item) {
        history.unshift(item);
        renderHistory();
    }

    function renderHistory() {
        historyList.innerHTML = '';
        history.forEach(entry => {
            const li = document.createElement('li');
            li.textContent = entry;
            historyList.appendChild(li);
        });
    }

    textbox.addEventListener('input', () => {
        if (autoReverse.checked) {
            textbox.value = reverseString(textbox.value);
        }
    });

    btnReverse.addEventListener('click', () => {
        const reversed = reverseString(textbox.value);
        textbox.value = reversed;
        updateHistory(reversed);
    });

    btnCopy.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(textbox.value);
            if (autoReverse.checked) {
                updateHistory(textbox.value);
            }
            alert('Texto copiado al portapapeles.');
        } catch (err) {
            alert('Error al copiar: ' + err);
        }
    });

    btnPaste.addEventListener('click', async () => {
        try {
            const text = await navigator.clipboard.readText();
            textbox.value = text;
            if (autoReverse.checked) {
                textbox.value = reverseString(text);
            }
        } catch (err) {
            alert('Error al pegar: ' + err);
        }
    });
});
