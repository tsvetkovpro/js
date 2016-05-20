 // Each callback function now holds a reference to their own version of i.

 function loadProfiles(userNames){
    // ....
    for (let i in userNames){
        _fetchProfile('/users/' + userNames[i], function() {
            console.log("fetched for ", userNames[i]);
        });
    }
}

loadProfiles(["Sam", "Tyler", "Brook", "Alex"]); // Fetched for Sam, Fetched for Tyler, Fetched for Brook, Fetched for Alex
