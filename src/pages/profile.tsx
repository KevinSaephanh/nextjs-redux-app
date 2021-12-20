import { GetStaticPropsResult } from "next";
import { FC } from "react";

interface ProfileProps {
  data: any;
}

const Profile: FC<ProfileProps> = ({ data }) => {
  return (
    <>
      <ul>
        {data.map((post: any) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async (): Promise<GetStaticPropsResult<ProfileProps>> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data: any = await res.json();

  return {
    props: { data },
  };
};

export default Profile;
