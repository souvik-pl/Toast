export type ToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export type ToastProps = {
  position: ToastPosition;
};

export type ToastType = "success" | "warning" | "error" | "info";

export type EventDetail = {
  id: string;
  message: string;
  toastType: ToastType;
};
