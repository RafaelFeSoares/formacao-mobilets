import { Text, VStack, ScrollView, Image, Box, Divider } from "native-base";
import { Titulo } from "../componentes/Titulo";
import Logo from "../assets/Logo.png";
import { Buscar } from "../componentes/Buscar";

export default function Principal({ navigation }) {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} p={5}>
        <Image mt={3} source={Logo} alt="Logo Voll" />

        <Titulo alignSelf='flex-start' color='blue.500' mt={6} mb={6}>Boas-vindas!</Titulo>

        <Buscar navigation={navigation} />

        <Titulo color='blue.800' mb={8}>Depoimentos</Titulo>

        <Box>
          <Text color='gray.500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aspernatur quia alias,
            nihil doloribus perferendis nemo nobis. Tempora nulla non quisquam magni dicta
            voluptatibus eligendi ea nisi cum, molestias modi.
          </Text>

          <Text alignSelf='center' color="gray.600" fontWeight="bold" fontSize="md" mt={2}>
            Júlio, 40 anos, São Paulo/SP
          </Text>
          
        </Box>
        <Divider mt={4} mb={4} />
        <Box>
          <Text color='gray.500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aspernatur quia alias,
            nihil doloribus perferendis nemo nobis. Tempora nulla non quisquam magni dicta
            voluptatibus eligendi ea nisi cum, molestias modi.
          </Text>

          <Text alignSelf='center' color="gray.600" fontWeight="bold" fontSize="md" mt={2} mb={4}>
            Júlio, 40 anos, São Paulo/SP
          </Text>
        </Box>

        <Divider />
      </VStack>
    </ScrollView>
  );
}
