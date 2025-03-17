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
            content: "Browser <-> Web Server <-> Application Server -> process Scheduler services -> RDBMS"
        },
        {
            title: "PS Query",
            content: '<a href="PSQUERY.html">Read more</a>',
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
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });
});
