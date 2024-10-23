function showCard(cardId) {
    // Get the selected card
    var selectedCard = document.getElementById(cardId);
    
    // Check if the selected card is currently visible
    if (selectedCard.style.display === 'block') {
        // If it's visible, hide it
        selectedCard.style.display = 'none';
    } else {
        // If it's not visible, hide all other cards first
        var cards = document.querySelectorAll('.info-card');
        cards.forEach(function(card) {
            card.style.display = 'none';
        });
        
        // Then show the selected card
        selectedCard.style.display = 'block';
    }
}
