module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
  ],
}


// echo "# DaibusterGameBlog" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git remote add origin https://github.com/daibuster/DaibusterGameBlog.git
// git push -u origin master
                