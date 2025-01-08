function showCard(cardId) {
    var selectedCard = document.getElementById(cardId);
    
    if (selectedCard.style.display === 'block') {
        selectedCard.style.display = 'none';
    } else {
        var cards = document.querySelectorAll('.info-card');
        cards.forEach(function(card) {
            card.style.display = 'none';
        });
        
        selectedCard.style.display = 'block';
    }
}
function toggleResponsiveMenu() {
    const menu = document.querySelector('.responsive-menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}