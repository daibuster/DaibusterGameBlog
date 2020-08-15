module.exports = {
  siteMetadata: {
    title: "Daibuster Gaming Blog",
    description: "フォートナイト上手くなりたいDaibusterが、上達の様子を綴るブログ。GatsbyJS + MDX らしい。",
    url: "https://daibuster.com",
    image: "/gaming.jpg",
    twitterUsername: "@Dai_buster",
    author: "DaibusterGames",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
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
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`,`.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono`,
          `muli\:400,400i,700,700i`,
        ],
        display: 'swap',
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
                