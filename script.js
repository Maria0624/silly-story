const storyText =
  "It was a hot day :insertx:, when :inserty:. Suddenly, :insertz:. Everyone was shocked including :name:.";

const insertX = [
  "in a haunted forest",
  "on top of a flying mountain",
  "inside a broken spaceship",
  "at a noisy school canteen"
];

const insertY = [
  "a giant cat started dancing",
  "the sky turned purple",
  "a robot began singing loudly",
  "all the chairs started floating"
];

const insertZ = [
  "a pizza fell from the sky",
  "the principal started breakdancing",
  "the lights turned into jelly",
  "a goat took over the internet"
];

const customName = document.getElementById("customName");
const generateBtn = document.getElementById("generate");
const story = document.getElementById("story");

function randomValue(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateStory() {
  let newStory = storyText;

  let xItem = randomValue(insertX);
  let yItem = randomValue(insertY);
  let zItem = randomValue(insertZ);

  let name = "Alex";

  if (customName.value !== "") {
    name = customName.value;
  }

  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);
  newStory = newStory.replace(":name:", name);

  story.textContent = newStory;
}

generateBtn.addEventListener("click", generateStory);