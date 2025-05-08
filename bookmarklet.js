javascript:(function() {
    const existing = document.body.classList.contains('cDarkMode');
    document.body.classList.toggle('cDarkMode', !existing);
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
})();