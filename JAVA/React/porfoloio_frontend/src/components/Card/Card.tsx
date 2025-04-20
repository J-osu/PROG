// components/Card.tsx
import React from 'react';

interface CardProps {
  icon?: string;
  title: string;
  subtitle?: string;
  content: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ icon, title, subtitle, content, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-body">
        {icon && (
          <div className="card-icon mb-3">
            <i className={icon}></i>
          </div>
        )}
        <h5 className="card-title">{title}</h5>
        {subtitle && <p className="card-subtitle mb-2 text-muted">{subtitle}</p>}
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default Card;