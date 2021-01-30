//First Class Click Action
document.getElementById('firstClass-plus').addEventListener('click', function () {
    const ticketValue = getTicketValue('firstClass', 'plus');

});
document.getElementById('firstClass-minus').addEventListener('click', function () {
    const ticketValue = getTicketValue('firstClass', 'minus');
});

//Economy Class Click Action
document.getElementById('economyClass-plus').addEventListener('click', function () {
    const economyClassNewTicket = getTicketValue('economyClass', 'plus');
});
document.getElementById('economyClass-minus').addEventListener('click', function () {
    const economyClassNewTicket = getTicketValue('economyClass', 'minus');
});

//Click Action Common Function
function getTicketValue(ticketClass, ticketNumber) {
    const TicketCount = document.getElementById(ticketClass + '-count');
    const TicketAmount = parseInt(TicketCount.value);
    let NewTicket = TicketAmount;
    if (ticketNumber == 'plus') {
        NewTicket = TicketAmount + 1;
    }
    if (ticketNumber == 'minus' && NewTicket > 0) {
        NewTicket = TicketAmount - 1;
    }
    TicketCount.value = NewTicket;
    document.getElementById(ticketClass + '-ticket-count').innerText = NewTicket;
    calculations();
}

//Calculation Function  
function calculations() {
    const firstClassTicketCount = ticketCounter('firstClass');
    const economyClassTicketCount = ticketCounter('economyClass');
    if(economyClassTicketCount == 0 && firstClassTicketCount == 0){
        document.getElementById('confirm-btn').disabled = true;
    }
    const price = firstClassTicketCount * 150 + economyClassTicketCount * 100;
    const ticketPrice = ticketConfirmation('ticket-price', price);
    const confirmTicketPrice = ticketConfirmation('confirmTicket-price', price);
    const vatCost = Math.round(price * 0.1);
    const Vat = ticketConfirmation('vat', vatCost);
    const confirmVat = ticketConfirmation('confirmVat', vatCost);
    const allTicketPriceWithVat = vatCost + price;
    const total = ticketConfirmation('total', allTicketPriceWithVat);
    const confirmTotal = ticketConfirmation('confirm-total', allTicketPriceWithVat);
      
}
//TicketCounter Function
function ticketCounter(ticketClass) {
    const TicketCount = document.getElementById(ticketClass + '-count');
    const TicketAmount = parseInt(TicketCount.value);
    return TicketAmount;
}
//Ticket Confirmation Function
function ticketConfirmation(id, price) {
    document.getElementById(id).innerText = price;
    document.getElementById(id).innerText = price;
}

// Booking Btn
document.getElementById('booking-btn').addEventListener('click', function () {
    const bookingCalculation = document.getElementById('booking-calculations');
    bookingCalculation.style.display = 'none';
    const Calculation = document.getElementById('calculations');
    Calculation.style.display = 'block';
    document.getElementById("extra").classList.add("margin");
})
// Confirm Btn
document.getElementById('confirm-btn').addEventListener('click', function () {
    const bookingCalculation = document.getElementById('calculations');
    bookingCalculation.style.display = 'none';
    const Calculation = document.getElementById('congratulation');
    Calculation.style.display = 'block';
    document.getElementById("extra").classList.add("margin");
});
// Thank You //
