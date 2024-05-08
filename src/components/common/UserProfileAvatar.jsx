import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function UserProfileAvatar({
  name,
  image,
}) {
  return (
    <Avatar className="h-20 w-20">
      <AvatarImage src={image} className="object-cover" />
      <AvatarFallback className="text-2xl font-bold">
        {name[0].toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
