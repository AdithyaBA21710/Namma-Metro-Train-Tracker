const fs = require('fs');

const content = fs.readFileSync('./index.html', 'utf-8');

const start = content.indexOf('const SCHEDULE_DATA = {');
const end = content.indexOf('function initializePhysicsAndMap() {');
eval(content.slice(start, end));

const days = ['monday', 'tuesday_friday', 'saturday', 'sunday'];

console.log("Validation successful! Day trips generated:");
days.forEach(d => {
  const trips = generateDayTrips(d);
  const p = trips.filter(t => t.lineKey === 'purple').length;
  const g = trips.filter(t => t.lineKey === 'green').length;
  const y = trips.filter(t => t.lineKey === 'yellow').length;
  console.log(`- ${d}: Total trips = ${trips.length} (Purple: ${p}, Green: ${g}, Yellow: ${y})`);
});
