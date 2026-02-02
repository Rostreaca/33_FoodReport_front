import { createContext, useEffect, useState } from "react";
import { AlertCircle, CheckCircle } from "lucide-react";
import { Container, IconWrapper, Message } from "../common/Toast/Toast.style";

// export const ToastContext = createContext();

// export const ToastProvider = ({ children }) => {

// const [toastConfig, setToastConfig] = useState(null);

// const showToast = ({ message, type = "error", duration = 3000 }) => {
//     setToastConfig({ message, type });
//     setTimeout(() => setToastConfig(null), duration);
//   };

//     return (
//         <ToastContext.Provider value={showToast}>
//             {children}            
//             <Container $type={type}>
//                 <IconWrapper $type={type}>
//                     {type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
//                 </IconWrapper>
//                 <Message>{message}</Message>
//             </Container>
//         </ToastContext.Provider>
//     )

// }