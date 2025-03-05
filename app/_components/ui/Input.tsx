export default function Input({ type = "text", placeholder = "" }: any) {
  return (
    <input
      className="pl-10 min-w-[100%] py-0.75 shadow-primary-50 rounded-2xl border-2 border-primary-50 outline-0 focus:border-primary-50"
      type={type}
      placeholder={placeholder}
    />
  );
}
