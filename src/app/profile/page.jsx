"use client";
import { UpdateProfileModal } from "@/components/UpdateProfileModal";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const ProfilePage = () => {
  const session = authClient.useSession();
  const user = session.data?.user;

  return (
    <div className="w-2xl mx-auto border shadow my-10 py-8 px-6 space-y-4">
      <div className="flex justify-between items-center">
        <Avatar className="w-20 h-20">
          <Avatar.Image alt={user?.name} src={user?.image} />
          <Avatar.Fallback>{user?.name[0]} </Avatar.Fallback>
        </Avatar>
        <UpdateProfileModal />
      </div>
      <div>
        <p className="text-gray-500 text-xl">Name:</p>
        <h2 className="text-xl font-semibold">{user?.name} </h2>
      </div>
      <div>
        <p className="text-gray-500 text-xl">Id:</p>
        <h2 className="text-xl font-semibold">{user?.id} </h2>
      </div>
      <div>
        <p className="text-gray-500 text-xl">Email:</p>
        <h2 className="text-xl font-semibold">{user?.email} </h2>
      </div>
    </div>
  );
};

export default ProfilePage;
