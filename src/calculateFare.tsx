
const calculateFare = (tablearray: any, input: any) => {
  const inputNumber: number = parseFloat(input);

  const sortedByDistance = tablearray
    .slice()
    .sort(
      (a: any, b: any) =>
        Math.abs(a.meters - inputNumber) - Math.abs(b.meters - inputNumber)
    );

  const closestFourDistances = sortedByDistance
    .slice(0, 4)
    .map((item: any) => item.meters);
  const closestFourFares = sortedByDistance
    .slice(0, 4)
    .map((item: any) => item.fare);

  closestFourDistances.sort((a: any, b: any) => a - b);
  closestFourFares.sort((a: any, b: any) => a - b);

  const x0: number = closestFourDistances[0];
  const y0: number = closestFourFares[0];

  const x1: number = closestFourDistances[1];
  const y1: number = closestFourFares[1];

  const x2: number = closestFourDistances[2];
  const y2: number = closestFourFares[2];

  const x3: number = closestFourDistances[3];
  const y3: number = closestFourFares[3];

  const calculatedFare: number =
    ((inputNumber - x1) / (x0 - x1)) *
      ((inputNumber - x2) / (x0 - x2)) *
      ((inputNumber - x3) / (x0 - x3)) *
      y0 +
    ((inputNumber - x0) / (x1 - x0)) *
      ((inputNumber - x2) / (x1 - x2)) *
      ((inputNumber - x3) / (x1 - x3)) *
      y1 +
    ((inputNumber - x0) / (x2 - x0)) *
      ((inputNumber - x1) / (x2 - x1)) *
      ((inputNumber - x3) / (x2 - x3)) *
      y2 +
    ((inputNumber - x0) / (x3 - x0)) *
      ((inputNumber - x1) / (x3 - x1)) *
      ((inputNumber - x2) / (x3 - x2)) *
      y3;
      console.log(x0, x1, x2, x3, y0, y1, y2, y3, calculatedFare)
  return {
    closestFourDistances,
    closestFourFares,
    calculatedFare,
  };
};

export default calculateFare;