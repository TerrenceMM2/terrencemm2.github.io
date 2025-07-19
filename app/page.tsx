import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Terrence Mahnken
      </h1>
      <p className="mb-4">
        {`My mission: Helping people and solving problems`}
      </p>
      <p className="mb-4">{`My values: Empathy, excellence, and education`}</p>
      <p className="mb-4">{`I'm a seasoned software engineer with over a decade of experience delivering thoughtful, scalable solutions across the front end, back end, and cloud. While my foundation is in front-end engineering, I've built and maintained full-stack applications and architected services in both AWS and Azure environments.`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
