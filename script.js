function rate(stars) {
    var pageTitle = document.getElementById('pageTitle');
    if (stars < 4) {
        
        pageTitle.textContent = "Feedback to us";
        
        document.getElementById('ratings').style.display = 'none';
        
        document.getElementById('feedback').style.display = 'block';
    } else {
        
        window.open('https://g.page/r/CR4Koahp2uHYEBM/review');
        window.location.href = 'https://yewdigitallock.com.sg/digital-locks/digital-door-locks/'; 
        // Put the product link here if applicable
        
    }
}


document.getElementById('feedbackText').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        submitFeedback();
    }
});


function submitFeedback() {
    const feedbackElement = document.getElementById('feedback');
    const feedbackConfirmationElement = document.getElementById('feedbackConfirmation');
    const buttonElement = document.querySelector('.btn');

    
    buttonElement.focus();

    
    setTimeout(() => {
        feedbackElement.style.display = 'none';
        feedbackConfirmationElement.style.display = 'block';
    }, 2000);  
}





document.getElementById('feedbackText').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        submitFeedback();
    }
});



function highlightStars(stars) {
    var starElements = document.getElementsByClassName('star');
    for (var i = 0; i < starElements.length; i++) {
        if (i < stars) {
            starElements[i].classList.add('highlighted');
        } else {
            starElements[i].classList.remove('highlighted');
        }
    }
}


function resetStars() {
    var starElements = document.getElementsByClassName('star');
    for (var i = 0; i < starElements.length; i++) {
        starElements[i].classList.remove('highlighted');
    }
}

