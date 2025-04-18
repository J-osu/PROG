export interface ContactFormData {
    nombre: string;
    correo: string;
    mensaje: string;
  }
  
  export interface ContactFormProps {
    onSubmit?: (data: ContactFormData) => void;
  }