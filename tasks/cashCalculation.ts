const getNetCashPerDay = (dayStats) => {
  const netCashPerDay = {};
  for (let i = 0; i < dayStats.length; i++) {
    const { dayOfWeek, netCash } = dayStats[i];
    if (!netCashPerDay[dayOfWeek]) {
      netCashPerDay[dayOfWeek] = netCash;
    } else {
      netCashPerDay[dayOfWeek] += netCash;
    }
  }
  return netCashPerDay;
};

const stats = [
  { dayOfWeek: 1, netCash: 100 },
  { dayOfWeek: 2, netCash: 200 },
  { dayOfWeek: 1, netCash: 300 },
  { dayOfWeek: 3, netCash: 400 },
  { dayOfWeek: 1, netCash: 500 },
  { dayOfWeek: 2, netCash: 600 },
  { dayOfWeek: 5, netCash: 700 },
];

const result = getNetCashPerDay(stats);

console.log(result); /**{1: 900, 2: 800, 3: 400, 5: 700} */

/**Pitfalls of using floating points
 *  1. can lead to rounding errors
 * 2. can lead to precision errors ,ie. 0.1 + 0.2 = 0.30000000000000004
 * 3. can lead to comparison errors, ie. 0.1 + 0.2 === 0.3 // false
 * 4.can accumulate over multiple operations,which results in final net cash values
 *
 *
 */
