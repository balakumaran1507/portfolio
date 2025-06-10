const input = document.getElementById("command-input");
const output = document.getElementById("output");
const headingEl = document.getElementById("ascii-heading");

const headings = [
  ` 
______       _       _
| ___ \\     | |     | |
| |_/ / __ _| | __ _| | ___   _ _ __ ___   __ _ _ __ __ _ _ __
| ___ \\/ _\` | |/ _\` | |/ / | | | '_ \` _ \\\\ / _\` | '__/ _\` | '_ \\\\
| |_/ / (_| | | (_| |   <| |_| | | | | | | (_| | | | (_| | | | |
\\____/ \\__,_|_|\\__,_|_|\\_\\\\__,_|_| |_| |_|\\__,_|_|  \\__,_|_| |_|

`,
  `
______         __         __
|   __ \\.---.-.|  |.---.-.|  |--.--.--.--------.---.-.----.---.-.-----.
|   __ <|  _  ||  ||  _  ||    <|  |  |        |  _  |   _|  _  |     |
|______/|___._||__||___._||__|__|_____|__|__|__|___._|__| |___._|__|__|

`,
  `

  :::::::::     :::    :::           :::    :::    ::::::    :::::::    ::::     :::    :::::::::     :::    ::::    :::
  :+:    :+:  :+: :+:  :+:         :+: :+:  :+:   :+: :+:    :+:+:+:+: :+:+:+  :+: :+:  :+:    :+:  :+: :+:  :+:+:   :+:
  +:+    +:+ +:+   +:+ +:+        +:+   +:+ +:+  +:+  +:+    +:++:+ +:+:+ +:+ +:+   +:+ +:+    +:+ +:+   +:+ :+:+:+  +:+
  +#++:++#+ +#++:++#++:+#+       +#++:++#++:+#++:++   +#+    +:++#+  +:+  +#++#++:++#++:+#++:++#: +#++:++#++:+#+ +:+ +#+
  +#+    +#++#+     +#++#+       +#+     +#++#+  +#+  +#+    +#++#+       +#++#+     +#++#+    +#++#+     +#++#+  +#+#+#
  #+#    #+##+#     #+##+#       #+#     #+##+#   #+# #+#    #+##+#       #+##+#     #+##+#    #+##+#     #+##+#   #+#+#
  ######### ###     ################     ######    ### ######## ###       ######     ######    ######     ######    ####
  
  `,
];

// 🎯 Display a random heading
const randomHeading = headings[Math.floor(Math.random() * headings.length)];
headingEl.textContent = randomHeading;

// 🎯 Subheadings array for random rotation
const subheadings = [
  "> booting personality.balakumaran_v69.0.1...",
  "SAY THE MAGIC WORD!\nSAY THE MAGIC WORD!\nSAY THE MAGIC WORD!",
  "[ACCESS GRANTED] Personality Core v69.0.1 loaded.",
  "balakumaran.sh initialized — interactive shell ready.",
  "balakumaran@cybercom since 2024",
  "[PERSONNEL FILE 201-069] Accessing Subject: Balakumaran",
  "☠️ CLASSIFIED DOSSIER // Profile v69.0.1 // Eyes Only",
  ">>> PSYCH-EVAL FILE LOADED: BALAKUMARAN 69.0.1",
  "🗂️ Terminal Report: Agent B — Rev.69.0.1",
  "balakumaran.exe has achieved sentience.",
  "Now running: Personality v69.0.1 (unstable)",
  "You're not supposed to be here.",
  "Loading... Hacker Personality: anonymousV69.0.1",
];

// 🪄 Display a random subheading each time
const subheadingEl = document.getElementById("subheading");
const randomSubheading =
  subheadings[Math.floor(Math.random() * subheadings.length)];
subheadingEl.textContent = randomSubheading;

function openModal(scriptName) {
  // Basic placeholder modal using alert
  if (scriptName === "aboutme.sh") {
    alert("Opening About Me section...");
    // You could redirect or open a modal here
  } else if (scriptName === "certificates.sh") {
    alert("Opening Certificates showcase...");
    // Similar logic
  } else if (scriptName === "bugbounty.sh") {
    alert("Opening Bug Bounty showcase...");
  } else if (scriptName === "ctf.sh") {
    alert("Opening CTF Write-ups...");
  } else {
    alert(`${scriptName} executed (no GUI assigned yet).`);
  }
}

// 📁 Simulated file system
const fileContents = {
  "projects.txt":
    "1. CyberVault\n2. SIH1637(2024)\n3. Cybercom Website(Old)\n4. Hypervisor Security\n5. DNS Manual Query\n6. Stegnography\n7. Google Late Attendance Tracker\n",
  "achievements.txt":
    "Top 4% on TryHackMe\nPython, SQL, Cybersecurity Certificates\nMultiple CTF Writeups\nBug Bounty Reports\nUse ctf.sh for more...",
  "certificates.txt":
    "Python Golden Start -Hackerrank-\nSQL(Intermediate) -Hackerrank-\nCybersecurity Professional Certificate -Google | Coursera-\nGoogle IT Professional -Google | Coursera-\nNetworking Basics -Cisco Skill for all-\nComptia Pentest+ -Tryhackme-\nProblem Solving (Intermediate) -Hackerrank-",
  "certificates.sh": "",
  "aboutme.sh": "",
  "bugbounty.sh": "",
  "ctf.sh": "",
};


// 🖱️ Handle user input
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const command = input.value.trim();
    handleCommand(command);
    input.value = "";
  }
});

function handleCommand(command) {
  let response = "";

  // Open new pages for .sh files
  if (command.endsWith(".sh")) {
    const scriptName = command.split(".sh")[0];
    switch (scriptName) {
      case "projects":
        window.open("projects.html", "_blank");
        response = `Running ${command}... Opening Projects`;
        break;
      case "ctf":
        window.open("ctf.html", "_blank");
        response = `Running ${command}... Opening CTF Writeups`;
        break;
      case "bugbounty":
        window.open("bugbounty.html", "_blank");
        response = `Running ${command}... Opening Bug Bounty Reports`;
        break;
      case "certificates":
        window.open("certificates.html", "_blank");
        response = `Running ${command}... Opening Certificates`;
        break;
      default:
        response = `${command}: command not found`;
    }
  } else if (command.startsWith("cat ")) {
    const filename = command.split(" ")[1];
    if (fileContents[filename]) {
      response = fileContents[filename];
    } else {
      response = `cat: ${filename}: No such file or directory`;
    }
  } else {
    switch (command) {
      case "help":
        response = `Available commands:
help - Show this help message
ls - List files
cat [filename] - View file contents
[filename].sh - Open a new page
resume - Open resume
clear - Clear the screen
about - About me
contact - Contact info
personality --version - Show personality version
whoami - Display current user`;
        break;
      case "ls":
        response =
          "projects.txt  achievements.txt  certificates.txt\nprojects.sh  ctf.sh  bugbounty.sh  certificates.sh";
        break;
      case "resume":
        response =
          '<a href="assets/resume.pdf" target="_blank">Download Resume</a>';
        break;
      case "clear":
        output.innerHTML = "";
        response = "";
        break;
      case "about":
        response =
          "I am Balakumaran, a 3rd-year Cybersecurity student and junior pentester at Velammal Engineering College.";
        break;
      case "contact":
        response =
          "Email: balakumaran1507@gmail.com\nLinkedIn: https://linkedin.com/in/balakumaran2005";
        break;
      case "sudo":
        response = "Permission denied: You are not root!";
        break;
      case "whoami":
        response = "balakumaran";
        break;
      case "personality --version":
        response = "balakumaran v69.0.1";
        break;
      case "easteregg":
        response = "You found an easter egg! 🎉 Stay curious, stay hacking!";
        break;
      default:
        response = `${command}: command not found`;
    }
  }

  if (response) {
    output.innerHTML += `<div><pre>${response}</pre></div>`;
  }
}

