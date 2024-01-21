import { Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import { Tags } from "./Tags";

export const RecipeCard = ({ recipe, clickFn }) => {
  return (
    <Card
      borderRadius="xl"
      cursor="pointer"
      _hover={{ transform: "scale(1.01)" }}
      onClick={() => clickFn(recipe)}
    >
      <Image src={recipe.image} w="100%" h="40%" fit="cover" />
      <CardBody mt="-3">
        <Flex direction="column" gap="2">
          <Flex direction="column">
            <Text
              align="center"
              casing="uppercase"
              color="gray.500"
              fontWeight="600"
              fontSize="calc(9px + 0.390625vw)"
            >
              {recipe.mealType}
            </Text>
            <Text
              as="b"
              align="center"
              fontSize="calc(14px + 0.390625vw)"
              color="gray.700"
            >
              {recipe.label}
            </Text>
          </Flex>
          <Flex direction="column" gap="1">
            <Tags
              labels={recipe.healthLabels.filter(
                (label) => label === "Vegan" || label === "Vegetarian"
              )}
              colorScheme="blue"
              justify="center"
            />
            <Tags
              labels={recipe.dietLabels}
              colorScheme="green"
              justify="center"
            />
          </Flex>
          <Flex justify="center" gap={2}>
            <Text>Dish:</Text>
            <Text as="b" textTransform="capitalize">
              {recipe.dishType}
            </Text>
          </Flex>
          {recipe.cautions != "" && (
            <Flex direction="column" align="center">
              <Text>Cautions:</Text>
              <Tags
                labels={recipe.cautions}
                colorScheme="red"
                justify="center"
              />
            </Flex>
          )}
        </Flex>
      </CardBody>
    </Card>
  );
};
