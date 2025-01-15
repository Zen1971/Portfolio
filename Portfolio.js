// Le système du mode sombre
// fonctions d'assistance pour basculer en mode sombre
function enableDarkMode() {
	document.body.classList.add('dark-mode');
	localStorage.setItem('theme', 'dark');
}
function disableDarkMode() {
	document.body.classList.remove('dark-mode');
	localStorage.setItem('theme', 'light');
}

// détermine les préférences du mode sombre des nouveaux utilisateurs
function detectColorScheme() {
	
    // par défaut le thème clair
	let theme = 'light';

	
    // vérifie localStorage pour une variable 'thème' enregistrée. s'il est là, l'utilisateur a déjà visité, alors appliquez les choix de thème nécessaires
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme');
	}
	// si ce n'est pas le cas, vérifiez si l'utilisateur a lui-même appliqué les préférences du mode sombre dans le navigateur
	else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		theme = 'dark';
	}

    // si aucune préférence n'est définie, la valeur par défaut light sera utilisée. postuler en conséquence
	theme === 'dark' ? enableDarkMode() : disableDarkMode();
}

// s'exécute au chargement de la page
detectColorScheme();

// ajoute un écouteur d'événement au bouton bascule du mode sombre
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
	// au clic, vérifiez localStorage pour la valeur du mode sombre, utilisez pour appliquer le contraire de ce qui est enregistré
	localStorage.getItem('theme') === 'light' ? enableDarkMode() : disableDarkMode();
});
