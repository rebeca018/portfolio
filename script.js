function setPowerLevels() {
    
    const powerCards = document.querySelectorAll('.card-p-power');
  
    powerCards.forEach(card => {
      
      const powerLevel = parseInt(card.getAttribute('power-level'));
  
      
      const powerBar = card.querySelector('.power-bar');
  
      
      powerBar.style.width = `${powerLevel}%`;
  
      //green
      //yellow
      //red
      if (powerLevel <= 40) {
        powerBar.style.backgroundColor = "#9B59B6";
      } else if (powerLevel <= 70) {
        powerBar.style.backgroundColor = "#8E44AD"; 
      } else {
        powerBar.style.backgroundColor = "#6C3483"; 
      }
    });
  }
  
  
window.onload = setPowerLevels;
  