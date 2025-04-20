const output = document.getElementById("output");
const input = document.getElementById("commandInput");

const commandsByAccess = {
  employee: ["hilfe", "projekte", "logs auslesen"],
  admin: ["hilfe", "projekt auflistung", "admin log", "logs auslesen", "systemstatus", "benutzer", "shutdown"],
  ripperdoc: ["hilfe", "implantate", "patientendaten", "crack firewall"],
  netrunner: ["hilfe", "netzwerk scan", "infiltriere", "backdoor", "crack firewall"]
};

function writeOutput(text) {
  output.innerText += `\n${text}`;
  output.scrollTop = output.scrollHeight;
}

function executeCommand(cmd) {
  const accessLevel = localStorage.getItem("accessLevel") || "employee";
  const allowedCommands = commandsByAccess[accessLevel] || [];

  if (!allowedCommands.includes(cmd)) {
    writeOutput(`Befehl "${cmd}" ist für Zugriffsebene "${accessLevel.toUpperCase()}" nicht erlaubt.`);
    return;
  }

  switch (cmd) {
    case "hilfe":
      showHelp(accessLevel);  // Aufruf der neuen Funktion für hilfe
      break;

    case "projekte":
      writeOutput("Projekte:\n- Projekt Mila\n- Echo Protokoll\n- RELIC Network");
      break;

    case "logs auslesen":
      writeOutput("Letzte Systemlogs:\n- [12:04] Zugriff durch Benutzer: SYSTEM\n- [12:05] Projektdatei geöffnet.");
      break;
 
	case "admin log":
      writeOutput("Letzte Systemlogs:\n- [12:04] Zugriff durch Benutzer: SYSTEM\n- [12:05] Projektdatei geöffnet.\n- [2025-04-17 21:02] Subjekt initialisiert. Neuronale Synchronisation: 87%\n- [2025-04-17 21:02] MILITECH-Jagdprotokoll aktiviert. SENTINEL-SYSTEM: AKTIV.\n- [2025-03-17 21:17] Gedächtnisüberschreibung erfolgreich. Persönlichkeit instabil.\n- [2025-03-18 21:45] ARASAKA-Eindämmung durchbrochen. Subjekt offline.\n- [2025-03-18 22:07] Reinitialisierung durchgeführt von Direktor Baranov.\n- [2025-03-18 23:10] Subjekt reinitialisiert – Neuronale Synchronisation: 92%\n- [2025-04-18 23:10] Subjekt online.\n- [2025-04-19 gd:2§] Unbekannt\n- [2025-04-19 21:57] Unbekannte Daten entwendet.\n- [2025-04-19 23:00] Fremdzugriff erkannt.\n- [2025-04-20 04:00] Deepscan, Systemneustart, Analyse gestartet.\n- [2025-04-20 22:03] Analyse Durchgeführt.");
      break;

    case "systemstatus":
      writeOutput("Systemstatus:\nCPU: 92%\nNetzwerk: 4 Verbindungen\nAbwehrsystem: aktiv");
      break;

    case "benutzer":
      writeOutput("Aktive Benutzer:\n- Baranov (ADMIN)\n- Bunny (RIPPERDOC)");
      break;

    case "shutdown":
      writeOutput("System fährt herunter...");
      setTimeout(() => {
        document.body.innerHTML = "<pre style='color: red; text-align: center;'>ARASAKA OS WURDE DEAKTIVIERT</pre>";
      }, 2000);
      break;

    case "implantate":
      writeOutput("Implantatdaten:\n- ARKHEART 3.0: aktiv\n- ARASAKA PANOPTICON: inaktiv\n- NEUROSAFE FIREWALL 9.2: 97%\n- TAIKETSU FRAME X-92: isoliert\n- OMEGA LINK PORT: aktiv\n- ONI-SYNC: stabil\n- ARASAKA GHOST PROTOCOL: inaktiv\n- SANGUINE-X BLOODLOOP: Version 2.4\n- Neuralinterface: stabil");
      break;

    case "patientendaten":
      writeOutput("Patientendaten:\n- ID: MILA\n- Status: UnBEkaNnt\n- Diagnose: Biochip-Fehlfunktion");
      break;

    case "netzwerk scan":
      writeOutput("Netzwerkscan gestartet...\n> 3 Nodes gefunden\n> Firewalls erkannt\n> Zugänge kartiert");
      break;

    case "infiltriere":
      writeOutput("Starte Infiltration...\n> Verbindung mit Host 193.41.226.22:9013\n> Zugriff verschlüsselt...");
      break;

    case "backdoor":
      writeOutput("Backdoor-Modul aktiviert\n>befehl: crack firewall\n> Zugriff auf internen Knoten vorbereitet...");
      break;

    case "crack firewall":
      writeOutput("Starte-Infiltration \n>...");
	  window.location.href = 'pong.html';
      break;

    default:
      writeOutput(`Unbekannter Befehl: "${cmd}"`);
  }
}

function showHelp(accessLevel) {
  let helpText = "";
  let helpStyle = "";

  switch (accessLevel) {
    case "employee":
      helpText = `
        Hilfe für Mitarbeiter:
        - "hilfe" : Verfügbare Befehle anzeigen
        - "projekt auflistung" : Liste der aktiven Projekte
        - "logs auslesen" : Letzte Systemprotokolle anzeigen
      `;
      helpStyle = `
        background: #002b36;
        color: #0ff;
        padding: 15px;
        border: 2px solid #0ff;
        border-radius: 5px;
        font-family: monospace;
        font-size: 1.1em;
      `;
      break;

    case "admin":
      helpText = `
        Hilfe für Administrator:
        - "hilfe" : Verfügbare Befehle anzeigen
        - "projekt auflistung" : Liste der aktiven Projekte
        - "admin log" : Admin Protokoll anzeigen
        - "logs auslesen" : Letzte Systemprotokolle anzeigen
        - "systemstatus" : Zeigt den aktuellen Systemstatus an
        - "benutzer" : Zeigt alle aktiven Benutzer
        - "shutdown" : System herunterfahren
      `;
      helpStyle = `
        background: #b22222;
        color: #fff;
        padding: 15px;
        border: 2px solid #f00;
        border-radius: 5px;
        font-family: monospace;
        font-size: 1.1em;
      `;
      break;

    case "ripperdoc":
      helpText = `
        Hilfe für Ripperdocs:
        - "hilfe" : Verfügbare Befehle anzeigen
        - "implantate" : Zeigt alle implantierbaren Systeme
        - "patientendaten" : Zeigt aktuelle Patientendaten
      `;
      helpStyle = `
        background: #1e90ff;
        color: #fff;
        padding: 15px;
        border: 2px solid #00f;
        border-radius: 5px;
        font-family: monospace;
        font-size: 1.1em;
      `;
      break;

    case "netrunner":
      helpText = `
        Hilfe für Netrunner:
        - "hilfe" : Verfügbare Befehle anzeigen
        - "netzwerk scan" : Scannt das Netzwerk auf Sicherheitslücken
        - "infiltriere" : Versucht, in das Zielnetzwerk einzudringen
        - "backdoor" : Öffnet eine Hintertür für späteren Zugriff
        - "crack x x" : versuch um x zu knacken, vorherige Schritte schalten Befehle frei
      `;
      helpStyle = `
        background: #32cd32;
        color: #000;
        padding: 15px;
        border: 2px solid #0f0;
        border-radius: 5px;
        font-family: monospace;
        font-size: 1.1em;
      `;
      break;

    default:
      helpText = "Unbekannte Zugriffsebene. Keine Hilfe verfügbar.";
      helpStyle = `
        background: #000;
        color: #ff6347;
        padding: 15px;
        border: 2px solid #ff6347;
        border-radius: 5px;
        font-family: monospace;
        font-size: 1.1em;
      `;
  }

  // Hilfe-Ausgabe mit Stil anwenden
  const helpDiv = document.createElement("div");
  helpDiv.textContent = helpText;
  helpDiv.style = helpStyle;
  output.innerHTML = "";
  output.appendChild(helpDiv);
}


input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const command = input.value.trim().toLowerCase();
    writeOutput(`> ${command}`);
    executeCommand(command);
    input.value = "";
  }
});
