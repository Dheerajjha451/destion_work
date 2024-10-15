import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";
import { Button } from "@/components/ui/button";

export const UserButton = () => {
  const user = useCurrentUser();

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-4">
        {/* Avatar with user's image or fallback */}
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>

        {user?.name && (
          <span className="font-medium text-lg">{user.name}</span>
        )}
      </div>
      
      <hr className="w-full border-t border-gray-300 " />
      
      {/* Logout Button */}
      <LogoutButton>
        <Button variant="outline" className="flex items-center gap-2">
          <ExitIcon className="h-4 w-4" />
          Logout
        </Button>
      </LogoutButton>
    </div>
  );
};
