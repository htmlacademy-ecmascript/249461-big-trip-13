const generateTotalPrice = (points) => {
  const startPrice = 0;
  const totalPrice = points.reduce((a, b) => a + b.price, startPrice);
  return totalPrice;
};

export const tripCost = (points) => {
  return `
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${generateTotalPrice(points)}</span>
    </p>`;
};