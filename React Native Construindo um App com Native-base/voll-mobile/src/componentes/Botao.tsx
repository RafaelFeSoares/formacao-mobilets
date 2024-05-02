import { Button, ITextProps } from "native-base";
import { ReactNode } from "react";

interface BotaoProps extends ITextProps {
  children: ReactNode;
}

export function Botao({ children, ...rest  }: BotaoProps) {
  return (
    <Button width="100%" bgColor="blue.800" mt={10} borderRadius="lg" {...rest} >
      {children}
    </Button>
  );
}
