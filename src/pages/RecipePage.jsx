import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Tags } from "../components/Tags";
import { useEffect } from "react";

export const RecipePage = ({ recipe, clickFn }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex justify="center">
      <Box bg="#F1EFEE" w="15%"></Box>
      <Box w="70%">
        <Box h="10vh">
          <Button
            h="100%"
            bg="transparent"
            fontSize="4xl"
            onClick={() => clickFn()}
          >
            &lt;
          </Button>
        </Box>
        <Image src={recipe.image} w="100%" h="20vh" fit="cover" />
        <Flex minH="70vh" p={5}>
          <SimpleGrid
            columns={{ base: "1", md: "2" }}
            spacing={{ base: "8", md: "16" }}
          >
            <Flex direction="column" gap={3}>
              <Box>
                <Text
                  casing="uppercase"
                  color="gray.500"
                  fontWeight="600"
                  fontSize="calc(8px + 0.390625vw)"
                >
                  {recipe.mealType}: {recipe.dishType}
                </Text>
                <Text
                  as="b"
                  fontSize="calc(14px + 0.390625vw)"
                  color="gray.700"
                >
                  {recipe.label}
                </Text>
              </Box>
              <SimpleGrid columns="2">
                <Text>Total cooking time:</Text>
                <Text>{recipe.totalTime} minutes</Text>
                <Text>Servings:</Text>
                <Text>{recipe.yield}</Text>
              </SimpleGrid>
              <Flex direction="column" gap="2">
                <Text as="b">Ingredients:</Text>
                <Flex direction="column" gap={2}>
                  {recipe.ingredientLines.map((item) => (
                    <Text key={item}>{item}</Text>
                  ))}
                </Flex>
              </Flex>
            </Flex>
            <Flex direction="column" gap={3}>
              <Box>
                <Text>Health labels:</Text>
                <Tags labels={recipe.healthLabels} colorScheme="blue" />
              </Box>
              {recipe.dietLabels != "" && (
                <Box>
                  <Text>Diet:</Text>
                  <Tags labels={recipe.dietLabels} colorScheme="green" />
                </Box>
              )}
              {recipe.cautions != "" && (
                <Box>
                  <Text>Cautions:</Text>
                  <Tags labels={recipe.cautions} colorScheme="red" />
                </Box>
              )}
              <Box>
                <Heading size="md">Total nutrients:</Heading>
                <Flex rowGap={4} columnGap={6} wrap="wrap">
                  <Box>
                    <Text>{Math.round(recipe.calories)}</Text>
                    <Text fontWeight="500">CALORIES</Text>
                  </Box>
                  <Box>
                    <Text>
                      {Math.round(recipe.totalNutrients.CHOCDF.quantity)}{" "}
                      {recipe.totalNutrients.CHOCDF.unit}
                    </Text>
                    <Text fontWeight="500">
                      {recipe.totalNutrients.CHOCDF.label.toUpperCase()}
                    </Text>
                  </Box>
                  <Box>
                    <Text>
                      {Math.round(recipe.totalNutrients.PROCNT.quantity)}{" "}
                      {recipe.totalNutrients.PROCNT.unit}
                    </Text>
                    <Text fontWeight="500">
                      {recipe.totalNutrients.PROCNT.label.toUpperCase()}
                    </Text>
                  </Box>
                  <Box>
                    <Text>
                      {Math.round(recipe.totalNutrients.FAT.quantity)}{" "}
                      {recipe.totalNutrients.FAT.unit}
                    </Text>
                    <Text fontWeight="500">
                      {recipe.totalNutrients.FAT.label.toUpperCase()}
                    </Text>
                  </Box>{" "}
                  <Box>
                    <Text>
                      {Math.round(recipe.totalNutrients.CHOLE.quantity)}{" "}
                      {recipe.totalNutrients.CHOLE.unit}
                    </Text>
                    <Text fontWeight="500">
                      {recipe.totalNutrients.CHOLE.label.toUpperCase()}
                    </Text>
                  </Box>
                  <Box>
                    <Text>
                      {Math.round(recipe.totalNutrients.NA.quantity)}{" "}
                      {recipe.totalNutrients.NA.unit}
                    </Text>
                    <Text fontWeight="500">
                      {recipe.totalNutrients.NA.label.toUpperCase()}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </SimpleGrid>
        </Flex>
      </Box>
      <Box bg="#F1EFEE" w="15%"></Box>
    </Flex>
  );
};
