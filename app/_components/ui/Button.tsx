export default function Button({ children, type = "primary" }: any) {
  return (
    <button
      className={`${
        type === "primary" ? "bg-primary-50" : "bg-transparent"
      } text-white font-bold py-2 px-4 rounded-2xl`}
    >
      {children}
    </button>
  );
}
