import { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';
import { Box } from '@chakra-ui/react';

export const App = () => {
  const [selectedRecipeItem, setselectedRecipeItem] = useState();

  return (
    <Box>
      {selectedRecipeItem ? (
        <RecipePage
          recipe={selectedRecipeItem}
          clickFn={setselectedRecipeItem}
        />
      ) : (
        <RecipeListPage clickFn={setselectedRecipeItem} />
      )}
    </Box>
  );
};