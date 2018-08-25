const themes = [
'default',
'dark'
];

function checkTheme() {
    let baseUrl = location.origin;

    // Check query
    let theme_query = getParameterByName('theme');
    if (theme_query === null || theme_query === "" || !localization[theme_query]) {
        // Check storage
        let theme_stored = localStorage.getItem('kUndercover_theme');

        if (theme_stored && theme_stored != "") {
            theme_query = theme_stored;
        }

        // Set default
        theme_query = 'default';
    }

    $('#theme-select option[value="' + theme_query + '"]').prop("selected", "selected");
    localStorage.setItem('kUndercover_theme', theme_query);
    return theme_query;
}

function themify(newTheme) {
    for (let theme of themes) {
        $('body').removeClass('theme-' + theme);
    }
    $('body').addClass('theme-' + newTheme);
}
