const output = document.getElementById('output');
const input = document.getElementById('commandInput');

const commands = {
  hilfe: () => {
    return `Verfügbare Befehle:
- hilfe: Zeigt alle verfügbaren Befehle an.
- projekt mila: Zeigt alle Projekt Mila Daten und Befehle.
- projekt auflistung: Listet alle verfügbaren Projekte auf.
- crack firewall projekt mila: Bricht die Firewall von Projekt Mila durch und startet ein Minigame.
- logs auslesen: Zeigt die entschlüsselten Logs an, wenn die Firewall durchbrochen wurde.
- exit: Beendet die Sitzung und meldet den Benutzer ab.`;
  },
  'projekt auflistung': () => {
    return `Verfügbare Projekte:
- Projekt Mila: Geheimes Projekt zur Entwicklung eines KI-gesteuerten Agenten.
- NEUROSAFE FIREWALL 9.2: Die neueste Version der Firewall-Technologie von Arasaka.
- RELIC: Ein geheim gehaltenes Archiv-Projekt, das mysteriöse Daten enthält.
- Echo Protokoll: Ein Projekt zur Überwachung und Aufzeichnung von Kommunikationskanälen.
- ARKHEART 3.0: Das neueste KI-Experiment, das in Zusammenarbeit mit Militech entwickelt wird.`;
  },
  'projekt mila': () => {
    return `Projekt Mila:
- Projekt Mila: Geheimes Projekt zur Entwicklung eines KI-gesteuerten Agenten. Gebaut mit Hilfe von Bunny.
	`;
  },
 'NEUROSAFE FIREWALL 9.2': () => {
    return `NEUROSAFE FIREWALL 9.2:
- NEUROSAFE FIREWALL 9.2: Die neueste Version der Firewall-Technologie von Arasaka, schwer zu knacken.
- Eingesetzt in den Agenten Black Adam, O.
`;
  },
 'RELIC': () => {
    return `RELIC:
- RELIC: Ein geheim gehaltenes Archiv-Projekt, das mysteriöse Daten enthält.
`;
  },
 'Echo Protokoll': () => {
    return `Echo Protokoll:
- Echo Protokoll: Ein Projekt zur Überwachung und Aufzeichnung von Kommunikationskanälen.
`;
  },
 'ARKHEART 3.0': () => {
    return `ARKHEART:
- ARKHEART 3.0: Das neueste KI-Experiment, das in Zusammenarbeit mit Militech entwickelt wird.`;
  },
  'crack firewall projekt mila': () => {
    window.location.href = 'pong.html'; // Minigame starten
    return 'Initiierung des Projekts Mila... Starte Minigame, um Firewall zu knacken.';
  },
  'logs auslesen': () => {
    const unlocked = localStorage.getItem('firewall_mila_breached') === 'true';
    return unlocked
      ? `>> Projekt Mila – Entschlüsselte Protokolle:
        [2025-04-17 21:02] Subjekt initialisiert. Neuronale Synchronisation: 87%
        [2025-04-17 21:02] MILITECH-Jagdprotokoll aktiviert. SENTINEL-SYSTEM: AKTIV.
        [2025-03-17 21:17] Gedächtnisüberschreibung erfolgreich. Persönlichkeit instabil.
        [2025-03-18 21:45] ARASAKA-Eindämmung durchbrochen. Subjekt offline.
        [2025-03-18 22:07] Reinitialisierung durchgeführt von Direktor Baranov.
        [2025-03-18 23:10] Subjekt reinitialisiert – Neuronale Synchronisation: 92%.
        [2025-04-18 23:10] Subjekt online.
        [2025-04-19 gd:2§] Unbekannt
        [2025-04-19 21:57] Unbekannte Daten entwendet.
        [2025-04-19 23:00] Fremdzugriff erkannt.
        [2025-04-20 04:00] Deepscan, Systemneustart, Analyse gestartet.

        End of file.`
      : `>> Zugriff verweigert. Firewall nicht geknackt.`;
  },
  exit: () => {
    return `Sitzung beendet. Abmeldung...`;
  }
};

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const cmd = input.value.trim();
    output.innerText += `\n> ${cmd}`;
    const response = commands[cmd] ? commands[cmd]() : 'Unbekannter Befehl. Tippe hilfe ein.';
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
      feedback.textContent = 'Hallo Herr Direktor Baranov. Vollen Zugriff gewährt.';
      break;

    case 'LUMINA-42A-HEART7':
      // Spezielle Logs anzeigen oder Funktion triggern
      document.getElementById('lockOverlay').style.display = 'none';
      feedback.textContent = 'Zugriff auf NEURO-Logs gewährt.';
      showNeuroLogs(); // Eigene Funktion, z. B. Modal oder Terminal-Eintrag
      break;

    case 'D4DELTA289':
      // Hacker Code Effekt oder UI-Aktion
      feedback.textContent = 'Arasaka Interna – Zugriff verweigert.';
      loadBaranovLogs();
	  window.location.href = 'hacking.html';
      break;

    case 'ARSKA-MITABRTR':
      feedback.textContent = 'Projekt Mila wird neu initialisiert...';
      rebootMila(); // Private Logs
      break;

    case 'MILA':
      feedback.textContent = 'Projekt wird neu initialisiert...';
      rebootMila(); // Private Logs
      break;

    default:
      feedback.textContent = 'KEIN ZUGRIFF';
      break;
  }

}

function showNeuroLogs() {
  const neuroLogs = `
    >> NEUROSAFE SYSTEM 9.2 - Protokolle:
    [2025-04-19 11:45] Neuronale Synchronisation begonnen. Subjekt: Unbekannt.
    [2025-04-19 14:23] Systeminitialisierung abgeschlossen. Zugriff auf gesperrte Daten.
    [2025-04-19 16:30] Neuropathische Daten aus sensiblen Quellen extrahiert.
    [2025-04-20 03:00] Sicherheitsverletzung im Protokoll, Investigation läuft...
    [2025-04-20 04:12] Ungewöhnliche neuronale Aktivität festgestellt.

    End of file.`;
  output.innerText += `\n${neuroLogs}`;
}

function loadBaranovLogs() {
  const baranovLogs = `
    >> DIREKTOR BARANOV - PRIVATE LOGS:
    [2025-04-17 00:00] Initialisierung abgeschlossen. Projektstatus: Aktiv.
    [2025-04-17 03:30] Arasaka-Eindämmung durchbrochen. Neuronale Synchronisation im Gange.
    [2025-04-18 01:15] Überwachungsprotokolle der letzten 48 Stunden.
    [2025-04-18 21:45] Zugriff auf Projekt Mila - Initiierung des Reboot-Vorgangs.

    End of file.`;
  output.innerText += `\n${baranovLogs}`;
}

function rebootMila() {
  output.innerText += `\n>> Projekt Mila wird neu gestartet...`;
  setTimeout(() => {
    output.innerText += `\n>> Projekt Mila erfolgreich neu initialisiert. Zugriff auf Daten gewährt.`;
  }, 2000);
}

window.onload = () => {
  document.getElementById('lockOverlay').style.display = 'flex';
};

window.onload = function () {
  const glitch = document.getElementById('glitchScreen');
  const terminal = document.getElementById('terminal');

  glitch.style.display = 'flex';
  terminal.style.display = 'none';

  setTimeout(() => {
    glitch.style.display = 'none';
    terminal.style.display = 'block';
  }, 1000); // Glitch 2 Sekunden anzeigen
};
