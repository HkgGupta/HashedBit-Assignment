import { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import '../style/BookingForm.css';

const BookingForm = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { id } = useParams();
    const { movieTitle } = location.state || id;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const bookingID = generateBookingID();
        navigate('/confirm', { state: { formData, bookingID } });
    };

    const generateBookingID = () => {
        const characters = '0123456789';
        let bookingID = '';
        for (let i = 0; i < 10; i++) {
            bookingID += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return bookingID;
    };


    return (
        <div className="container">
            <div className="book-form">
                <h2>- Booking Form - </h2>
                <p><i>&quot;{movieTitle}&quot;</i></p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile:</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
