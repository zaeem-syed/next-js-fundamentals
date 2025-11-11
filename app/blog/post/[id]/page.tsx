import {posts} from "@/app/lib/placeholder-data";

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);
  console.log(post);

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


