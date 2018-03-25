export const duffleBagValue = (itemDescriptions, weightAllowance) => {

    const pricePerKiloItems = itemDescriptions.map((item) => {
        return {
            ...item,
            pricePerKilo: item.value / item.weight
        }
    });

    const sortedPricePerKiloItems = pricePerKiloItems.sort((a, b) => {
        if (a.pricePerKilo < b.pricePerKilo) return 1;
        if (a.pricePerKilo > b.pricePerKilo) return -1;
        return 0;
    });

    let maxProfit = 0;
    let availableWeight = weightAllowance;

    for (let i = 0; i < sortedPricePerKiloItems.length; i++) {
        const item = sortedPricePerKiloItems[i];
        const itemAmount = Math.floor(availableWeight / item.weight);
        maxProfit += itemAmount * item.value;
        availableWeight -= itemAmount * item.weight;
        if (availableWeight <= 0) {
            return maxProfit
        }
    }
};

