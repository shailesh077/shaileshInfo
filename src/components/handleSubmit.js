// Install: npm install @emailjs/browser

import emailjs from '@emailjs/browser';

const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        await emailjs.send(
            'your_service_id',
            'your_template_id', {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'shaileshvishwakarma2000@gmail.com'
            },
            'your_public_key'
        );

        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    } catch (error) {
        setError('Failed to send message');
    } finally {
        setIsSubmitting(false);
    }
};