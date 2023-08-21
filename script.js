// Variables for game state
let bladesOfGrassPlanted = 0;
let oxygenRate = 18; // Milligrams per day
let oxygenPerSecond = 0;
let co2Rate = 13.248 // Milligrams per day
let co2PerSecond = 0;
let totalOxygenProduced = 0;
let totalCO2Absorbed = 0;
let progressMin = 0;
let progressMax = 100;
let progressValue = 0;

// Species counters
const animalSpeciesCounts = {
  birds: {
    robins: 0,
    sparrows: 0,
    blackbirds: 0,
    blueTits: 0,
    finches: 0
  },
  insects: {
    ants: 0,
    butterflies: 0,
    bees: 0,
    ladybugs: 0,
    dragonflies: 0,
    flies: 0,
    mosquitos: 0,
    moths: 0
  },
  arachnids: {
    gardenSpiders: 0,
    commonHouseSpiders: 0,
    wolfSpiders: 0,
    jumpingSpiders: 0,
    lynxSpiders: 0,
    crapSpiders: 0,
    nurseryWebSpiders: 0,
    sheetWeavers: 0,
    fishingSpiders: 0
  },
  smallMammals: {
    hedgehogs: 0,
    rabbits: 0
  },
  amphibians: {
    commonFrogs: 0,
    commonToads: 0,
    smoothNewts: 0,
    palmateNewts: 0,
    fireSalamanders: 0,
    commonMidwifeToads: 0
  },
  reptiles: {
    commonWallLizards: 0,
    slowWorms: 0,
    grassSnakes: 0,
    commonEuropeanAdders: 0,
    europeanGreenLizards: 0,
    commonEuropeanSkinks: 0
  },
  mollusks: {
    snails: 0,
    slugs: 0
  },
  domesticPets: {
    cats: 0,
    dogs: 0
  },
  rodents: {
    squirrels: 0,
    mice: 0,
    rats: 0,
    gardenDormice: 0
  }
};

const plantSpeciesCounts = {
  flowers: {
    roses: 0,
    tulips: 0,
    daisies: 0,
    pansies: 0,
    sunflowers:0
  },
  shrubs: {
    hdrangeas: 0,
    azaleas: 0,
    rhododendrons: 0
  },
  trees: {
    oaks: 0,
    beeches: 0,
    pines: 0,
    maples: 0,
    appleTrees: 0
  },
  herbs: {
    basils: 0,
    mints: 0,
    thymes: 0,
    rosemaries: 0,
    lavender: 0
  },
  vegetables: {
    tomatoes: 0,
    cucumbers: 0,
    lettuces: 0,
    carrots: 0
  },
  fruits: {
    strawberries: 0,
    raspberries: 0,
    currants: 0
  }
};

// DOM elements
const btnPlantGrass = document.getElementById("btn_plant_grass");
const grassPlantedSpan = document.getElementById("grass_planted");
const oxygenPerSecondSpan = document.getElementById("oxygen_per_second");
const co2PerSecondSpan = document.getElementById("co2_per_second");
const totalOxygenSpan = document.getElementById("total_oxygen");
const totalCO2Span = document.getElementById("total_co2");
const progressBar = document.getElementById("progress-bar");
const animalCategories = document.getElementById("animals-category");
const plantCategories = document.getElementById("plant-category");

// Event listeners
btnPlantGrass.addEventListener("click", plantGrass);

// Functions
function plantGrass() {
  // Update game state
  bladesOfGrassPlanted++;
  // Update DOM
  grassPlantedSpan.textContent = bladesOfGrassPlanted;
  // Calculate and update progress
  progressValue = Math.min(bladesOfGrassPlanted, progressMax);
  progressBar.value = progressValue;
  // Calculate and update oxygen and CO2 values
  calculateOxygenAndCO2();
}

function calculateOxygenAndCO2() {
  // Calculate oxygen and CO2 based on game logic
  // Update DOM elements with new values
  // ...
}

// Tooltips

// Select all list items with data-tooltip attribute
const tooltipItems = document.querySelectorAll('[data-tooltip]');

// Add event listeners to show/hide tooltips
tooltipItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    const tooltipText = item.getAttribute('data-tooltip');
    showTooltip(item, tooltipText);
  });

  item.addEventListener('mouseout', () => {
    hideTooltip(item);
  });
});

// Function to show tooltip
function showTooltip(element, text) {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = text;
  element.appendChild(tooltip);
}

// Function to hide tooltip
function hideTooltip(element) {
  const tooltip = element.querySelector('.tooltip');
  if (tooltip) {
    tooltip.remove();
  }
}
