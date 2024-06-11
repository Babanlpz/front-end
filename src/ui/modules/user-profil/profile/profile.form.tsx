import { FormsType } from "@/types/forms";
import { UploadAvatar } from "@/ui/components/upload-avatar/upload-avatar";
import { Button } from "@/ui/design-systeme/button/button";
import { Input } from "@/ui/design-systeme/forms/input";
import { Textarea } from "@/ui/design-systeme/forms/textarea";
import { Typography } from "@/ui/design-systeme/typography/typography";

interface Props {
  form: FormsType;
  imagePreview: string | ArrayBuffer | null;
  uploadProgress: number;
  handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileForm = ({
  form,
  imagePreview,
  uploadProgress,
  handleImageSelect,
}: Props) => {
  const { handleSubmit, register, onSubmit, errors, isLoading } = form;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
        <div className="flex items-center justify-between py-5">
          <div>
            <UploadAvatar
              handleImageSelect={handleImageSelect}
              imagePreview={imagePreview}
              uploadProgress={uploadProgress}
              isLoading={isLoading}
              variant="outline"
            />
          </div>
          <div className="flex items-end gap-1">
            <Typography variant="h1" component="div">
              345
            </Typography>
            <Typography
              variant="caption4"
              component="div"
              theme="gray-600"
              className="mb-4"
            >
              Abonnés
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6 space-y-4">
            <Input
              label="Nom d'utilisateur"
              isLoading={isLoading}
              placeholder="John Doe"
              type="text"
              register={register}
              errors={errors}
              errorMessage="Nom d'utilisateur requis"
              id="displayName"
            />
            <Input
              label="Expertise"
              isLoading={isLoading}
              placeholder="Développeur Frontend"
              type="text"
              register={register}
              errors={errors}
              errorMessage="Tu dois renseigner ton expertise"
              id="expertise"
            />
          </div>
          <div className="col-span-6 space-y-4">
            <Input
              label="Linkedin"
              isLoading={isLoading}
              placeholder="linkedin.com/esteban-lopez"
              type="url"
              register={register}
              errors={errors}
              errorMessage="Tu dois renseigner ton profil linkedin"
              id="linkedin"
              required={false}
            />
            <Input
              label="Github"
              isLoading={isLoading}
              placeholder="github.com/estebanLopez"
              type="url"
              register={register}
              errors={errors}
              errorMessage="Tu dois renseigner ton profil github"
              id="github"
              required={false}
            />
          </div>
        </div>

        <Textarea
          label="Biographie"
          rows={9}
          isLoading={isLoading}
          placeholder="Indiquez votre biographie ici..."
          register={register}
          errors={errors}
          errorMessage="Tu dois renseigner ta biographie"
          id="biography"
          required={false}
        />

        <div className="flex justify-end">
          <Button isLoading={isLoading} type="submit">
            Enregistrer
          </Button>
        </div>
      </form>
    </>
  );
};
