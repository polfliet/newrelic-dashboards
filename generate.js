const fs = require('fs');

// Read dashboards from list
let dashboards = [];
fs.readdirSync('dashboards').forEach(process);

// Process an element
function process(element) {
    let config = JSON.parse(fs.readFileSync('dashboards/' + element + '/config.json'));
    dashboards.push({
        name: element,
        config
    });
}

// Write out data for use in front-end
console.log(dashboards);
let json = JSON.stringify({
    'dashboards': dashboards
});
fs.writeFileSync('src/data.json', json);


