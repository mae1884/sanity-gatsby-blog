export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6074e09211e5b600a3d2c5da",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-pidazehk",
                  apiId: "6a044c06-188e-44a2-a49a-63474afca3c7",
                },
                {
                  buildHookId: "6074e092de1c310090dbe7ee",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-udyknd6i",
                  apiId: "c8607885-58de-46c2-af4f-c872e987085b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mae1884/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-udyknd6i.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
