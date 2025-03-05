export default function Button({ children, type = "primary" }: any) {
  return (
    <button
      className={`${
        type === "primary" ? "bg-primary" : "bg-secondary"
      } rounded-2xl px-4 py-2 font-bold text-white`}
      type="button"
    >
      {children}
    </button>
  );
}
