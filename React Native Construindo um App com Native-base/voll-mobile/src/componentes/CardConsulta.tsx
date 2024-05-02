import { Text, Avatar, VStack } from "native-base";
import { Botao } from "./Botao";

interface CardProps {
  nome: string;
  foto: string;
  especialidade: string;
  data?: string;
  foiAtendido?: boolean;
  foiAgendado?: boolean;
}

export function CardConsulta({
  nome,
  foto,
  data,
  especialidade,
  foiAgendado,
  foiAtendido,
}: CardProps) {
  return (
    <VStack mb={5} w="100%" bgColor={foiAtendido ? 'blue.100' : 'white'} p={5} borderRadius="lg" shadow={2}>
      <VStack flexDir="row">
        <Avatar source={{ uri: foto }} mt={1} size="lg" />

        <VStack pl={4}>
          <Text fontSize="md" bold color="">
            {nome}
          </Text>
          <Text>{especialidade}</Text>
          <Text>{data}</Text>
        </VStack>
      </VStack>

      <Botao mt={4}>{foiAgendado ? 'Cancelar' : 'Agendar consulta'}</Botao>
    </VStack>
  );
}
