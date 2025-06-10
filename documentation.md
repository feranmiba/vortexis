## 🛠️ Update Summary

### 📌 Changes Implemented

1. **Added Cursor Pointer to Buttons**

   - Applied `cursor-pointer` class to all navigation and form control buttons for improved user interaction feedback.

2. **Introduced `navigationProps.ts` Interface**

   - Created a new TypeScript interface file to define standardized navigation props.
   - Interface includes:
     ```ts
     interface NavigationProps {
       onNext?: () => void;
       onPrev?: () => void;
     }
     ```
   - These props were integrated into each form component to handle step-based navigation (Next/Previous).

3. **Form Step Navigation Handling**

   - Updated form components (`Details`, `Submission`, etc.) to support controlled navigation using the `onNext` and `onPrev` functions.
   - Ensured smooth transition between steps with consistent state management.

4. **Styling Improvements**

   - Refined the dashboard layout and UI styling for a more polished and responsive design.
   - Improved spacing, button consistency, and overall visual hierarchy.

5. **Sidebar updated**
   - updated the sidebar

---

### ✅ Outcome

- Navigation across multi-step form is now modular and reusable.
- Codebase is more maintainable with clear type definitions.
- UX is more intuitive with better visual and interactive feedback.
- Sidebar updated
- Ui bugs fixed
