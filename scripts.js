document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = [
        {
            title: "App Designer Overview",
            content: '<a href="AppDesignerOverview.html">Read more</a>',
        },
         {
            title: "Application Engine",
            content: '<a href="ApplicationEngine.html">Read more</a>',
        },
        {
            title: "PeopleCode Event",
            content: '<a href="PeopleCode.html">Read more</a>',
        },
        {
            title: "Integration Broker",
            content: '<a href="IntegrationBroker.html">Read more</a>',
        },
        {
            title: "Component Interface",
            content: '<a href="CI.html">Read more</a>',
        },
        {
            title: "PeopleSoft Modules",
            content: '<a href="PSMODULES.html">Read more</a>',
        },
        {
            title: "PeopleSoft Architecture",
            content: '<a href="PSArchitecture.html">Read more</a>',
        },
        {
            title: "PS Query",
            content: '<a href="PSQUERY.html">Read more</a>',
        },
        {
            title: "Reference Links",
            content: '<a href="PSLinks.html">Read more</a>',
        },
         {
            title: "Interview Questions",
            content: '<a href="PSInterviewQuestions.html">Read more</a>',
        },
        
    ];

    const blogPostsContainer = document.getElementById("blog-posts");

    blogPosts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.className = "post";
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });
});
