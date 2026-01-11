function choosePlan(plan) {
  localStorage.setItem("sendboxPlan", plan);
  if (plan === "enterprise") {
    location.hash = "contact";
  } else {
    window.location.href = "signup.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("planText");
  if (el) {
    el.textContent = "Selected plan: " + (localStorage.getItem("sendboxPlan") || "Free");
  }
});

function completeSignup() {
  const plan = localStorage.getItem("sendboxPlan");
  if (plan === "free") {
    window.location.href = "demo.html";
  } else {
    alert("Redirecting to secure payment (Stripe test mode placeholder)");
  }
}

function startVoice() {
  const r = new webkitSpeechRecognition();
  r.onresult = e => alert(e.results[0][0].transcript);
  r.start();
}
