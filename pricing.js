// pricing.js
document.addEventListener('DOMContentLoaded', () => {
    const billingToggle = document.getElementById('billingToggle');
    const pricingTable = document.getElementById('pricingTable');

    const plans = [
        {
            name: 'Free Test',
            monthly: 0,
            yearly: 0,
            features: ['3 sends', 'Basic voice commands', 'Limited storage', '1 user'],
            minUsers: 1
        },
        {
            name: 'Basic',
            monthly: 29,
            yearly: 29 * 12 * 0.8, // 20% discount
            features: ['Unlimited sends', 'Full voice control', '5GB storage', 'Up to 3 users', 'Email integration'],
            minUsers: 3
        },
        {
            name: 'Professional',
            monthly: 59,
            yearly: 59 * 12 * 0.8,
            features: ['Unlimited everything', 'Advanced security', '50GB storage', 'Up to 10 users', 'Priority support'],
            minUsers: 3
        },
        {
            name: 'Enterprise',
            monthly: 'Custom',
            yearly: 'Custom',
            features: ['Custom features', 'Unlimited storage', 'Dedicated support', 'Unlimited users', 'API access'],
            minUsers: 3
        }
    ];

    function renderPricing(yearly = false) {
        pricingTable.innerHTML = '';
        plans.forEach(plan => {
            const card = document.createElement('div');
            card.className = 'pricing-card';
            card.innerHTML = `
                <h3>${plan.name}</h3>
                <div class="price">$${yearly ? plan.yearly.toFixed(0) : plan.monthly}${yearly ? '/year' : '/month'}</div>
                <ul>
                    ${plan.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <button>Choose Plan</button>
            `;
            pricingTable.appendChild(card);
        });
    }

    billingToggle.onchange = () => renderPricing(billingToggle.checked);
    renderPricing(); // Initial render monthly
});
