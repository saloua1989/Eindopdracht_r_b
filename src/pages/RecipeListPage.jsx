import {
  AspectRatio,
  Flex,
  Heading,
  Input,
  Radio,
  RadioGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setsearchField] = useState("");
  const [searchFilter, setsearchFilter] = useState("");

  const handleChange = (event) => {
    setsearchField(event.target.value);
  };

  const availableRecipes = data.hits.map((recipeItem) => recipeItem.recipe);

  const matchedRecipes = availableRecipes
    .filter((recipe) => {
      return (
        recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
        recipe.healthLabels.some((element) =>
          element.toLowerCase().includes(searchField.toLowerCase())
        ) ||
        recipe.dietLabels.some((element) =>
          element.toLowerCase().includes(searchField.toLowerCase())
        )
      );
    })
    .filter((recipe) => {
      return recipe.healthLabels.some((element) =>
        element.includes(searchFilter)
      );
    });

  return (
    <Flex direction="column" align="center" gap={3} bg="#F1EFEE">
      <Heading mt={3} size="lg" color="#14425D">
        My Recipe Checker
      </Heading>
      <Input
        w={{ base: "50", sm: "80" }}
        size="md"
        bg="white"
        borderRadius="lg"
        placeholder="Search recipes"
        _placeholder={{ color: "gray.400" }}
        onChange={handleChange}
      />
      <RadioGroup
        colorScheme="gray"
        onChange={setsearchFilter}
        value={searchFilter}
      >
        <SimpleGrid columns={{ base: "2", sm: "4" }} columnGap="3">
          <Radio value="">All recipes</Radio>
          <Radio value="Vegan">Vegan</Radio>
          <Radio value="Vegetarian">Vegetarian</Radio>
          <Radio value="Pescatarian">Pescatarian</Radio>
        </SimpleGrid>
      </RadioGroup>
      <Flex justify="center" wrap="wrap" gap={8}>
        {matchedRecipes.map((recipe) => (
          // Maybe put <AspectRatio> inside <RecipeCard> and pass the breakpoints and ratio, to speed up image loading
          <AspectRatio
            key={recipe.label}
            w={{ base: "90vw", md: "40vw", lg: "30vw", xl: "22vw" }}
            ratio={2 / 3}
          >
            <RecipeCard recipe={recipe} clickFn={clickFn} />
          </AspectRatio>
        ))}
      </Flex>
    </Flex>
  );
};
