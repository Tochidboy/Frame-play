const inputs = document.querySelectorAll(".controls input")

inputs.forEach(input => input.addEventListener("change", handleMyUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleMyUpdate));

function handleMyUpdate(){
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty( `--${this.name}`, this.value + suffix);
}


//hourHand.style.transform = 'rotate('+hourDegrees+'deg)' ;//`rotate(${secondDegrees}deg)`;
