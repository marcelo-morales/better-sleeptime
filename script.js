const colors = [
  "rgb, 168, 39, 254)",
  "rgb(154, 3, 254)",
  "rgb(150, 105, 254)",
  "rgb(140, 140, 255)",
  "rgb(187, 187, 255)",
  "rgb(143, 254, 221)",
]

function createWakeUpTimeLement(time, cycle) {
  let elm = document.createElement("div");
  elm.innerText = time;
  elm.style.color = colors[cycle];
  return elm;
}

function handleOnClick() {
    let output = document.querySelector(".output");
    output.style.display = "block";
  
    let hours = document.getElementById("hours");
    hours.innerHTML = "";
  
    let now = new Date();
    // allow 14 minutes to fall sleep!
    now.setMinutes(now.getMinutes() + 14);
  
    // calculate sleep cycles!
    for (let i = 1; i <= 6; i++) {
      now.setMinutes(now.getMinutes() + 90);
      const elm = createWakeUpTimeLement(now.toLocaleTimeString("en-US", { timeStyle: "short"}), i)
    } 

    hours.appendChild(elem);
  }