import Hint from "@/components/Hint";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
}

const User_Avatar = ({ src, name, fallback, borderColor }: UserAvatarProps) => {
  return (
    <Hint label={name || "Teamamate"} side="bottom" sideOffset={18}>
        
      <Avatar className="h-8 w-8 border-2" style={{ borderColor }}>
        <AvatarImage src={src} />
        <AvatarFallback> {fallback}</AvatarFallback>
      </Avatar>
    </Hint>
  );
};

export default User_Avatar;
