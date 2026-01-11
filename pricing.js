const pricingTable = document.getElementById('pricing-table');

const plans = [
  { name: "Free", monthly: 0, yearly: 0, users: 3, features: ["3 Sends"] },
  { name: "Basic", monthly: 29, yearly: 290, users: 5, features: ["10 Sends", "Basic Support"] },
  { name: "Professional", monthly: 59, yearly: 590, users: 10, features: ["Unlimited Sends", "Priority Support", "Advanced Collaboration"] },
  { name: "Enterprise", monthly: "Custom", yearly: "Custom", users: "Custom", features: ["Custom Features", "Dedicated Support"] },
];

plans.forEach(plan => {
  const div = document.createElement('div');
  div.className = 'plan';
  div.innerHTML = `
    <h3>${plan.name}</h3>
    <p>Monthly: ${plan.monthly}</p>
    <p>Yearly: ${plan.yearly}</p>
    <p>Users: ${plan.users}</p>
    <ul>${plan.features.map(f => `<li>${f}</li>`).join('')}</ul>
  `;
  pricingTable.appendChild(div);
});
