import PostList from "@/components/PostList";
import Header from "../components/Header";
import { Stack } from "@chakra-ui/react";

const mockdata = [
  { title: "123", href: "/1", date: "2022-01-01" },
  { title: "123", href: "/2", date: "2022-01-01" },
  { title: "123", href: "/3", date: "2022-01-01" },
  { title: "123", href: "/4", date: "2022-01-01" },
  { title: "123", href: "/5", date: "2022-01-01" },
];

const Home = () => {
  return (
    <Stack spacing={0}>
      <Header title="Andrew" subtitle="Testing" />
      <PostList title="Posts" posts={mockdata} />
    </Stack>
  );
};

export default Home;
