import { firebaseLogoutUser } from "@/api/authentication";
import { Button } from "@/ui/design-systeme/button/button";
import { toast } from "react-toastify";

export const UserAccountContainer = () => {
  const handleLogoutUser = async () => {
    const { error } = await firebaseLogoutUser();
    if (error) {
      toast.error(error.message);
      return;
    } else {
      toast.success("A bientot sur Coders Baban");
    }
  };

  return (
    <>
      <div className="flex justify-center pt-20 pb-40">
        <Button action={handleLogoutUser} variant="danger">
          Déconnexion
        </Button>
      </div>
    </>
  );
};
