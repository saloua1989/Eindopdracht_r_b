import { Flex, Tag } from '@chakra-ui/react';

export const Tags = ({ labels, colorScheme, ...props }) => (
  <Flex gap={2} wrap='wrap' {...props}>
    {labels
      .map(label => label.toUpperCase())
      .map(label => (
        <Tag
          key={label}
          size={{ base: 'sm', md: 'md', lg: 'md', xl: 'md' }}
          p='1'
          borderRadius='sm'
          colorScheme={colorScheme}
          fontWeight='bold'
        >
          {label}
        </Tag>
      ))}
  </Flex>
);