const fs = require('fs');

// Helper to remove duplicates from an array
// Thank you StackOverflow: https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items
Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};


// Read dashboards from list
let dashboards = [];
fs.readdirSync('dashboards').forEach(process);

// Process an element
function process(element) {
    // Read config
    let config = JSON.parse(fs.readFileSync('dashboards/' + element + '/config.json'));

    // Read dashboard data
    let dashboardData = JSON.parse(fs.readFileSync('dashboards/' + element + '/dashboard.json'));
    let dataSources = [];
    dashboardData.widgets.forEach((widget) => {
        dataSources = dataSources.concat(widget.event_types).unique();
    });

    // Add to array
    dashboards.push({
        name: element,
        dataSources,
        config
    });
}

// Write out data for use in front-end
console.log(dashboards);
let json = JSON.stringify({
    'dashboards': dashboards
});
fs.writeFileSync('src/data.json', json);


