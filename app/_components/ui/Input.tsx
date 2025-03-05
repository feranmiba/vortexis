export default function Input({
  type = "text",
  placeholder = "",
  id,
  icon = "one",
}: any) {
  return (
    <input
      className={`${
        icon !== "one" ? "pr-10" : ""
      } pl-10 min-w-[99%] mt-1 py-0.75 shadow-primary-50 rounded-2xl border-2 border-primary-50 focus:border-primary-50`}
      type={type}
      placeholder={placeholder}
      id={id}
    />
  );
}
