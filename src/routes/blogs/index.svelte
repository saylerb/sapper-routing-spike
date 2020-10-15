<script context="module">
  export function preload() {
    return this.fetch(`blogs.json`)
      .then((r) => r.json())
      .then((posts) => {
        const blogOnePosts = posts.filter((post) => post.blog === "one");
        const blogTwoPosts = posts.filter((post) => post.blog === "two");

        return {
          blogOnePosts,
          blogTwoPosts,
        };
      });
  }
</script>

<script>
  export let blogOnePosts;
  export let blogTwoPosts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }

  pre {
    display: inline;
    background-color: palegoldenrod;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h4>
  Routing pattern:
  <pre>/blogs/:blog/articles/:path</pre>
</h4>

<h1>Recent Blog one posts</h1>
<h4>
  These are listed under
  <pre>/blogs/one/articles/:path</pre>
</h4>

<ul>
  {#each blogOnePosts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a
        rel="prefetch"
        href="blogs/{post.blog}/articles/{post.path}">{post.title}</a>
    </li>
  {/each}
</ul>

<h1>Recent Blog two posts</h1>
<h4>
  These are listed under
  <pre>/blogs/two/articles/:path</pre>
</h4>

<ul>
  {#each blogTwoPosts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a
        rel="prefetch"
        href="blogs/{post.blog}/articles/{post.path}">{post.title}</a>
    </li>
  {/each}
</ul>
