// hotel registration --- store in an object

var test = {
    hotelName: "Hampton",
    rooms: 350,
    booked: 165,
    display: function() {
        return this.rooms;
    }
};

// // accessing the properties
// console.log(test.hotelName);

// // changing the properties
// test.booked+=50;
// console.log(test.booked);
// console.log("Total amount of rooms: "+test.display)

// Start the hotel registration
var guestList = [];
function reservation() {
    // Get the values from the form
    var guest = {
        name: $('#name').val(),
        numGuest: $('#num').val(),
        roomType: $('#room').val(),
        checkIn: $('#checkin').val(),
        checkOut: $('#checkout').val()
    };
    // Add guests to the guestList
    guestList.push(guest);
    alert("Guest added");
}
function displayList() {
    $('#guestList').html("");
    $('#guestList').append("<table>");
    for (var i in guestList) {
        $('#guestList').append("<tr><td>"+guestList[i].name+"</td>");
        $('#guestList').append("<td>"+guestList[i].numGuest+"</td>");
        $('#guestList').append("<td>"+guestList[i].roomType+"</td>");
        $('#guestList').append("<td>"+guestList[i].checkIn+"</td>");
        $('#guestList').append("<td>"+guestList[i].checkOut+"</td></tr>");
        $('#guestList').append("</table>");
    }

}
// Register the event handler
$('#submit').click(reservation);
$('#lists').click(displayList);