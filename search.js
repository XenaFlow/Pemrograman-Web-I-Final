document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            const searchQuery = e.target.value.toLowerCase();
            
            const gameCards = document.querySelectorAll('.game-card');
            
            gameCards.forEach(card => {
                const titleBox = card.querySelector('.game-info-box h3');
                
                if (titleBox) {
                    const gameTitle = titleBox.textContent.toLowerCase();
                    
                    if (gameTitle.includes(searchQuery)) {
                        card.style.display = 'flex'; 
                    } else {
                        card.style.display = 'none'; 
                    }
                }
            });
        });
    }
});