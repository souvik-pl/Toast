import { EventDetail, ToastType } from "../common/common.type";
import { v4 as uuidv4 } from "uuid";

function useToast() {
  function showToast(toastType: ToastType, message: string) {
    const event = new CustomEvent("add-toast", {
      detail: { id: uuidv4(), message, toastType } as EventDetail,
    });
    window.dispatchEvent(event);
  }

  const toast = {
    success: (message: string) => showToast("success", message),
    error: (message: string) => showToast("error", message),
    info: (message: string) => showToast("info", message),
    warning: (message: string) => showToast("warning", message),
  };

  return { toast };
}

export default useToast;
