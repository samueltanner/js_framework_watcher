/* global Chart, axios */


let forks = {};
let watchers = {};
let stars = {};
let popularity = {};

let repos = [
  "https://api.github.com/repos/vuejs/vue",
  "https://api.github.com/repos/angular/angular.js",
  "https://api.github.com/repos/emberjs/ember.js",
  "https://api.github.com/repos/sveltejs/svelte",
  "https://api.github.com/repos/facebook/react",
];

document.addEventListener("DOMContentLoaded", function (event) {
  repos.forEach((repo) => {
    axios
      .get(repo)
      .then((response) => {
        let forkCount = response.data.forks;
        let subCount =response.data.subscribers_count;
        let starCount = response.data.stargazers_count;

        forks[response.data.name] = forkCount;
        watchers[response.data.name] = subCount;
        stars[response.data.name] = starCount;
        popularity[response.data.name] = ((forkCount * starCount) / subCount / 100000);

        // console.log(response.data.name);
        // console.log(response.data.forks);
        // console.log(response.data.subscribers_count);
        // console.log(response.data.stargazers_count);
        // console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {});
  });
});

// repos.forEach((repo) => {
//   axios.get(repo).then((response) => {
//     console.log(response.data);
//   });
// });

// axios
//   .get("https://api.github.com/repos/vuejs/vue")
//   .then(function (response) {
//     console.log(response);
//     vueData["forks"] = response.data.forks;
//     vueData["watchers"] = response.data.subscribers_count;
//     vueData["stars"] = response.data.stargazers_count;
//     console.log(vueData)
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

var ctx = document.getElementById("forksChart").getContext("2d");
var forksChart = new Chart(ctx, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Forks",
        data: forks,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

var abc = document.getElementById("starChart").getContext("2d");
var starChart = new Chart(abc, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Stars",
        data: stars,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

var def = document.getElementById("watchersChart").getContext("2d");
var watchersChart = new Chart(def, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Watchers",
        data: watchers,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

var efg = document.getElementById("popChart").getContext("2d");
var popChart = new Chart(efg, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Popularity",
        data: popularity,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});