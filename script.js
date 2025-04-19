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
		? `>> Projekt Mila - Entschlüsselte Logs:
			[2025-04-17 21:02] Subject initialized. Neural sync: 87%
			[2025-04-17 21:02] MILITECH JAGDPROTOKOLL AKTIVIERT. SENTINEL SYSTEM: AKTIV.
			[2025-03-17 21:17] Memory overwrite successful. Personality unstable.
			[2025-03-17 21:45] ARASAKA containment breached. Subject offline.
			[2025-03-17 22:07] Re-Initialisierung durchgeführt von Direktor Baranov.
			[2025-03-17 23:10] Subject initialized - Neural sync: 92%.
	
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
  const code = document.getElementById('unlockCode').value.trim();
  const feedback = document.getElementById('codeFeedback');

  if (code === 'CYBERLOOPS2025') {
    document.getElementById('lockOverlay').style.display = 'none';
  } else {
    feedback.textContent = 'KEIN ZUGRIFF';
  }
}

window.onload = () => {
  document.getElementById('lockOverlay').style.display = 'flex';
};

