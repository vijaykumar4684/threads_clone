import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function UserAvatar({
  name,
  image,
}) {
  return (
    <Avatar className="">
      <AvatarImage src={image} className="object-cover" />
      <AvatarFallback>{name[0].toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}
