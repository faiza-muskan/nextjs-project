import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <h1>detail Page</h1>;
};

export default Detail;
