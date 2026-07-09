const avatars = [
  {
    id: "agni",
    name: "Agni Initiate",
    league: "Mortal Spark",
    element: "Agni",
    astra: "Agneyastra",
    tint: "#d95d42",
    powers: ["Flame Palm", "Yagya Heat", "Purifying Burst"],
    flaw: "reckless heat",
    dharmaBias: 5,
    unlock: 0,
    quest: "Begin the mortal cycle.",
    lore: "A mortal spark trained in sacrificial heat. This path turns fear into discipline and rage into purification.",
    mantra: "Om Agnaye Namah",
    astraNeed: ["agni"]
  },
  {
    id: "indra",
    name: "Vajra Heir",
    league: "Deva Path",
    element: "Vidyut",
    astra: "Vajra",
    tint: "#42bdd2",
    powers: ["Storm Step", "Thunder Arc", "Sky Charge"],
    flaw: "pride debt",
    dharmaBias: 0,
    unlock: 8,
    quest: "Hold 20 Surge without falling.",
    lore: "A sky-born inheritance of courage, command, and dangerous pride. The Vajra Heir wins through rhythm and speed.",
    mantra: "Om Indraya Vajra Dharaya Namah",
    astraNeed: ["vidyut", "vayu"]
  },
  {
    id: "varuna",
    name: "Varuna Seeker",
    league: "Cosmic Oath",
    element: "Jal",
    astra: "Varunastra",
    tint: "#3d8bd9",
    powers: ["Tide Bind", "Healing Flow", "Oath Chain"],
    flaw: "binding vows",
    dharmaBias: 8,
    unlock: 12,
    quest: "Reach mastery 12 and keep Dharma above 55.",
    lore: "A seeker of cosmic waters and sacred contracts. Varuna power heals, binds, and punishes broken vows.",
    mantra: "Om Varunaya Namah",
    astraNeed: ["jal", "chandra"]
  },
  {
    id: "rudra",
    name: "Rudra Shadow",
    league: "Forbidden Edge",
    element: "Kaal",
    astra: "Pashupata Seed",
    tint: "#9f79d8",
    powers: ["Dissolve", "Time Scar", "Tandava Pulse"],
    flaw: "cosmic burden",
    dharmaBias: -8,
    unlock: 22,
    quest: "Reach mastery 22 and awaken a Kaal fusion.",
    lore: "A fierce path at the edge of dissolution. Rudra Shadow uses time, silence, and destruction as instruments of release.",
    mantra: "Om Rudraya Pashupataye Namah",
    astraNeed: ["kaal", "agni"]
  }
];

const lokas = [
  "Bhuloka",
  "Bhuvarloka",
  "Svargaloka",
  "Maharloka",
  "Janaloka",
  "Tapoloka",
  "Satyaloka"
];

const trials = [
  "Trial of First Flame",
  "Trial of Breath and Sky",
  "Trial of Deva Court",
  "Trial of Rishi Fire",
  "Trial of Memory Beyond Birth",
  "Trial of Cosmic Silence",
  "Trial of Aadishakti"
];

const guardians = [
  { name: "Yaksha Sentinel", intent: "Testing resolve", trait: "Earthbound", className: "Loka Defender", pattern: "slam", color: "#c8a160", speed: 0.62 },
  { name: "Gandharva Duelist", intent: "Reading rhythm", trait: "Evasive", className: "Sky Dancer", pattern: "dash", color: "#85c7b7", speed: 0.92 },
  { name: "Deva Court Champion", intent: "Judging dharma", trait: "Radiant", className: "Radiant Archer", pattern: "bolt", color: "#e4b64e", speed: 0.74 },
  { name: "Rishi Flamekeeper", intent: "Burning impurity", trait: "Ascetic", className: "Mantra Caster", pattern: "ring", color: "#d95d42", speed: 0.58 },
  { name: "Memory Serpent", intent: "Coiling past lives", trait: "Karmic", className: "Serpent Binder", pattern: "spiral", color: "#d86fb2", speed: 0.7 },
  { name: "Kaal Warden", intent: "Measuring time", trait: "Temporal", className: "Time Reaper", pattern: "time", color: "#9f79d8", speed: 0.64 },
  { name: "Adi Gatekeeper", intent: "Awaiting surrender", trait: "Cosmic", className: "Cosmic Gate", pattern: "nova", color: "#f26f7d", speed: 0.52 }
];

const elements = [
  { id: "agni", name: "Agni", color: "#d95d42", unlock: 0, text: "Primordial fire, purification, heat, sacrifice." },
  { id: "jal", name: "Jal", color: "#3d8bd9", unlock: 0, text: "Water, healing, flow, oath, life current." },
  { id: "prithvi", name: "Prithvi", color: "#8aa05a", unlock: 0, text: "Earth, gravity, endurance, fertility, form." },
  { id: "vayu", name: "Vayu", color: "#85c7b7", unlock: 4, text: "Wind, breath, movement, speed, prana." },
  { id: "akash", name: "Akash", color: "#6f8ee8", unlock: 8, text: "Ether, space, sound, resonance, unseen field." },
  { id: "vidyut", name: "Vidyut", color: "#42bdd2", unlock: 10, text: "Lightning, divine strike, nerve force, storm." },
  { id: "surya", name: "Surya", color: "#e4b64e", unlock: 14, text: "Solar radiance, truth, vitality, royal fire." },
  { id: "chandra", name: "Chandra", color: "#c9d8ef", unlock: 16, text: "Moon, mind, soma, calm, dream and tide." },
  { id: "kaal", name: "Kaal", color: "#9f79d8", unlock: 22, text: "Time, decay, destiny, endings, inevitability." },
  { id: "maya", name: "Maya", color: "#d86fb2", unlock: 26, text: "Illusion, concealment, perception, world-weaving." },
  { id: "tamas", name: "Tamas", color: "#6b5f72", unlock: 32, text: "Darkness, inertia, sleep, abyss, hidden force." },
  { id: "shakti", name: "Shakti", color: "#f26f7d", unlock: 40, text: "Raw cosmic power, manifestation, divine force." }
];

const fusionRecipes = {
  "agni+jal": ["Tejas Rasa", "Steam-born force: pressure, purification, healing heat."],
  "agni+prithvi": ["Lava Garbha", "Molten earth: armor-breaking fire and volcanic endurance."],
  "agni+vayu": ["Dahana Vayu", "Wildfire breath: speed-fed flame and sweeping burn."],
  "agni+akash": ["Shabda Agni", "Fire carried by ether: mantra flame and sound ignition."],
  "agni+vidyut": ["Vidyut Agni", "Lightning-fire: instant ignition, nerve shock, and divine spark."],
  "agni+surya": ["Surya Tejas", "Solar flame: radiant truth, royal heat, and life-burning brilliance."],
  "agni+chandra": ["Chandra Agni", "Moonfire: cool flame, mind-purification, and dreamlight burn."],
  "agni+kaal": ["Kala Agni", "Time-fire: aging flame, karmic burn, and endings made visible."],
  "agni+maya": ["Mayagni", "Illusion-fire: false forms, mirage heat, and deceptive flame."],
  "agni+tamas": ["Dhumra Agni", "Smoke-dark fire: suffocation, hidden embers, and shadow burn."],
  "agni+shakti": ["Shakti Jwala", "Divine blaze: raw goddess-force erupting as sacred flame."],
  "jal+prithvi": ["Vriddhi Tattva", "Growth principle: forests, bodies, fertility, restoration."],
  "jal+vayu": ["Megha Shakti", "Cloud and rain force: storms, mist, concealment, renewal."],
  "jal+akash": ["Nada Jala", "Sound-water: mantra currents, echo waves, and etheric flow."],
  "jal+vidyut": ["Vajra Jala", "Charged water: stunning currents, storm rain, and nerve conduction."],
  "jal+surya": ["Surya Jala", "Sun-water: vitality, golden healing, and life-giving radiance."],
  "jal+chandra": ["Soma Rasa", "Moon-water nectar: calm mind, healing, dream travel."],
  "jal+kaal": ["Kala Sindhu", "Time-ocean: erosion, memory tides, and patient destiny."],
  "jal+maya": ["Maya Jala", "Illusion-water: reflections, mirages, emotional veils."],
  "jal+tamas": ["Andha Jala", "Dark water: abyssal pressure, sleep, and hidden currents."],
  "jal+shakti": ["Amrita Shakti", "Life nectar: restorative divine force and flowing manifestation."],
  "prithvi+vayu": ["Giri Vayu", "Mountain wind: pressure, dust, stone-lift, shock waves."],
  "prithvi+akash": ["Garbha Akash", "Cavern ether: hidden chambers, resonance in stone, spatial roots."],
  "prithvi+vidyut": ["Ashani Prithvi", "Thunder-earth: magnetic stone, seismic shock, and charged metal."],
  "prithvi+surya": ["Hiranya Bhumi", "Golden earth: harvest, vitality, mineral radiance, royal ground."],
  "prithvi+chandra": ["Soma Bhumi", "Moon-earth: herbs, fertility, calm growth, and night-blooming power."],
  "prithvi+kaal": ["Shila Kaal", "Stone-time: fossil memory, age, weight, and ancient endurance."],
  "prithvi+maya": ["Maya Bhumi", "Illusion-earth: false terrain, shifting paths, and hidden doors."],
  "prithvi+tamas": ["Andha Bhumi", "Dark earth: burial, inertia, underground force, and silence."],
  "prithvi+shakti": ["Kundalini Bhumi", "Serpent-earth: coiled force rising from body and ground."],
  "vayu+akash": ["Prana Akash", "Breath-ether: life wind moving through space and sound."],
  "vayu+vidyut": ["Vajra Vayu", "Storm-breath: lightning speed and thunder impact."],
  "vayu+surya": ["Surya Vayu", "Solar wind: hot momentum, life breath, and radiant speed."],
  "vayu+chandra": ["Chandra Vayu", "Moon-breath: cooling wind, mental calm, and dream motion."],
  "vayu+kaal": ["Kala Vayu", "Time-wind: acceleration, decay gusts, and stolen moments."],
  "vayu+maya": ["Maya Vayu", "Illusion-wind: whispers, false directions, and vanishing steps."],
  "vayu+tamas": ["Nisha Vayu", "Night-wind: sleep gusts, obscuring dust, and heavy breath."],
  "vayu+shakti": ["Prana Shakti", "Life-force breath: vital surge, healing wind, and awakened prana."],
  "akash+vidyut": ["Vidyut Akash", "Ether-lightning: space arcs, instant transmission, and sky nerves."],
  "akash+surya": ["Surya Akash", "Solar ether: star gates, truth fields, and radiant space."],
  "akash+chandra": ["Chandra Akash", "Moon ether: dream space, astral calm, and reflective void."],
  "akash+kaal": ["Kala Akash", "Time-space: folded distance, delayed motion, and destiny corridors."],
  "akash+maya": ["Maya Akash", "Illusion-space: false dimensions, veiled distance, and dream rooms."],
  "akash+tamas": ["Shunya Tamas", "Void-darkness: silence, emptiness, concealment, and still space."],
  "akash+shakti": ["Adi Spanda", "Original vibration: space awakened by divine pulse."],
  "vidyut+surya": ["Aditya Vajra", "Solar lightning: royal thunder, radiant judgment, and plasma force."],
  "vidyut+chandra": ["Soma Vajra", "Moon lightning: silver shock, mind strike, and lucid storm."],
  "vidyut+kaal": ["Kala Vajra", "Time lightning: instant aging, destiny strike, and temporal rupture."],
  "vidyut+maya": ["Maya Vajra", "Illusion lightning: false flashes, phantom impact, and bewildering speed."],
  "vidyut+tamas": ["Krishna Vajra", "Dark lightning: unseen shock, fear pulse, and abyssal thunder."],
  "vidyut+shakti": ["Chandika Vajra", "Fierce divine thunder: goddess-force as celestial weapon."],
  "surya+chandra": ["Graha Jyoti", "Solar-lunar balance: eclipse sight and celestial rhythm."],
  "surya+kaal": ["Aditya Kaal", "Solar time: day-cycle command, aging light, and destiny radiance."],
  "surya+maya": ["Maya Surya", "Illusion sun: mirage, glamour, false dawn, and revealed deception."],
  "surya+tamas": ["Grahan Tamas", "Eclipse-darkness: light swallowed, shadow corona, and omen force."],
  "surya+shakti": ["Aditya Shakti", "Solar goddess-force: vitality, sovereignty, and creative radiance."],
  "chandra+kaal": ["Chandra Kaal", "Lunar time: phases, memory cycles, tides of birth and decline."],
  "chandra+maya": ["Swapna Maya", "Dream illusion: sleep worlds, emotional masks, and subtle deception."],
  "chandra+tamas": ["Nisha Soma", "Night nectar: sleep, secrecy, cooling darkness, and inward pull."],
  "chandra+shakti": ["Soma Shakti", "Moon goddess-force: nectar, compassion, and subtle awakening."],
  "kaal+maya": ["Maya Kaal", "Illusory time: loops, delays, false futures."],
  "kaal+tamas": ["Mahakala Tamas", "Great dark time: endings, void, inertia, and inevitable dissolution."],
  "kaal+shakti": ["Kali Kaal", "Time-force: fierce liberation, severance, and destiny awakened."],
  "maya+tamas": ["Moha Tamas", "Delusion-darkness: ignorance, sleep, confusion, and hidden bondage."],
  "maya+shakti": ["Mahamaya Shakti", "Great illusion-force: world-weaving, form creation, and divine concealment."],
  "tamas+shakti": ["Kali Shakti", "Dark divine force: abyssal protection and fierce release."],
  "agni+jal+prithvi": ["Sharira Tattva", "Body principle: flesh, blood, heat, bone, survival."],
  "agni+vayu+vidyut": ["Vajragni", "Thunderfire: explosive celestial wrath."],
  "jal+chandra+maya": ["Swapna Jala", "Dream-water: sleep, visions, emotional illusion."],
  "prithvi+akash+kaal": ["Sthira Kaal", "Fixed time: gravity wells, ancient stone memory."],
  "surya+chandra+akash": ["Jyotir Akash", "Celestial ether: star gates, lunar-solar navigation."],
  "kaal+maya+tamas": ["Mahamoha", "Great bewilderment: darkness, delay, forgetfulness."],
  "agni+jal+prithvi+vayu": ["Bhuta Chakra", "The four manifest elements turning as one battle wheel."],
  "agni+jal+prithvi+vayu+akash": ["Pancha Mahabhuta", "The five great elements: matter, life, breath, fire, space."],
  "agni+jal+prithvi+vayu+akash+vidyut+surya+chandra": ["Deva Mandala", "Elemental nature joined with sky, storm, sun, and moon."],
  "agni+jal+prithvi+vayu+akash+vidyut+surya+chandra+kaal+maya+tamas": ["Pralaya Mandala", "Creation begins to fold: time, illusion, darkness, and nature merge."],
  "agni+jal+prithvi+vayu+akash+vidyut+surya+chandra+kaal+maya+tamas+shakti": ["Aadishakti Mahatattva", "All elements return into one source: creation, preservation, destruction, liberation."]
};

const boonCatalog = [
  { id: "yagya-heart", name: "Yagya Heart", type: "boon", text: "+8 max shakti after reincarnation" },
  { id: "rishi-memory", name: "Rishi Memory", type: "boon", text: "+6 mastery retained" },
  { id: "astra-samskara", name: "Astra Samskara", type: "boon", text: "Astra evolution decays less" },
  { id: "pride-debt", name: "Pride Debt", type: "burden", text: "Low dharma increases guardian damage" },
  { id: "kaal-mark", name: "Kaal Mark", type: "burden", text: "Astra use costs extra shakti" }
];

const saveKey = "aadishakti-soul-ascent-v2";

const state = {
  avatarIndex: 0,
  lokaIndex: 0,
  karma: 0,
  dharma: 50,
  tapasya: 0,
  shakti: 12,
  surge: 0,
  mastery: 1,
  astra: 0,
  enemyHp: 100,
  enemyMax: 100,
  playerHp: 100,
  playerMax: 120,
  turn: 0,
  cycle: 1,
  choiceStreak: 0,
  boons: [],
  activeElements: ["agni"],
  fusedElement: null,
  player: { x: 0.3, y: 0.55, vx: 0, vy: 0 },
  enemy: { x: 0.68, y: 0.47, vx: 0, vy: 0, attackTimer: 90 },
  keys: {},
  projectiles: [],
  hitFlash: 0,
  particles: [],
  log: ["A mortal spark awakens in Bhuloka."]
};

const el = {
  avatarList: document.querySelector("#avatarList"),
  lokaTrack: document.querySelector("#lokaTrack"),
  leagueLabel: document.querySelector("#leagueLabel"),
  elementLabel: document.querySelector("#elementLabel"),
  karmaValue: document.querySelector("#karmaValue"),
  dharmaValue: document.querySelector("#dharmaValue"),
  tapasyaValue: document.querySelector("#tapasyaValue"),
  shaktiValue: document.querySelector("#shaktiValue"),
  surgeValue: document.querySelector("#surgeValue"),
  masteryText: document.querySelector("#masteryText"),
  masteryMeter: document.querySelector("#masteryMeter"),
  astraText: document.querySelector("#astraText"),
  astraMeter: document.querySelector("#astraMeter"),
  powerGrid: document.querySelector("#powerGrid"),
  avatarLore: document.querySelector("#avatarLore"),
  avatarQuest: document.querySelector("#avatarQuest"),
  unlockLabel: document.querySelector("#unlockLabel"),
  astraReadyLabel: document.querySelector("#astraReadyLabel"),
  astraRequirement: document.querySelector("#astraRequirement"),
  astraFusion: document.querySelector("#astraFusion"),
  eventLog: document.querySelector("#eventLog"),
  boonList: document.querySelector("#boonList"),
  cycleLabel: document.querySelector("#cycleLabel"),
  lokaName: document.querySelector("#lokaName"),
  trialName: document.querySelector("#trialName"),
  guardianName: document.querySelector("#guardianName"),
  guardianIntent: document.querySelector("#guardianIntent"),
  strikeBtn: document.querySelector("#strikeBtn"),
  astraBtn: document.querySelector("#astraBtn"),
  tapasyaBtn: document.querySelector("#tapasyaBtn"),
  reincarnateBtn: document.querySelector("#reincarnateBtn"),
  dharmaChoiceBtn: document.querySelector("#dharmaChoiceBtn"),
  powerChoiceBtn: document.querySelector("#powerChoiceBtn"),
  mercyChoiceBtn: document.querySelector("#mercyChoiceBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  elementGrid: document.querySelector("#elementGrid"),
  fusionTierLabel: document.querySelector("#fusionTierLabel"),
  fusionName: document.querySelector("#fusionName"),
  fusionDescription: document.querySelector("#fusionDescription"),
  fusionSequence: document.querySelector("#fusionSequence"),
  fuseBtn: document.querySelector("#fuseBtn"),
  clearFusionBtn: document.querySelector("#clearFusionBtn"),
  canvas: document.querySelector("#gameCanvas")
};

const ctx = el.canvas.getContext("2d");

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function avatar() {
  return avatars[state.avatarIndex];
}

function guardian() {
  return guardians[state.lokaIndex];
}

function hasBoon(id) {
  return state.boons.includes(id);
}

function sortedElementIds(ids = state.activeElements) {
  const order = new Map(elements.map((element, index) => [element.id, index]));
  return [...new Set(ids)].sort((a, b) => order.get(a) - order.get(b));
}

function elementById(id) {
  return elements.find((element) => element.id === id);
}

function fusionFor(ids = state.activeElements) {
  const sorted = sortedElementIds(ids);
  const key = sorted.join("+");
  const recipe = fusionRecipes[key];

  if (recipe) {
    return {
      ids: sorted,
      key,
      tier: sorted.length,
      name: recipe[0],
      text: recipe[1],
      color: elementById(sorted[sorted.length - 1])?.color || "#e4b64e",
      known: true
    };
  }

  if (sorted.length === 1) {
    const base = elementById(sorted[0]);
    return {
      ids: sorted,
      key,
      tier: 1,
      name: base.name,
      text: base.text,
      color: base.color,
      known: true
    };
  }

  const names = sorted.map((id) => elementById(id).name);
  return {
    ids: sorted,
    key,
    tier: sorted.length,
    name: `${names[0]}-${names[names.length - 1]} Mandala`,
    text: `${sorted.length} powers are braided into an unnamed evolving tattva. More tapasya can stabilize it into a named siddhi.`,
    color: elementById(sorted[0])?.color || "#e4b64e",
    known: false
  };
}

function fusionPowerMultiplier() {
  const fusion = fusionFor();
  const knownBonus = fusion.known ? 0.08 : 0.04;
  return 1 + Math.max(0, fusion.tier - 1) * 0.06 + knownBonus;
}

function astraReady() {
  return avatar().astraNeed.every((id) => state.activeElements.includes(id));
}

function avatarUnlocked(candidate) {
  if (candidate.id === "agni") return true;
  if (candidate.id === "indra") return state.mastery >= candidate.unlock || state.surge >= 20;
  if (candidate.id === "varuna") return state.mastery >= candidate.unlock && state.dharma >= 55;
  if (candidate.id === "rudra") return state.mastery >= candidate.unlock && state.activeElements.includes("kaal");
  return state.mastery >= candidate.unlock;
}

function fusionEffectStyle(fusion = fusionFor()) {
  const key = fusion.key;
  if (key.includes("vidyut")) return "lightning";
  if (key.includes("jal") || key.includes("chandra")) return "wave";
  if (key.includes("prithvi")) return "quake";
  if (key.includes("vayu")) return "spiral";
  if (key.includes("kaal")) return "time";
  if (key.includes("maya")) return "mirage";
  if (key.includes("tamas")) return "shadow";
  if (key.includes("surya")) return "solar";
  if (key.includes("shakti")) return "shakti";
  return "flame";
}

function arenaPoint(entity) {
  return {
    x: entity.x * el.canvas.width,
    y: entity.y * el.canvas.height
  };
}

function distance(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.hypot(dx, dy);
}

function earnBoon(id) {
  if (hasBoon(id)) return;
  state.boons.push(id);
  const boon = boonCatalog.find((item) => item.id === id);
  addLog(`${boon.name} enters the soul record.`);
}

function saveGame() {
  const saveData = {
    avatarIndex: state.avatarIndex,
    lokaIndex: state.lokaIndex,
    karma: state.karma,
    dharma: state.dharma,
    tapasya: state.tapasya,
    shakti: state.shakti,
    surge: state.surge,
    mastery: state.mastery,
    astra: state.astra,
    enemyHp: state.enemyHp,
    enemyMax: state.enemyMax,
    playerHp: state.playerHp,
    playerMax: state.playerMax,
    turn: state.turn,
    cycle: state.cycle,
    choiceStreak: state.choiceStreak,
    boons: state.boons,
    activeElements: state.activeElements,
    fusedElement: state.fusedElement,
    player: state.player,
    enemy: state.enemy,
    log: state.log
  };
  localStorage.setItem(saveKey, JSON.stringify(saveData));
}

function loadGame() {
  const saved = localStorage.getItem(saveKey);
  if (!saved) return false;

  try {
    const parsed = JSON.parse(saved);
    Object.assign(state, parsed);
    state.activeElements = Array.isArray(state.activeElements) && state.activeElements.length ? state.activeElements : ["agni"];
    state.player = state.player || { x: 0.3, y: 0.55, vx: 0, vy: 0 };
    state.enemy = state.enemy || { x: 0.68, y: 0.47, vx: 0, vy: 0, attackTimer: 90 };
    state.keys = {};
    state.projectiles = [];
    state.hitFlash = 0;
    state.particles = [];
    addLog("The saved soul record is restored.");
    return true;
  } catch {
    localStorage.removeItem(saveKey);
    return false;
  }
}

function addLog(message) {
  state.log.unshift(message);
  state.log = state.log.slice(0, 8);
}

function rollEnemy() {
  const dharmaGate = state.dharma >= 70 ? -10 : state.dharma <= 25 ? 18 : 0;
  state.enemyMax = 105 + state.lokaIndex * 38 + dharmaGate;
  state.enemyHp = state.enemyMax;
  state.playerMax = 118 + (hasBoon("yagya-heart") ? 8 : 0) + Math.floor(state.mastery * 0.18);
  state.playerHp = clamp(state.playerMax, 40, 160);
  state.enemy = { x: 0.66, y: 0.46, vx: 0, vy: 0, attackTimer: 80 };
  state.projectiles = [];
}

function ascendIfReady() {
  if (state.enemyHp > 0) return;

  state.karma += 10 + state.lokaIndex * 2;
  state.tapasya += 4;
  state.mastery = clamp(state.mastery + 9 + state.lokaIndex, 1, 100);
  state.astra = clamp(state.astra + 8, 0, 100);
  state.surge = clamp(state.surge + 12, 0, 100);

  if (state.mastery >= 22) earnBoon("rishi-memory");
  if (state.astra >= 30) earnBoon("astra-samskara");

  if (state.mastery >= 35 + state.lokaIndex * 9 && state.lokaIndex < lokas.length - 1) {
    state.lokaIndex += 1;
    addLog(`The soul rises into ${lokas[state.lokaIndex]}.`);
  } else if (state.lokaIndex === lokas.length - 1 && state.mastery >= 100) {
    addLog("Aadishakti recognizes the fully awakened soul.");
  } else {
    addLog(`${trials[state.lokaIndex]} is conquered.`);
  }

  rollEnemy();
  saveGame();
}

function burst(color, amount, x, y, force = 1) {
  for (let i = 0; i < amount; i += 1) {
    state.particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 5 * force,
      vy: (Math.random() - 0.5) * 5 * force,
      life: 35 + Math.random() * 25,
      color,
      size: 2 + Math.random() * 4
    });
  }
}

function enemyActs() {
  if (state.enemyHp <= 0) return;

  const burden = hasBoon("pride-debt") && state.dharma < 35 ? 5 : 0;
  const guardianScale = guardian().trait === "Temporal" ? 4 : guardian().trait === "Cosmic" ? 7 : 0;
  const pressure = 7 + state.lokaIndex * 3 + guardianScale + burden + Math.random() * 8;
  state.playerHp = clamp(state.playerHp - pressure + state.dharma * 0.03, 0, state.playerMax);
  state.shakti = clamp(state.shakti + 2, 0, 100);

  if (state.playerHp <= 0) {
    state.karma = Math.round(state.karma * 0.65);
    state.dharma = clamp(state.dharma + 4, 0, 100);
    state.tapasya += 8;
    state.playerHp = 88;
    state.enemyHp = state.enemyMax;
    addLog("The body falls; karmic residue carries the soul onward.");
  }
  saveGame();
}

function damageEnemy(amount, color, logMessage, burstAmount = 18) {
  const target = arenaPoint(state.enemy);
  state.enemyHp = clamp(state.enemyHp - amount, 0, state.enemyMax);
  burst(color, burstAmount, target.x, target.y, 1.25);
  addLog(logMessage);
  ascendIfReady();
}

function damagePlayer(amount, color, x, y) {
  state.playerHp = clamp(state.playerHp - amount, 0, state.playerMax);
  state.hitFlash = 16;
  burst(color, 16, x, y, 1);

  if (state.playerHp <= 0) {
    state.karma = Math.round(state.karma * 0.65);
    state.dharma = clamp(state.dharma + 4, 0, 100);
    state.tapasya += 8;
    state.playerHp = Math.floor(state.playerMax * 0.72);
    state.enemyHp = state.enemyMax;
    state.player.x = 0.28;
    state.player.y = 0.55;
    addLog("The body falls; karmic residue pulls the soul back into battle.");
  }
}

function strike() {
  const a = avatar();
  const fusion = fusionFor();
  const playerPoint = arenaPoint(state.player);
  const enemyPoint = arenaPoint(state.enemy);
  const gap = distance(playerPoint, enemyPoint);
  if (gap > el.canvas.width * 0.24) {
    addLog("Move closer to land the strike.");
    render();
    return;
  }
  const combo = (1 + state.surge * 0.004 + state.choiceStreak * 0.025) * fusionPowerMultiplier();
  const damage = (14 + state.mastery * 0.34 + state.lokaIndex * 2 + Math.random() * 8) * combo;
  state.shakti = clamp(state.shakti + 5, 0, 100);
  state.surge = clamp(state.surge + 7, 0, 100);
  state.dharma = clamp(state.dharma + a.dharmaBias * 0.08, 0, 100);
  state.turn += 1;
  damageEnemy(damage, fusion.color, `${fusion.name} empowers ${a.powers[state.turn % a.powers.length]}.`, 18 + fusion.tier * 2);
  render();
}

function invokeAstra() {
  const a = avatar();
  const fusion = fusionFor();
  if (!astraReady()) {
    const needed = a.astraNeed.map((id) => elementById(id).name).join(" + ");
    addLog(`${a.astra} requires mantra alignment: ${needed}.`);
    render();
    return;
  }

  if (state.shakti < 18) {
    addLog("The astra waits for more shakti.");
    render();
    return;
  }

  const cost = (state.astra >= 50 ? 24 : 18) + (hasBoon("kaal-mark") ? 4 : 0);
  state.shakti = clamp(state.shakti - cost, 0, 100);
  const surgeSpend = Math.min(state.surge, 40);
  const damage = (28 + state.astra * 0.55 + state.mastery * 0.25 + surgeSpend * 0.65) * fusionPowerMultiplier();
  state.surge = clamp(state.surge - 24, 0, 100);
  state.karma += state.dharma >= 40 ? 4 : -6;
  state.astra = clamp(state.astra + 5, 0, 100);
  damageEnemy(damage, fusion.color, `${a.mantra}: ${a.astra} channels ${fusion.name}.`, 36 + fusion.tier * 3);
  render();
}

function tapasya() {
  const a = avatar();
  const fusion = fusionFor();
  state.tapasya += 9;
  state.shakti = clamp(state.shakti + 12 + Math.floor(fusion.tier / 2), 0, 100);
  state.mastery = clamp(state.mastery + 3 + (fusion.tier >= 5 ? 1 : 0), 1, 100);
  state.surge = clamp(state.surge + 5, 0, 100);
  state.dharma = clamp(state.dharma + 2 + a.dharmaBias * 0.05, 0, 100);
  state.playerHp = clamp(state.playerHp + 16, 0, state.playerMax);
  if (state.tapasya >= 36) earnBoon("yagya-heart");
  burst(fusion.color, 20 + fusion.tier, el.canvas.width * 0.31, el.canvas.height * 0.48, 0.8);
  addLog(`Tapasya stabilizes ${fusion.name}.`);
  saveGame();
  render();
}

function reincarnate() {
  const retainedMastery = Math.floor(state.mastery * 0.72 + state.tapasya * 0.08 + (hasBoon("rishi-memory") ? 6 : 0));
  const karmicLift = state.karma >= 0 ? 6 : -5;
  state.mastery = clamp(retainedMastery, 1, 100);
  state.astra = clamp(Math.floor(state.astra * (hasBoon("astra-samskara") ? 0.76 : 0.62)), 0, 100);
  state.dharma = clamp(50 + karmicLift + avatar().dharmaBias, 0, 100);
  state.shakti = 18 + Math.floor(state.mastery / 8) + (hasBoon("yagya-heart") ? 8 : 0);
  state.surge = 0;
  state.playerHp = 100;
  state.enemyHp = state.enemyMax;
  state.tapasya = Math.floor(state.tapasya * 0.35);
  state.cycle += 1;
  state.choiceStreak = 0;
  addLog("A new birth forms around the same ancient soul.");
  rollEnemy();
  saveGame();
  render();
}

function selectAvatar(index) {
  if (!avatarUnlocked(avatars[index])) {
    addLog(`${avatars[index].name} unlock quest: ${avatars[index].quest}`);
    render();
    return;
  }
  state.avatarIndex = index;
  state.shakti = clamp(state.shakti + 4, 0, 100);
  addLog(`${avatars[index].name} becomes the active avatar path.`);
  saveGame();
  render();
}

function makeChoice(kind) {
  state.choiceStreak += 1;

  if (kind === "dharma") {
    state.dharma = clamp(state.dharma + 9, 0, 100);
    state.karma += 3;
    state.shakti = clamp(state.shakti + 4, 0, 100);
    addLog("A vow of dharma steadies the soul.");
  }

  if (kind === "power") {
    state.dharma = clamp(state.dharma - 8, 0, 100);
    state.karma -= 4;
    state.shakti = clamp(state.shakti + 18, 0, 100);
  state.surge = clamp(state.surge + 16, 0, 100);
    if (state.dharma < 25) earnBoon("pride-debt");
    if (state.lokaIndex >= 4 && state.astra >= 40) earnBoon("kaal-mark");
    addLog("Power is claimed before permission is given.");
  }

  if (kind === "mercy") {
    const healing = 18 + state.lokaIndex * 2;
    state.dharma = clamp(state.dharma + 5, 0, 100);
    state.karma += 6;
    state.playerHp = clamp(state.playerHp + healing, 0, state.playerMax);
    state.enemyHp = clamp(state.enemyHp + 8, 0, state.enemyMax);
    addLog(`${guardian().name} receives mercy and the cosmos takes note.`);
  }

  saveGame();
  render();
}

function toggleElement(id) {
  const element = elementById(id);
  if (!element || state.mastery < element.unlock) {
    addLog(`${element?.name || "That element"} requires mastery ${element?.unlock || 0}.`);
    render();
    return;
  }

  const selected = new Set(state.activeElements);
  if (selected.has(id) && selected.size > 1) {
    selected.delete(id);
  } else {
    selected.add(id);
  }

  state.activeElements = sortedElementIds([...selected]);
  state.fusedElement = fusionFor().key;
  addLog(`${fusionFor().name} forms in the mandala.`);
  saveGame();
  render();
}

function fuseElements() {
  const unlocked = elements.filter((element) => state.mastery >= element.unlock).map((element) => element.id);
  const current = new Set(state.activeElements);
  const next = unlocked.find((id) => !current.has(id));

  if (next) {
    current.add(next);
    state.activeElements = sortedElementIds([...current]);
  }

  const fusion = fusionFor();
  state.fusedElement = fusion.key;
  state.tapasya = clamp(state.tapasya + fusion.tier, 0, 999);
  state.surge = clamp(state.surge + fusion.tier * 2, 0, 100);
  state.shakti = clamp(state.shakti - Math.max(0, fusion.tier - 3), 0, 100);
  addLog(`${fusion.name} reaches tier ${fusion.tier}.`);
  saveGame();
  render();
}

function clearFusion() {
  state.activeElements = [avatar().id === "indra" ? "vidyut" : avatar().id];
  if (!elementById(state.activeElements[0])) state.activeElements = ["agni"];
  state.fusedElement = fusionFor().key;
  addLog("The mandala returns to a single element.");
  saveGame();
  render();
}

function chooseSequence(ids) {
  const requested = ids.split("+");
  const locked = requested.find((id) => state.mastery < elementById(id).unlock);

  if (locked) {
    const element = elementById(locked);
    addLog(`${element.name} requires mastery ${element.unlock}.`);
    render();
    return;
  }

  state.activeElements = sortedElementIds(requested);
  state.fusedElement = fusionFor().key;
  addLog(`${fusionFor().name} sequence is chosen.`);
  saveGame();
  render();
}

function resetCycle() {
  localStorage.removeItem(saveKey);
  Object.assign(state, {
    avatarIndex: 0,
    lokaIndex: 0,
    karma: 0,
    dharma: 50,
    tapasya: 0,
    shakti: 12,
    surge: 0,
    mastery: 1,
    astra: 0,
    enemyHp: 100,
    enemyMax: 100,
    playerHp: 100,
    playerMax: 120,
    turn: 0,
    cycle: 1,
    choiceStreak: 0,
    boons: [],
    activeElements: ["agni"],
    fusedElement: null,
    player: { x: 0.3, y: 0.55, vx: 0, vy: 0 },
    enemy: { x: 0.68, y: 0.47, vx: 0, vy: 0, attackTimer: 90 },
    keys: {},
    projectiles: [],
    hitFlash: 0,
    particles: [],
    log: ["A mortal spark awakens in Bhuloka."]
  });
  rollEnemy();
  render();
}

function renderAvatarList() {
  el.avatarList.innerHTML = avatars
    .map((a, index) => {
      const locked = !avatarUnlocked(a);
      return `
      <button class="avatar-card ${index === state.avatarIndex ? "active" : ""} ${locked ? "locked" : ""}" type="button" data-avatar="${index}">
        <h2>${a.name}</h2>
        <p>${a.element} path with ${a.astra}. ${a.quest}</p>
        <span class="avatar-meta">
          <span>${a.league}</span>
          <span>${a.element}</span>
          ${locked ? `<span>Quest Locked</span>` : ""}
        </span>
      </button>
    `;
    })
    .join("");

  document.querySelectorAll("[data-avatar]").forEach((button) => {
    button.addEventListener("click", () => selectAvatar(Number(button.dataset.avatar)));
  });
}

function renderLokaTrack() {
  el.lokaTrack.innerHTML = lokas
    .map((loka, index) => `<div class="loka-node ${index === state.lokaIndex ? "active" : ""}">${loka}</div>`)
    .join("");
}

function renderFusionSequence() {
  const anchor = elementById(state.activeElements[0]) || elements[0];
  const rows = elements
    .filter((element) => element.id !== anchor.id)
    .map((element) => {
      const ids = sortedElementIds([anchor.id, element.id]);
      const fusion = fusionFor(ids);
      const locked = state.mastery < anchor.unlock || state.mastery < element.unlock;
      const active = fusion.key === fusionFor().key;
      return `
        <button class="sequence-row ${active ? "active" : ""} ${locked ? "locked" : ""}" type="button" data-sequence="${ids.join("+")}">
          <span>${anchor.name} + ${element.name}</span>
          <strong>${fusion.name}</strong>
          <span>${locked ? `Needs mastery ${Math.max(anchor.unlock, element.unlock)}` : fusion.text}</span>
        </button>
      `;
    })
    .join("");

  el.fusionSequence.innerHTML = rows;
  document.querySelectorAll("[data-sequence]").forEach((button) => {
    button.addEventListener("click", () => chooseSequence(button.dataset.sequence));
  });
}

function renderUi() {
  const a = avatar();
  const fusion = fusionFor();
  el.leagueLabel.textContent = a.league;
  el.elementLabel.textContent = fusion.name;
  el.karmaValue.textContent = Math.round(state.karma);
  el.dharmaValue.textContent = Math.round(state.dharma);
  el.tapasyaValue.textContent = Math.round(state.tapasya);
  el.shaktiValue.textContent = Math.round(state.shakti);
  el.surgeValue.textContent = Math.round(state.surge);
  el.masteryText.textContent = `${Math.round(state.mastery)} / 100`;
  el.masteryMeter.style.width = `${state.mastery}%`;
  el.astraText.textContent = state.astra >= 75 ? "Radiant" : state.astra >= 40 ? "Awakened" : state.astra >= 15 ? "Stirring" : "Dormant";
  el.astraMeter.style.width = `${state.astra}%`;
  el.lokaName.textContent = lokas[state.lokaIndex];
  el.trialName.textContent = trials[state.lokaIndex];
  el.guardianName.textContent = guardian().name;
  el.guardianIntent.textContent = `${guardian().className}: ${guardian().pattern} pattern`;
  el.cycleLabel.textContent = `Cycle ${state.cycle}`;
  el.unlockLabel.textContent = avatarUnlocked(a) ? "Awakened" : "Quest Locked";
  el.avatarLore.textContent = a.lore;
  el.avatarQuest.textContent = `Unlock quest: ${a.quest}`;
  el.astraReadyLabel.textContent = astraReady() ? "Ready" : "Needs Mantra";
  el.astraRequirement.textContent = `${a.mantra}`;
  el.astraFusion.textContent = `Requires: ${a.astraNeed.map((id) => elementById(id).name).join(" + ")}`;
  el.fusionTierLabel.textContent = fusion.tier === elements.length ? "All Elements" : `Tier ${fusion.tier}`;
  el.fusionName.textContent = fusion.name;
  el.fusionDescription.textContent = fusion.text;
  el.powerGrid.innerHTML = a.powers.map((power) => `<span class="power-tile">${power}</span>`).join("");
  el.elementGrid.innerHTML = elements
    .map((element) => {
      const active = state.activeElements.includes(element.id);
      const locked = state.mastery < element.unlock;
      return `
        <button class="element-chip ${active ? "active" : ""} ${locked ? "locked" : ""}" style="--chip-color: ${element.color}" type="button" data-element="${element.id}">
          ${element.name}${locked ? ` ${element.unlock}` : ""}
        </button>
      `;
    })
    .join("");
  document.querySelectorAll("[data-element]").forEach((button) => {
    button.addEventListener("click", () => toggleElement(button.dataset.element));
  });
  renderFusionSequence();
  el.boonList.innerHTML = state.boons.length
    ? state.boons
        .map((id) => boonCatalog.find((item) => item.id === id))
        .filter(Boolean)
        .map((boon) => `<div class="boon-item ${boon.type}"><span>${boon.name}</span><b>${boon.text}</b></div>`)
        .join("")
    : `<div class="boon-item"><span>Unwritten</span><b>Earned through trials</b></div>`;
  el.eventLog.innerHTML = state.log.map((entry) => `<p>${entry}</p>`).join("");
}

function drawBackground(width, height) {
  const grad = ctx.createLinearGradient(0, 0, width, height);
  grad.addColorStop(0, "#111820");
  grad.addColorStop(0.45, "#161412");
  grad.addColorStop(1, "#080a0c");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.translate(width / 2, height / 2);
  for (let i = 0; i < 9; i += 1) {
    ctx.rotate(Math.PI / 9);
    ctx.strokeStyle = `rgba(228, 182, 78, ${0.04 + i * 0.007})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(0, 0, width * (0.12 + i * 0.045), height * (0.06 + i * 0.025), 0, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();

  ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
  for (let i = 0; i < 90; i += 1) {
    const x = (i * 83 + state.turn * 7) % width;
    const y = (i * 47 + state.turn * 3) % height;
    ctx.fillRect(x, y, 1.5, 1.5);
  }
}

function drawFigure(x, y, radius, color, label, hp, maxHp, isPlayer) {
  ctx.save();
  ctx.translate(x, y);

  const aura = ctx.createRadialGradient(0, 0, radius * 0.2, 0, 0, radius * 2.1);
  aura.addColorStop(0, `${color}aa`);
  aura.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = aura;
  ctx.beginPath();
  ctx.arc(0, 0, radius * 2.1, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  for (let i = 0; i < 4; i += 1) {
    ctx.rotate(Math.PI / 4);
    ctx.beginPath();
    ctx.moveTo(0, -radius * 1.65);
    ctx.lineTo(radius * 0.42, -radius * 0.28);
    ctx.lineTo(radius * 1.65, 0);
    ctx.lineTo(radius * 0.42, radius * 0.28);
    ctx.lineTo(0, radius * 1.65);
    ctx.stroke();
  }
  ctx.restore();

  ctx.fillStyle = "#f2efe7";
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.76, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.44, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#f2efe7";
  ctx.font = "700 18px system-ui";
  ctx.textAlign = "center";
  ctx.fillText(label, 0, radius * 2.38);

  ctx.fillStyle = "#0c1012";
  ctx.fillRect(-radius * 1.4, radius * 1.85, radius * 2.8, 9);
  ctx.fillStyle = isPlayer ? "#68b66f" : "#d95d42";
  ctx.fillRect(-radius * 1.4, radius * 1.85, radius * 2.8 * clamp(hp / maxHp, 0, 1), 9);

  ctx.restore();
}

function drawParticles() {
  state.particles = state.particles.filter((p) => p.life > 0);
  state.particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life -= 1;
    p.vx *= 0.98;
    p.vy *= 0.98;
    ctx.fillStyle = p.color;
    ctx.globalAlpha = clamp(p.life / 45, 0, 1);
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  });
}

function spawnProjectile(x, y, targetX, targetY, speed, radius, color, damage, kind = "bolt") {
  const dx = targetX - x;
  const dy = targetY - y;
  const len = Math.hypot(dx, dy) || 1;
  state.projectiles.push({
    x,
    y,
    vx: (dx / len) * speed,
    vy: (dy / len) * speed,
    radius,
    color,
    damage,
    kind,
    life: 220
  });
}

function enemyPatternAttack() {
  const g = guardian();
  const enemyPoint = arenaPoint(state.enemy);
  const playerPoint = arenaPoint(state.player);
  const baseDamage = 8 + state.lokaIndex * 2.2;

  if (g.pattern === "slam") {
    spawnProjectile(enemyPoint.x, enemyPoint.y, playerPoint.x, playerPoint.y, 2.2, 18, g.color, baseDamage, "slam");
  } else if (g.pattern === "dash") {
    state.enemy.vx = Math.sign(playerPoint.x - enemyPoint.x) * 0.018;
    state.enemy.vy = Math.sign(playerPoint.y - enemyPoint.y) * 0.012;
    spawnProjectile(enemyPoint.x, enemyPoint.y, playerPoint.x, playerPoint.y, 3.4, 10, g.color, baseDamage * 0.85, "dash");
  } else if (g.pattern === "bolt") {
    [-0.18, 0, 0.18].forEach((offset) => {
      spawnProjectile(enemyPoint.x, enemyPoint.y, playerPoint.x + offset * el.canvas.width, playerPoint.y, 3.1, 9, g.color, baseDamage, "bolt");
    });
  } else if (g.pattern === "ring") {
    for (let i = 0; i < 8; i += 1) {
      const angle = (Math.PI * 2 * i) / 8;
      spawnProjectile(enemyPoint.x, enemyPoint.y, enemyPoint.x + Math.cos(angle) * 140, enemyPoint.y + Math.sin(angle) * 140, 2.2, 8, g.color, baseDamage * 0.8, "ring");
    }
  } else if (g.pattern === "spiral") {
    for (let i = 0; i < 5; i += 1) {
      const angle = state.turn * 0.4 + i * 1.25;
      spawnProjectile(enemyPoint.x, enemyPoint.y, enemyPoint.x + Math.cos(angle) * 160, enemyPoint.y + Math.sin(angle) * 160, 2.4, 9, g.color, baseDamage, "spiral");
    }
  } else if (g.pattern === "time") {
    spawnProjectile(playerPoint.x - 130, playerPoint.y, playerPoint.x + 130, playerPoint.y, 1.8, 13, g.color, baseDamage * 1.3, "time");
    state.surge = clamp(state.surge - 4, 0, 100);
  } else {
    for (let i = 0; i < 12; i += 1) {
      const angle = (Math.PI * 2 * i) / 12;
      spawnProjectile(enemyPoint.x, enemyPoint.y, enemyPoint.x + Math.cos(angle) * 180, enemyPoint.y + Math.sin(angle) * 180, 2.7, 8, g.color, baseDamage, "nova");
    }
  }
  addLog(`${g.className} uses ${g.pattern} pattern.`);
  renderUi();
}

function updateWorld() {
  const speed = (0.0065 + state.mastery * 0.00002) * (fusionFor().key.includes("vayu") ? 1.22 : 1);
  const left = state.keys.arrowleft || state.keys.a;
  const right = state.keys.arrowright || state.keys.d;
  const up = state.keys.arrowup || state.keys.w;
  const down = state.keys.arrowdown || state.keys.s;

  state.player.x = clamp(state.player.x + (right ? speed : 0) - (left ? speed : 0), 0.08, 0.92);
  state.player.y = clamp(state.player.y + (down ? speed : 0) - (up ? speed : 0), 0.2, 0.82);

  const g = guardian();
  const drift = g.speed * 0.0008;
  state.enemy.x = clamp(state.enemy.x + Math.sign(state.player.x - state.enemy.x) * drift + state.enemy.vx, 0.12, 0.9);
  state.enemy.y = clamp(state.enemy.y + Math.sin(Date.now() / 560) * 0.0008 + state.enemy.vy, 0.22, 0.74);
  state.enemy.vx *= 0.92;
  state.enemy.vy *= 0.92;
  state.enemy.attackTimer -= 1;

  if (state.enemy.attackTimer <= 0 && state.enemyHp > 0) {
    enemyPatternAttack();
    state.enemy.attackTimer = Math.max(42, 110 - state.lokaIndex * 8);
  }

  const playerPoint = arenaPoint(state.player);
  state.projectiles = state.projectiles.filter((p) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life -= 1;

    if (distance(p, playerPoint) < p.radius + 24) {
      damagePlayer(p.damage, p.color, playerPoint.x, playerPoint.y);
      return false;
    }

    return p.life > 0 && p.x > -80 && p.x < el.canvas.width + 80 && p.y > -80 && p.y < el.canvas.height + 80;
  });

  if (state.hitFlash > 0) state.hitFlash -= 1;
}

function fusionSignature(fusion) {
  return [...fusion.name].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function drawFusionEffect(x, y, radius, color, style, fusion) {
  const signature = fusionSignature(fusion);
  const spokes = 5 + (signature % 8);
  const offset = (signature % 360) * (Math.PI / 180);
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(offset + Date.now() / (2600 + signature));
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.72;

  if (style === "lightning") {
    for (let i = 0; i < 4; i += 1) {
      ctx.beginPath();
      ctx.moveTo(-radius * 1.2, -radius * 0.6 + i * radius * 0.35);
      ctx.lineTo(-radius * 0.2, -radius * 0.1);
      ctx.lineTo(-radius * 0.55, radius * 0.35);
      ctx.lineTo(radius * 1.15, -radius * 0.25 + i * radius * 0.25);
      ctx.stroke();
    }
  } else if (style === "wave") {
    for (let i = 0; i < 3; i += 1) {
      ctx.beginPath();
      ctx.arc(0, 0, radius * (1 + i * 0.32), 0.25, Math.PI * 1.55);
      ctx.stroke();
    }
  } else if (style === "quake") {
    for (let i = -2; i <= 2; i += 1) {
      ctx.fillRect(i * radius * 0.35, radius * 0.95, radius * 0.18, radius * 0.65);
    }
  } else if (style === "time") {
    ctx.beginPath();
    ctx.arc(0, 0, radius * 1.55, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -radius * 1.1);
    ctx.moveTo(0, 0);
    ctx.lineTo(radius * 0.9, radius * 0.25);
    ctx.stroke();
  } else if (style === "mirage") {
    for (let i = 0; i < 5; i += 1) {
      ctx.strokeRect(-radius * 0.9 + i * 5, -radius * 0.9 + i * 3, radius * 1.8, radius * 1.8);
    }
  } else if (style === "shadow") {
    ctx.globalAlpha = 0.38;
    ctx.beginPath();
    ctx.ellipse(0, radius * 0.1, radius * 1.7, radius * 1.05, 0, 0, Math.PI * 2);
    ctx.fill();
  } else if (style === "solar" || style === "shakti") {
    for (let i = 0; i < 12; i += 1) {
      const angle = (Math.PI * 2 * i) / 12;
      ctx.beginPath();
      ctx.moveTo(Math.cos(angle) * radius * 1.1, Math.sin(angle) * radius * 1.1);
      ctx.lineTo(Math.cos(angle) * radius * 1.75, Math.sin(angle) * radius * 1.75);
      ctx.stroke();
    }
  } else {
    ctx.beginPath();
    ctx.arc(0, 0, radius * 1.45, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.globalAlpha = 0.42;
  for (let i = 0; i < spokes; i += 1) {
    const angle = (Math.PI * 2 * i) / spokes;
    const dotRadius = radius * (1.35 + (signature % 5) * 0.04);
    ctx.beginPath();
    ctx.arc(Math.cos(angle) * dotRadius, Math.sin(angle) * dotRadius, 2 + (signature % 3), 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
  ctx.globalAlpha = 1;
}

function drawProjectiles() {
  state.projectiles.forEach((p) => {
    ctx.save();
    ctx.fillStyle = p.color;
    ctx.strokeStyle = p.color;
    ctx.globalAlpha = 0.86;
    if (p.kind === "time") {
      ctx.strokeRect(p.x - p.radius, p.y - p.radius, p.radius * 2, p.radius * 2);
    } else {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  });
}

function drawArena() {
  const width = el.canvas.width;
  const height = el.canvas.height;
  const a = avatar();
  const fusion = fusionFor();
  drawBackground(width, height);

  ctx.fillStyle = "rgba(228, 182, 78, 0.12)";
  ctx.beginPath();
  ctx.ellipse(width / 2, height * 0.74, width * 0.32, height * 0.07, 0, 0, Math.PI * 2);
  ctx.fill();

  const playerPoint = arenaPoint(state.player);
  const enemyPoint = arenaPoint(state.enemy);
  drawFusionEffect(playerPoint.x, playerPoint.y, 42 + fusion.tier * 0.9, fusion.color, fusionEffectStyle(fusion), fusion);
  drawFigure(playerPoint.x, playerPoint.y, 42 + fusion.tier * 0.9, fusion.color, fusion.name, state.playerHp, state.playerMax, true);
  drawFigure(enemyPoint.x, enemyPoint.y, 48 + state.lokaIndex * 3, guardian().color, guardian().name, state.enemyHp, state.enemyMax, false);
  drawProjectiles();
  drawParticles();

  if (state.hitFlash > 0) {
    ctx.fillStyle = `rgba(217, 93, 66, ${state.hitFlash / 90})`;
    ctx.fillRect(0, 0, width, height);
  }
}

function resizeCanvas() {
  const rect = el.canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  el.canvas.width = Math.floor(rect.width * ratio);
  el.canvas.height = Math.floor(rect.height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  el.canvas.width = Math.floor(rect.width);
  el.canvas.height = Math.floor(rect.height);
  render();
}

function render() {
  renderAvatarList();
  renderLokaTrack();
  renderUi();
  drawArena();
}

function animate() {
  updateWorld();
  drawArena();
  requestAnimationFrame(animate);
}

el.strikeBtn.addEventListener("click", strike);
el.astraBtn.addEventListener("click", invokeAstra);
el.tapasyaBtn.addEventListener("click", tapasya);
el.reincarnateBtn.addEventListener("click", reincarnate);
el.dharmaChoiceBtn.addEventListener("click", () => makeChoice("dharma"));
el.powerChoiceBtn.addEventListener("click", () => makeChoice("power"));
el.mercyChoiceBtn.addEventListener("click", () => makeChoice("mercy"));
el.resetBtn.addEventListener("click", resetCycle);
el.fuseBtn.addEventListener("click", fuseElements);
el.clearFusionBtn.addEventListener("click", clearFusion);
window.addEventListener("resize", resizeCanvas);
window.addEventListener("keydown", (event) => {
  state.keys[event.key.toLowerCase()] = true;
  if (event.key === "1") strike();
  if (event.key === "2") invokeAstra();
  if (event.key === "3") tapasya();
  if (event.code === "Space") {
    event.preventDefault();
    strike();
  }
  if (event.key.toLowerCase() === "f") invokeAstra();
  if (event.key.toLowerCase() === "r") reincarnate();
});
window.addEventListener("keyup", (event) => {
  state.keys[event.key.toLowerCase()] = false;
});

if (!loadGame()) {
  rollEnemy();
}
render();
animate();
