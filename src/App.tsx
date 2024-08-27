import { Toast, useToast } from "./Toast";

function App() {
  const { toast } = useToast();
  return (
    <div>
      <button onClick={() => toast.success("Success")}>Success</button>
      <button onClick={() => toast.error("Error")}>Error</button>
      <button onClick={() => toast.info("Info")}>Info</button>
      <button onClick={() => toast.warning("Warning")}>Warning</button>
      <Toast position="bottom-right" />
    </div>
  );
}

export default App;
