document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (confirm("Processing your reservation, please click Confirm to proceed.")) {
                const formData = new FormData(bookingForm);
                const bookingData = {};
                formData.forEach((value, key) => {
                    bookingData[key] = value;
                });

                localStorage.setItem('bookingData', JSON.stringify(bookingData));
                window.location.href = '../html/summary.html';
            }
        });
    }

    const summaryContent = document.getElementById('summaryContent');

    if (summaryContent) {
        const bookingData = JSON.parse(localStorage.getItem('bookingData'));

        if (bookingData) {
            summaryContent.innerHTML = `
                <p><strong>Name:</strong> ${bookingData.name}</p>
                <p><strong>Email:</strong> ${bookingData.email}</p>
                <p><strong>Check-in Date:</strong> ${bookingData.checkin}</p>
                <p><strong>Check-out Date:</strong> ${bookingData.checkout}</p>
                <p><strong>Room Type:</strong> ${bookingData.room}</p>
            `;
        } else {
            summaryContent.innerHTML = '<p>No booking data found.</p>';
        }

        const bookAnotherButton = document.getElementById('bookAnother');
        bookAnotherButton.addEventListener('click', () => {
            window.location.href = './index.html';
        });
    }
});