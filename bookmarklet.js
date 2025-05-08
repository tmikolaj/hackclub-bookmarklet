javascript:(function() {
    const doesStyleExist = document.body.classList.contains('cDarkMode');
    document.body.classList.toggle('cDarkMode', !doesStyleExist);

    let chance = Math.floor(Math.random() * 5);

    const css = `
        html, body {
            margin: 0;
            padding: 0px;
            height: 100%;
        }
        .cDarkMode {
            background-color: #1E1E1E !important;
            color: #AEAEAE !important;
        }
        .cDarkMode * {
            background-color: #1E1E1E !important;
            color: #AEAEAE !important;
        }
        .cDarkMode a {
            color: #CCCCFF !important;
        }
    `;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    if (chance === 0) {
        document.body.style.transform = 'rotate(2deg)';
        document.body.style.transition = 'transform 0.4s ease';
    } else {
        document.body.style.transform = 'rotate(0deg)';
        document.body.style.transition = 'transform 0.4s ease';
    }
})();