import { GetStaticPropsResult } from "next";
import { FC } from "react";
import { Post } from "../../store/posts/types";

interface ProfileProps {
  data: Post[];
}

const Profile: FC<ProfileProps> = ({ data }) => {
  return (
    <>
      <ul>
        {data.map((post: Post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async (): Promise<GetStaticPropsResult<ProfileProps>> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data: Post[] = await res.json();

  return {
    props: { data },
  };
};

export default Profile;
