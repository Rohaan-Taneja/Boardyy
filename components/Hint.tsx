import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface tooltipProps {
  label: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: 'start' | "center" | "end";
  sideOffset?: number;
  alignOffset?: number;
}

const Hint = ({
  label,
  children,
  side,
  sideOffset,
  align,
  alignOffset,
}: tooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className="bg-black text-white" 
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Hint;
