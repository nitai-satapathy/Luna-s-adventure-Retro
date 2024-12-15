const quests = [
    "Rescue a rare crystal from a goblin's lair",
    "Negotiate peace between warring dwarf clans",
    "Map an unexplored underground network",
    "Recover a legendary ancestral weapon",
    "Solve an ancient dwarven riddle",
    "Protect a sacred mountain shrine"
];

const questDescriptions = [
    "The crystal glimmers with ancient magic, calling to be liberated.",
    "Tensions run deep, but diplomacy might be the sharpest weapon.",
    "Dark tunnels hide secrets older than any living memory.",
    "A blade that has tasted the blood of legends awaits its true wielder.",
    "Words etched in stone hold power beyond mere understanding.",
    "The mountain spirits whisper of an impending danger."
];

function generateQuest() {
    const randomIndex = Math.floor(Math.random() * quests.length);
    const quest = quests[randomIndex];
    const description = questDescriptions[randomIndex];

    const adventureLog = document.getElementById('adventure-log');
    adventureLog.innerHTML = `
        <strong>Quest Revealed:</strong> ${quest}
        <br>
        <em>${description}</em>
    `;
}