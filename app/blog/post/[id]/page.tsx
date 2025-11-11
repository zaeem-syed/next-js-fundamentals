import { posts } from "@/app/lib/placeholder-data";

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

// 👇 Key change: do NOT mark component `async` unless you await inside it.
export default function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // New Next 15 convention: params may now be a Promise
  // so we need to unwrap it in a React-compatible way
  // (synchronously using React.use() or async wrapper)
  // but since use() isn't allowed here, we convert safely below:

  // ts-expect-error -- handled by Next at runtime
  const resolvedParams = params as unknown as { id: string };

  const post = posts.find((p) => p.id === resolvedParams.id);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <article className="p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      <p>{post.content}</p>

      <div className="flex items-center justify-between mt-2 mb-4 text-sm text-gray-500">
        <span>By {post.user}</span>
        <span>{new Date(Number(post.date)).toLocaleDateString()}</span>
      </div>
    </article>
  );
}
