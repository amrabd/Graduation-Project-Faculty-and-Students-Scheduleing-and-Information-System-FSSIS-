import { useRef, useState } from 'react';
import Header from '../../Components/Header/Header';
import css from './contactus.module.css';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from "@emailjs/browser";

const ContactUs = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNum: '',
        comment: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!formData.fullName) errors.fullName = "Full Name is required";
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }
        if (!formData.phoneNum) errors.phoneNum = "Phone number is required";
        if (!formData.comment) errors.comment = "Comment is required";
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        setErrors({});
        emailjs
            .sendForm(
                "service_1r18n9q",
                "template_mipk9h7",
                form.current,
                "uhuI8lOqTAd-7hJQb"
            )
            .then((response) => {
                toast.success("Email sent successfully");
            }, (error) => {
                toast.error("Failed to send email");
            });
        e.target.reset();
        setFormData({
            fullName: '',
            email: '',
            phoneNum: '',
            comment: ''
        });
    };

    return (
        <div className='bg-[#e8f0fe] -z-20 pb-14 mt-5'>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="light"
            />
            <img src="/Images/ContactUs/WhatsApp Image 2024-01-10 at 22.38 1.png" className='-z-10 absolute left-[30rem] top-4 w-[600px]' />
            <div className={css.contact + ' bg-[#0059D5] bg-opacity-50 h-full flex items-center justify-center text-white p-8'}>
                <div className={css.container}>
                    <Header title={'Contact us'} />
                    <div className={css['content-wrapper']}>
                        <div className={css["contact-info"]}>
                            <h3 className={css['contact-info h3']}>Getting in touch is easy!</h3>
                            <p className={css['contact-info p']}><i className={css['contact-info i']}></i> +123 456 789</p>
                            <p className={css['contact-info p']}><i className={css['contact-info i']}></i> info@example.com</p>
                            <p className={css['contact-info p']}> <i className={css['contact-info i']}></i>123 Street , city ,Country</p>
                            <p className={css['contact-info p'] + ' mt-16'}>Your feedback is greatly appreciated!
                                Please feel free to get in touch with us if you have any questions or comments. Keeping up with our most
                                recent news and updates is also possible by following us on social media.
                            </p>
                        </div>
                        <div className={css['contact-form']}>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className={css["form-group"]}>
                                    <fieldset className="w-12 border-2 rounded-md pr-4 border-[#0060E4] focus:border-none bg-white">
                                        <legend className={css.legend + " text-[#0059D5] "}>Full Name</legend>
                                        <input 
                                            type="text" 
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className={css.input + ' focus:outline-none pl-2'} 
                                        />
                                    </fieldset>
                                        {errors.fullName && <p className={css.error}>{errors.fullName}</p>}
                                </div>
                                <div className={css["form-group"]}>
                                    <fieldset className="w-12 border-2 rounded-md pr-4 border-[#0060E4] focus:border-[#0060E4] bg-white">
                                        <legend className={css.legend + " text-[#0059D5] "}>Email</legend>
                                        <input 
                                            type="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={css.input + ' focus:outline-none pl-2'} 
                                        />
                                    </fieldset>
                                        {errors.email && <p className={css.error}>{errors.email}</p>}
                                </div>
                                <div className={css["form-group"]}>
                                    <fieldset className="w-12 border-2 rounded-md pr-4 border-[#0060E4] focus:border-[#0060E4] bg-white">
                                        <legend className={css.legend + " text-[#0059D5] "}>Phone Number</legend>
                                        <input 
                                            type="number" 
                                            name="phoneNum"
                                            value={formData.phoneNum}
                                            onChange={handleChange}
                                            className={css.input + ' focus:outline-none pl-2'} 
                                        />
                                    </fieldset>
                                        {errors.phoneNum && <p className={css.error}>{errors.phoneNum}</p>}
                                </div>
                                <div className={css["form-group"]}>
                                    <fieldset className="w-12 border-2 rounded-md pr-4 border-[#0060E4] focus:border-[#0060E4] bg-white">
                                        <legend className={css.legend + " text-[#0059D5]"}>Comment</legend>
                                        <textarea 
                                            name="comment"
                                            value={formData.comment}
                                            onChange={handleChange}
                                            cols="2" 
                                            rows="2" 
                                            className={css.textarea + ' focus:outline-none pl-2 text-[#0059D5]'}
                                        ></textarea>
                                    </fieldset>
                                        {errors.comment && <p className={css.error}>{errors.comment}</p>}
                                </div>
                                <button type="submit" className={css.button + ' bg-[#0060E4]'}>Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className={css["social-icons"]}>
                        <a href="#" className={css["icons"]}><i className='bx bxl-github'></i></a>
                        <a href="#" className={css["icons"]}><i className='bx bxl-twitter'></i></a>
                        <a href="#" className={css["icons"]}><i className='bx bxl-facebook-circle'></i></a>
                        <a href="#" className={css["icons"]}><i className='bx bxl-linkedin-square'></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
