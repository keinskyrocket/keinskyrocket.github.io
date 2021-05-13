// Filter

const myData = [
  {
    id: 1,
    title: "Can't clone a repo from GitHub",
    tag1: "Sprint 1",
    tag2: "Tech",
    desc: `I've encountered an issue with not being able to clone a repository from GitHub by using Terminal. This post shows how I troubleshooted this issue briefly.`,
    url: "blog/2021-04-13_I-cant-clone-a-repo-from-GitHub.html",
  },
  {
    id: 2,
    title: "Identity, Values and Strengths",
    tag1: "Sprint 1",
    tag2: "Core",
    desc: `This exploration allowed me to articulate my values and ethics while I reached out my friends and interviewed their perception of my personality, strengths and limitations.`,
    url: "blog/2021-04-14_identity-values-and-strength.html",
  },
  {
    id: 3,
    title: "What are the differences between relative, absolute, and fixed positioning?",
    tag1: "Sprint 2",
    tag2: "Tech",
    desc: `Position is one of the confusing CSS properties for me. I experimented an easy comparison among relative, absolute and fixed to solidify my understanding on them.`,
    url: "blog/2021-04-16_what-are-the-differences-between-relative-absolute-and-fixed-positioning.html",
  },
  {
    id: 4,
    title: "My learning plan",
    tag1: "Sprint 2",
    tag2: "Core",
    desc: `Knowing how I operate myself during my learning journey helps me track my footprint. This will provide insights to determine the next step.`,
    url: "blog/2021-04-19_my-learning-plan.html",
  },
  {
    id: 5,
    title: "Emotional intelligence exploration",
    tag1: "Sprint 3",
    tag2: "Core",
    desc: `Developing my emotional intelligence skills brings the benefit of both my learning journey and my employability.`,
    url: "blog/2021-04-20_emotional-intelligence-exploration.html",
  },
  {
    id: 6,
    title: "Technical Blog - JS Fundamentals",
    tag1: "Sprint 3",
    tag2: "Tech",
    desc: `Not much difference between learning a new human language and a new programme language. Here is things I've learned in Sprint 3. What I believe in is Practice makes perfect!`,
    url: "blog/2021-04-26_technical-blog-js-fundamentals.html",
  },
  {
    id: 7,
    title: "Neuroplasticity and Growth Mindset",
    tag1: "Sprint 4",
    tag2: "Core",
    desc: `I've never thought how much knowing how brain functions in learning would affect my study. With the power of growth mindset, I have less ambiguity around why I sometime learn more or less.`,
    url: "blog/2021-04-28_neuroplasticity-and-growth-mindset.html",
  },
  {
    id: 8,
    title: "Problem solving",
    tag1: "Sprint 4",
    tag2: "Tech",
    desc: `I looked back how I dealt with technical problems throughout challenges in Sprint 4, which showed me opportunities to improve my learning process.`,
    url: "blog/2021-04-30_problem-solving.html",
  },
  {
    id: 9,
    title: "Foundations reflection",
    tag1: "Sprint 5",
    tag2: "Core",
    desc: `How has the core learning treating me so far? How will it affect to my career and my life? It's very interesting to see my own transformation within a short period of time.`,
    url: "blog/2021-05-07_foundations-reflection.html",
  },
];

const cards = document.querySelector(".cards");
const filterBtns = document.querySelectorAll(".btn-filter");

// Load items
window.addEventListener("DOMContentLoaded", function() {
  displayContents(myData);
});

// Filter contents
filterBtns.forEach(function(myBtn) {
  myBtn.addEventListener("click", function(myEvtFilter) {
    const categoryName = myEvtFilter.currentTarget.dataset.tagname;
    const findMyCategory = myData.filter(function(targetCategory) {
      if (targetCategory.tag2 === categoryName) {
        return targetCategory;
      }
    });
    if (categoryName === "All") {
      displayContents(myData);
    } else {
      displayContents(findMyCategory);
    }

    // const filterActive = myEvtFilter.currentTarget.classList
    // if (filterActive !== "active") {
    //   filterActive.add("active");
    // } else {
    //   filterActive.remove("active");
    // }
    
  });
});

// Filter butons
document.getElementsByClassName("btn-filter")[0].classList.add = " active";
function myFilter(event) {
  const filterLinks = document.getElementsByClassName("btn-filter");
  for (let i = 0; i < filterLinks.length; i++) {
    filterLinks[i].className = filterLinks[i].className.replace(" active", "");
  }
  event.currentTarget.className += " active";
}

// Display contents
function displayContents(cardContents) {
  let displayContents = cardContents.slice(0).reverse().map(function(item) { // Scan data backwards
    return `<article class="card col-3-dt col-2-tb">
    <div>
      <h2><a class="title-link" href="${item.url}">${item.title}</a></h2>
      <div class="icon tags fa-xs"><span class="tag-post">${item.tag1}</span><span class="tag-post">${item.tag2}</span></div>
      <p>${item.desc}</p>
      <a class="btn btn-outline" href="${item.url}">Read this blog</a>
    </div>
  </article>`;
  }).join("");
  
  cards.innerHTML = displayContents;
}