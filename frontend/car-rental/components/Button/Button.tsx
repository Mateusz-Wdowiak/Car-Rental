import { ButtonProps } from '@/components/Button/button.interface';

const Button: React.FC<ButtonProps> = ({ children, className = '', type = 'button', params }) => {
  return (
    <button type={type} className={className}>{children}</button>
  );
};

export default Button;