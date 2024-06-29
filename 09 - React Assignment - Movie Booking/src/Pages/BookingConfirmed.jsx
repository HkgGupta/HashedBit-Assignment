import { useLocation } from 'react-router-dom';

import '../style/BookingConfirmed.css';

const BookingConfirmed = () => {
    const location = useLocation();
    const { formData, bookingID } = location.state || {};

    return (
        <div className="container">
            <div className="confirmation-page">
                {formData ? (
                    <div>
                        <h2>Booking Confirmed</h2>
                        <img src="/check-mark.svg" alt="checked" />
                        <p><strong>BookingID:</strong> {bookingID}</p>
                        <p><strong>Name:</strong> {formData.name}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Mobile:</strong> {formData.mobile}</p>
                        <div className="message">
                            <p>Thank you for booking with us!</p>
                            <p>Happy watching!</p>
                        </div>

                    </div>
                ) : (
                    <div>
                        <h2>Booking Not Found</h2>
                        <p style={{ textAlign: 'center', color: 'red' }}>No booking details available.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingConfirmed;
