import { useEffect } from "react";
import { AlertCircle, CheckCircle } from "lucide-react";
import { Container, IconWrapper, Message } from "./Toast.style";

const Toast = ({ message, type = "error", duration, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <Container $type={type}>
      <IconWrapper $type={type}>
        {type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
      </IconWrapper>
      <Message>{message}</Message>
    </Container>
  );
};

export default Toast;