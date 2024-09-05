import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

import Image from "next/image"

const SignInDialog = () => {
  const handleLoginWithGoogleClick = async () => {
    await signIn("google")
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-white">Faça login</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do Google e faça suas compras.
        </DialogDescription>
      </DialogHeader>

      <Button
        variant="outline"
        className="gap-2 bg-red-500 font-bold text-white"
        onClick={handleLoginWithGoogleClick}
      >
        <Image
          src="/google.svg"
          alt="Login com google"
          width={18}
          height={18}
        />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
