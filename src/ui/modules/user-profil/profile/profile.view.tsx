import { FormsType } from "@/types/forms";
import { Typography } from "@/ui/design-systeme/typography/typography";
import { ProfileForm } from "./profile.form";

interface Props {
  form: FormsType;
}

export const ProfileView = ({ form }: Props) => {
  return (
    <div className="space-y-5">
      <Typography variant="h1" component="h1">
        Mon compte
      </Typography>
      <ProfileForm form={form} />
    </div>
  );
};
