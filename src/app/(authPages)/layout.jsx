import "../globals.css";
import CustomProvider from "../providers";

export const metadata= {
  title: "Auth Page",
  description: "The Threads app Auth pages.",
};

export default function LoginLayout({
  children,
}) {
  return <CustomProvider>{children}</CustomProvider>;
}
