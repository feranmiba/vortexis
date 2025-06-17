
import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

interface QuickActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

export function QuickActionButton({ icon: Icon, label, onClick }: QuickActionButtonProps) {
  return (
    <Button
      variant="outline"
      className="w-full justify-start gap-3 h-auto py-3 px-4 text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </Button>
  );
}