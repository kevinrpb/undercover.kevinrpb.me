const localization = {
    'es_ES': {
        'title': 'Infiltrado',
        'back': '<',
        'player': 'Jugador',
        'decide': 'Encuentra los infiltrados',
        'search': 'Buscar infiltrado',
        'words': words_list['es_ES']
    }
}

function checkLanguage() {
    // Check query
    let lan_query = getParameterByName('lan')
    if (lan_query === null || lan_query === "" || !localization[lan_query]) {
        // Check storage
        let lan_stored = localStorage.getItem('kUndercover_language')

        if (lan_stored && lan_stored != "") {
            location.href += '?lan=' + lan_stored
        }
        
        // Set default
        location.href += '?lan=es_ES'
    }

    localStorage.setItem('kUndercover_language', lan_query)
    return localization[lan_query]
}

function localize(language) {
    $('#title').text(language['title'])
    $('#back-btn').text(language['back'])
}
