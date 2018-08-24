const localization = {
    'es_ES': {
        'title': 'Infiltrado',
        'play': 'Jugar',
        'player': 'Jugador',
        'decide': 'Acusar',
        'search': 'Descubrir',
        'toggle': 'Ver',
        'finish': 'Terminar',
        'repeat': 'Repetir',
        'words': words_list['es_ES']
    },
    'en_US': {
        'title': 'Undercover',
        'play': 'Play',
        'player': 'Player',
        'decide': 'Accuse',
        'search': 'Uncover',
        'toggle': 'Show',
        'finish': 'Finish',
        'repeat': 'Play Again',
        'words': words_list['en_US']
    }
}

function checkLanguage() {
    // Check query
    let lan_query = getParameterByName('lan');
    if (lan_query === null || lan_query === "" || !localization[lan_query]) {
        // Check storage
        let lan_stored = localStorage.getItem('kUndercover_language');

        if (lan_stored && lan_stored != "") {
            location.href += '?lan=' + lan_stored;
        }

        // Set default
        location.href += '?lan=es_ES';
    }

    $('#lang-select option[value="' + lan_query + '"]').prop("selected", "selected");
    localStorage.setItem('kUndercover_language', lan_query);
    return localization[lan_query];
}

function localize(language) {
    $('#title div').text(language['title']);
    $('#play-btn').text(language['play']);
    $('#toggle-word').text(language['toggle']);
}
