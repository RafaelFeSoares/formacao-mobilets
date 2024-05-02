import { Box } from "native-base";
import { EntradaTexto } from "./EntradaTexto";
import { Botao } from "./Botao";
import { ReactNode } from "react";

interface Buscar {
  navigation: ReactNode;
  navTo?: string;
}

export function Buscar({ navigation, navTo='Explorar' }) {
  return (
    <Box w="100%" borderRadius="lg" p={3} shadow={2} borderRightRadius="md" bgColor="white">
      <EntradaTexto label="" placeholder="Digite a especialidade" />
      <EntradaTexto label="" placeholder="Digite sua localização" />

      <Botao onPress={() => navigation.navigate(navTo)}>Buscar</Botao>
    </Box>
  );
}
