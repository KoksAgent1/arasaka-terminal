const output = document.getElementById('output');
const input = document.getElementById('commandInput');

const commands = {
  hilfe: () => {
    return `Verfügbare Befehle:
- hilfe
- projekt auflistung
- crack firewall projekt mila
- logs auslesen
- exit`;
  },
  'list projects': () => {
    return `Verfügbare Projekte:
- projekt mila
- NEUROSAFE FIREWALL 9.2
- ARKHEART 3.0`;
  },
  'crack firewall projekt mila': () => {
    window.location.href = 'pong.html'; // Minigame
    return '';
  },
	'logs auslesen': () => {
	const unlocked = localStorage.getItem('firewall_mila_breached') === 'true';
	return unlocked
		? `>> Projekt Mila – Entschlüsselte Protokolle:
			[2025-04-17 21:02] Subjekt initialisiert. Neuronale Synchronisation: 87%
			[2025-04-17 21:02] MILITECH-Jagdprotokoll aktiviert. SENTINEL-SYSTEM: AKTIV.
			[2025-04-17 21:17] Gedächtnisüberschreibung erfolgreich. Persönlichkeit instabil.
			[2025-04-17 21:45] ARASAKA-Eindämmung durchbrochen. Subjekt offline.
			[2025-04-17 22:07] Reinitialisierung durchgeführt von Direktor Baranov.
			[2025-04-17 23:10] Subjekt reinitialisiert – Neuronale Synchronisation: 92%.
			[2025-04-17 23:10] Subjekt online.
			[2025-04-17 21:57] Unbekannte Daten entwendet.
			[2025-04-19 23:00] Fremdzugriff erkannt.
	
		End of file.`
    : `>> Access Denied. Firewall not cracked.`;
},
  exit: () => {
    return `Session terminated. Logging out...`;
  }
};

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const cmd = input.value.trim();
    output.innerText += `\n> ${cmd}`;
    const response = commands[cmd] ? commands[cmd]() : 'Unknown command. Type help.';
    output.innerText += `\n${response}`;
    input.value = '';
    window.scrollTo(0, document.body.scrollHeight);
  }
});

function verifyCode() {
  const code = document.getElementById('unlockCode').value.trim().toUpperCase();
  const feedback = document.getElementById('codeFeedback');

  switch (code) {
    case 'BARANOV-A1915-0425':
      // Voller Terminalzugriff
      document.getElementById('lockOverlay').style.display = 'none';
      feedback.textContent = '';
      break;

    case 'LUMINA-42A-HEART7':
      // Spezielle Logs anzeigen oder Funktion triggern
	  document.getElementById('lockOverlay').style.display = 'none';
      feedback.textContent = 'Zugriff auf NEURO-Logs gewährt.';
      showNeuroLogs(); // Eigene Funktion, z. B. Modal oder Terminal-Eintrag
      break;

    case 'D4DELTA289':
      // Hacker Code Effekt oder UI-Aktion
      feedback.textContent = 'Direktor Baranov – Zugriff autorisiert.';
      loadBaranovLogs();
      break;

    case 'ARSKA-MITABRTR':
      feedback.textContent = 'Projekt Mila wird neu initialisiert...';
      rebootMila(); // Private Logs
      break;

    case 'MILA':
      feedback.textContent = 'Projekt Mila wird neu initialisiert...';
      rebootMila(); // Private Logs
      break;

    default:
      feedback.textContent = 'KEIN ZUGRIFF';
      break;
  }
}


window.onload = () => {
  document.getElementById('lockOverlay').style.display = 'flex';
};

