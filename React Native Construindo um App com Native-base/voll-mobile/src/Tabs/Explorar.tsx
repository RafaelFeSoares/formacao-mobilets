import { ScrollView, Text, VStack } from "native-base";
import { Buscar } from "../componentes/Buscar";
import { Titulo } from "../componentes/Titulo";
import { CardConsulta } from "../componentes/CardConsulta";

export default function Explorar({navigation}) {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} padding={5}>
        <Buscar navTo={'Consultas'} navigation={navigation} />

        <Titulo mb={5} color='blue.500'>Resultado da busca</Titulo>

        <CardConsulta nome="Dr. Rafael Felipe" especialidade="Cardiologista" foto="https://github.com/Kincron.png" data="20/01/2024" />
        <CardConsulta nome="Dr. Rafael Felipe" especialidade="Cardiologista" foto="https://github.com/Kincron.png" data="20/01/2024" />
        <CardConsulta nome="Dr. Rafael Felipe" especialidade="Cardiologista" foto="https://github.com/Kincron.png" data="20/01/2024" />
        <CardConsulta nome="Dr. Rafael Felipe" especialidade="Cardiologista" foto="https://github.com/Kincron.png" data="20/01/2024" />


      </VStack>
    </ScrollView>
  );
}
