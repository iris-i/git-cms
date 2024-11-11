import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface User {
  avatar: string;
  name: string;
  email: string;
}

const UserAvatar = ({ user, variant = "slim" }: { user: User, variant?: 'slim' | 'detailed' }) => {
  return (
    <>
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
      </Avatar>
      {variant === 'detailed' && (<div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">{user.name}</span>
        <span className="truncate text-xs">{user.email}</span>
      </div>)
      }
    </>

  );
}

export default UserAvatar;
