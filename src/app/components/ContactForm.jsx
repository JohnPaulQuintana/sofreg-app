import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form Submitted', formData);
    };

    return (
        <section className="contact section-padding desktop:px-40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 valign">
                        <div className="sec-head info-box full-width md-mb80">
                            <div className="phone fz-30 fw-600 underline main-color">
                                <a href="#0" className='text-2xl'>+63 917 7070 531</a>
                            </div>
                            <div className="morinfo mt-4 pb-2 bord-thin-bottom">
                                <h6 className="mb-2 text-xl">Address</h6>
                                <p className='text-sm'>Quezon City Metro Manila, Philippines</p>
                            </div>
                            <div className="morinfo mt-4 pb-2 bord-thin-bottom">
                                <h6 className="mb-2 text-xl">Email</h6>
                                <p className='text-sm'>info@sofregsolutions.com</p>
                            </div>

                            <div className="social-icon-circle mt-4 flex gap-2">
                                <a href="https://www.facebook.com/people/Sofreg-Solutions/61567081641563/">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="tel:+639177070531">
                                    <i class="fa-brands fa-whatsapp"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/sofreg-solutions/">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="mailto:sofreginfo@gmail.com">
                                    <i class="fa-regular fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 offset-lg-1 valign">
                        <div className="full-width">
                            <div className="sec-head mb-4">
                                <h6 className="sub-title main-color mb-2 font-bold">Let's Chat</h6>
                                <h3 className="text-u ls1 text-4xl font-bold">
                                    Send a <span className="fw-200">message</span>
                                </h3>
                            </div>
                            <form
                                id="contact-form"
                                className="form2"
                                method="post"
                                action="contact.php"
                                onSubmit={handleSubmit}
                            >
                                <div className="messages"></div>

                                <div className="controls row">
                                    <div className="col-lg-6">
                                        <div className="form-group mb-2">
                                            <input
                                                id="form_name"
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group mb-2">
                                            <input
                                                id="form_email"
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-group mb-2">
                                            <input
                                                id="form_subject"
                                                type="text"
                                                name="subject"
                                                placeholder="Subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea
                                                id="form_message"
                                                name="message"
                                                placeholder="Message"
                                                rows="4"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="mt-2">
                                            <button type="submit" className="butn butn-full butn-bord radius-10">
                                                <span className="text">Let's Talk</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
