import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import '../css/contactos.css';
import '../css/buttons.css';

interface FormData {
  nombre: string;
  correo: string;
  mensaje: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user types
    if (errors[id as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [id]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'Correo electrónico no válido';
    }
    
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Aquí iría la llamada a tu API de Spring Boot
      // await axios.post('http://localhost:8080/api/contacto', formData);
      
      // Simulamos un envío exitoso
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: '¡Mensaje enviado con éxito!'
      });
      
      // Reset form
      setFormData({
        nombre: '',
        correo: '',
        mensaje: ''
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Error al enviar el mensaje. Por favor intenta nuevamente.'
      });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Contáctame</h2>
      
      <div className="contenedor">
        <div className="form-content">
          <h1 id="title">Formulario de Contacto</h1>
          
          <form id="contactForm" onSubmit={handleSubmit} noValidate>
            {/* Campo Nombre */}
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <label htmlFor="nombre" className="input-label">Nombre:</label>
              <input
                type="text"
                id="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                className={errors.nombre ? 'error' : ''}
              />
              {errors.nombre && <span className="error-message">{errors.nombre}</span>}
            </div>
            
            {/* Campo Email */}
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <label htmlFor="correo" className="input-label">Email:</label>
              <input
                type="email"
                id="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
                className={errors.correo ? 'error' : ''}
              />
              {errors.correo && <span className="error-message">{errors.correo}</span>}
            </div>
            
            {/* Campo Mensaje */}
            <div className="input-field">
              <FontAwesomeIcon icon={faCommentAlt} className="input-icon" />
              <label htmlFor="mensaje" className="input-label">Comenta:</label>
              <input
                type="text"
                id="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu comentario"
                className={errors.mensaje ? 'error' : ''}
              />
              {errors.mensaje && <span className="error-message">{errors.mensaje}</span>}
            </div>
            
            {/* Botón de envío */}
            <div className="btn-field">
              <button 
                className="submitBtn" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
            
            {/* Mensaje de estado */}
            {submitStatus && (
              <div className={`submit-message ${submitStatus.success ? 'success' : 'error'}`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;