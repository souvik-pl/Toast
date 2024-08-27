import { useEffect, useState } from "react";
import { EventDetail, ToastProps } from "../common/common.type";
import styles from "./Toast.module.css";

function Toast(props: ToastProps) {
  const { position } = props;
  const [notificationList, setNotificationList] = useState<EventDetail[]>([]);

  useEffect(() => {
    const eventHandler = (event: any) => {
      const { detail }: { detail: EventDetail } = event;
      setNotificationList([...notificationList, detail]);
      initiateRemoval(detail.id);
    };

    window.addEventListener("add-toast", eventHandler);
    return () => window.removeEventListener("add-toast", eventHandler);
  }, [notificationList]);

  const removeToast = (id: string) => {
    setNotificationList((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const initiateRemoval = (id: string) => {
    setTimeout(() => removeToast(id), 3000);
  };

  return (
    <div className={`${styles[position]} ${styles.container}`}>
      {notificationList.map((notification) => {
        switch (notification.toastType) {
          case "success":
            return <SuccessToast key={notification.id} message={notification.message} />;
          case "error":
            return <ErrorToast key={notification.id} message={notification.message} />;
          case "info":
            return <InfoToast key={notification.id} message={notification.message} />;
          case "warning":
            return <WarningToast key={notification.id} message={notification.message} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

export default Toast;

function ErrorToast({ message }: { message: string }) {
  return <div className={`${styles.toastMessage} ${styles.error}`}>Error: {message}</div>;
}

function SuccessToast({ message }: { message: string }) {
  return <div className={`${styles.toastMessage} ${styles.success}`}>Success: {message}</div>;
}

function InfoToast({ message }: { message: string }) {
  return <div className={`${styles.toastMessage} ${styles.info}`}>Info: {message}</div>;
}

function WarningToast({ message }: { message: string }) {
  return <div className={`${styles.toastMessage} ${styles.warning}`}>Warning: {message}</div>;
}
