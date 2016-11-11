var friends = {};

friends.kerin = {
    lastName: "Wu",
    firstName: "Kerin",
    number: 9889889988,
    address: ["1 Infinite Loop", "Cupertino", "CA"]
};

friends.claire = {
    lastName: "Tang",
    firstName: "Claire",
    number: 8778778877,
    address: ["333 Creek Road", "San Francisco", "CA"]
};

friends.eddie = {
    lastName: "Xie",
    firstName: "Eddie",
    number: 6656656655,
    address: ["1355 Market Street", " Washington D.C."]
};


var list = function (obj) {
    for (var key in obj) {
        console.log (key);
    }
}

list (friends);


var search = function (name) {
    for (var key in friends) {
        if (friends[key].firstName === name) {
            return friends[key];
        }
    };
};


var format = function(obj){
    if(obj) {
;       var formatStr = "";
        formatStr += "\nFirst name: " + obj.firstName;
        formatStr += "\nLast name: " + obj.lastName;
        formatStr += "\nNumber: " +obj.number;
        formatStr += "\nAddress: " + obj.address.join(", ");
        console.log(formatStr);
    } else {
        console.log("\nThe name was not found.")
    }
}

format (search ("Kerin"));
format (search ("Eddie"));
format (search ("Claire"));
format (search ("Crystal"));
