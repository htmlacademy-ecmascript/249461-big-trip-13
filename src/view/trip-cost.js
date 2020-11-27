const generateTotalPrice = (points) => {
  console.log(points);
  let totalPrice = 0;

  for (let i = 0; i < points.length; i++) {
    totalPrice += points[i].price;
  };
  return totalPrice;
};

export const tripCost = (points) => {
  return `
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${generateTotalPrice(points)}</span>
    </p>`;
};