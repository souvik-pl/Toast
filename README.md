# React Toast Component

The `Toast` component is a customizable notification system for React applications, allowing you to display temporary messages to users with different levels of importance like success, error, info, and warning.

# Usage

The `Toast` component and the `useToast` hook are used together to display toast notifications in your application.

```typescript
import React from 'react';
import { Toast, useToast } from './Toast';

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
```

### `useToast` Hook

The `useToast` hook provides the toast function, which can be used to trigger different types of toast notifications:

- `toast.success(message: string)`: Displays a success toast.
- `toast.error(message: string)`: Displays an error toast.
- `toast.info(message: string)`: Displays an informational toast.
- `toast.warning(message: string)`: Displays a warning toast.

### `Toast` Component

The `Toast` component is used to render the toast notifications on the screen. It should be included in your component tree, typically at the root level.

**Props**

`position: ToastPosition`:

- **Type:** "top-left" | "top-right" | "bottom-left" | "bottom-right"
- **Description:** Specifies the position of the toast notifications on the screen.
- **Required:** true
- **Example:**
  ```jsx
  <Toast position="bottom-right" />
  ```
