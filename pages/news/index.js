import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">Next Js is awesome framework</Link>
        </li>
        <li>Something else</li>
      </ul>
    </>
  );
};

export default NewsPage;
