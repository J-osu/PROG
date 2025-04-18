import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import './contactForm.css';
import { ContactFormData } from './types';


const ContactForm: React.FC = () => {
  const { formData, handleChange, handleSubmit } = useContactForm(); // O implementa la lógica directamente aquí

  return (
    <section>
      <h2 className="section-title">Título del Formulario</h2>
      <div className="contenedor">
        <div className="form-content">
          <h1 id="title">Formulario</h1>
          <form id="contactForm" onSubmit={handleSubmit}>
            {/* Campos del formulario */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;