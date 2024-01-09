import Toast from "react-native-root-toast";


export function ToastMessage({ message }) {
  return Toast.show(`${message}`, {
    duration: 3000,
    position: Toast.positions.TOP,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
}
export default ToastMessage;
