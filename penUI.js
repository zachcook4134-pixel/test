// penUI.js

export class PenUI {
  constructor() {
    this.container = document.getElementById('pen-ui');
    this.selectInput = document.getElementById('animal-type-select');
    this.capacityLabel = document.getElementById('pen-capacity');
    this.closeBtn = document.getElementById('close-pen-ui');
    this.currentMarker = null;

    // Update the marker's animal type when the dropdown changes
    this.selectInput.addEventListener('change', (e) => {
      if (this.currentMarker) {
        this.currentMarker.animalType = e.target.value;
        this.updateDisplay();
      }
    });

    // Close the menu
    this.closeBtn.addEventListener('click', () => this.close());
  }

  // Called when the player interacts with a pen_marker in the world
  open(penMarker) {
    this.currentMarker = penMarker;
    this.selectInput.value = penMarker.animalType || 'none';
    this.updateDisplay();
    this.container.style.display = 'block';
  }

  updateDisplay() {
    if (!this.currentMarker) return;
    const count = this.currentMarker.assignedAnimals ? this.currentMarker.assignedAnimals.length : 0;
    const max = this.currentMarker.maxCapacity || 10;
    this.capacityLabel.innerText = `${count} / ${max}`;
  }

  close() {
    this.container.style.display = 'none';
    this.currentMarker = null;
  }
}