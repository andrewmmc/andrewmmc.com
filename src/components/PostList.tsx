import React from "react";
import { List, ListItem, Text, Stack, Heading } from "@chakra-ui/react";
import Link from "./Link";
import dayjs from "dayjs";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface Post {
  title: string;
  date: string;
  href: string;
}

interface Props {
  title: string;
  posts: Post[];
}

const PostList: React.FC<Props> = ({ title, posts = [], ...props }) => {
  return (
    <Stack spacing={4} {...props}>
      <Heading as="h2" size="sm" color="gray.400" textTransform="uppercase">
        {title}
      </Heading>
      <List spacing={3}>
        {posts.map((item) => {
          const { title, date, href } = item;
          return (
            <ListItem key={href}>
              <Stack color="gray.600" fontSize="sm">
                <Text as="time">
                  {date ? dayjs(date).format("MMMM DD, YYYY") : null}
                </Text>
                <Heading as="h3" size="md">
                  <Link href={href}>
                    {title}
                    <ChevronRightIcon ml="1" />
                  </Link>
                </Heading>
              </Stack>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
};

export default PostList;
