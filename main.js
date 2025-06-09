const input = document.getElementById("command-input");
const output = document.getElementById("output");

// 🎯 Subheadings array for random rotation
const subheadings = [
  "> booting personality.balakumaran_v69.0.1...",
  "Welcome to BalakumaranOS v69.0.1 — type \\help to infiltrate.",
  "[ACCESS GRANTED] Personality Core v69.0.1 loaded.",
  "balakumaran.sh initialized — interactive shell ready.",
  "balakumaran@cyberspace:~$",
  "[PERSONNEL FILE 201-069] Accessing Subject: Balakumaran",
  "☠️ CLASSIFIED DOSSIER // Profile v69.0.1 // Eyes Only",
  ">>> PSYCH-EVAL FILE LOADED: BALAKUMARAN 69.0.1",
  "🗂️ Terminal Report: Agent B — Rev.69.0.1",
  "balakumaran.exe has achieved sentience.",
  "Now running: Personality v69.0.1 (unstable)",
  "You're not supposed to be here.",
  "Loading... Hacker Personality: vOverclocked69.0.1",
];

// 🪄 Display a random subheading each time
const subheadingEl = document.getElementById("subheading");
const randomSubheading =
  subheadings[Math.floor(Math.random() * subheadings.length)];
subheadingEl.textContent = randomSubheading;

// 📁 Simulated file system
const fileContents = {
  "projects.txt": "1. Ticket Generator\n2. CyberVault\n3. TryHackMe Labs",
  "achievements.txt":
    "Top 4% on TryHackMe\nPython, SQL, Cybersecurity Certificates",
  "certificates.txt": "Python\nSQL\nCybersecurity\nNetworking\nIT",
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

  switch (command) {
    case "help":
      response = `Available commands:
help - Show this help message
ls - List files
cat [filename] - View file contents
resume - Open resume
clear - Clear the screen
about - About me
contact - Contact info
personality --version - Show personality version
whoami - Display current user`;
      break;
    case "ls":
      response = "projects.txt  achievements.txt  certificates.txt";
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
      if (command.startsWith("cat ")) {
        const filename = command.split(" ")[1];
        if (fileContents[filename]) {
          response = fileContents[filename];
        } else {
          response = `cat: ${filename}: No such file or directory`;
        }
      } else {
        response = `${command}: command not found`;
      }
  }

  if (response) {
    output.innerHTML += `<div><pre>${response}</pre></div>`;
  }
}
