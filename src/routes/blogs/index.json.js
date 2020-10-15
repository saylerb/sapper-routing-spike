import posts from "./_posts.js";

const contents = JSON.stringify(
  posts.map((post) => {
    return {
      title: post.title,
      path: post.path,
      blog: post.blog,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
