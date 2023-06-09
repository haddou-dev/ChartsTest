/** @format */

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const names = [
  "John",
  "Emily",
  "Michael",
  "Sophia",
  "William",
  "Olivia",
  "James",
  "Ava",
  "Robert",
  "Emma",
  "David",
  "Mia",
  "Joseph",
  "Charlotte",
  "Daniel",
  "Amelia",
];

//Ads_Chart (lines)
new Chart(Ads_Chart, {
  type: "line",
  data: {
    labels: names,
    datasets: [
      {
        label: "HD099-444",
        data: [38, 37, 24, 39, 88, 78, 24, 39, 18, 58, 44, 90, 78, 24, 39, 18],
        borderColor: "yellow",
        borderWidth: 1,
        pointStyle: false,
        borderCapStyle: false,
        capBezierPoints: false,
        fill: false,
      },
      {
        label: "XAD011-895",
        data: [18, 8, 24, 39, 78, 24, 39, 18, 39, 18, 58, 44, 90, 88, 78, 24],
        borderColor: "#6023D6",
        borderWidth: 1,
        pointStyle: false,
        borderCapStyle: false,
        capBezierPoints: false,
        fill: false,
      },
      {
        label: "ACCD011-94",
        data: [88, 78, 24, 39, 18, 68, 78, 24, 39, 18, 58, 44, 90, 78, 24, 39],
        borderColor: "green",
        borderWidth: 1,
        pointStyle: false,
        borderCapStyle: false,
        capBezierPoints: false,
        fill: false,
      },
      {
        label: "BS011-4334",
        data: [18, 8, 54, 39, 78, 24, 39, 18, 50, 18, 58, 44, 90, 57, 78, 44],
        borderColor: "red",
        borderWidth: 1,
        pointStyle: false,
        borderCapStyle: false,
        capBezierPoints: false,
        fill: false,
      },
      {
        label: "AD011-444",
        data: [88, 38, 24, 39, 1, 68, 78, 24, 9, 56, 58, 44, 90, 100, 24, 39],
        borderColor: "brown",
        borderWidth: 1,
        pointStyle: false,
        borderCapStyle: false,
        capBezierPoints: false,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: null,
      legend: {
        position: "right",
      },
      tooltip: {
        mode: "index",
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      x: { display: false },
      y: { display: true },
    },
  },
});

//three Line_Chart
new Chart(threeLine_Chart, {
  type: "line",
  data: {
    labels: names,
    datasets: [
      {
        data: [38, 37, 24, 39, 88, 78, 24, 39, 18, 58, 44, 90, 78, 24, 39, 18],
        borderColor: "yellow",
        borderWidth: 1,
        pointStyle: false,
        borderCapStyle: false,
        capBezierPoints: false,
        fill: false,
      },
      {
        data: [18, 8, 24, 39, 78, 24, 39, 18, 39, 18, 58, 44, 90, 88, 78, 24],
        borderColor: "#6023D6",
        borderWidth: 1,
        pointStyle: false,
        borderCapStyle: false,
        capBezierPoints: false,
        fill: false,
      },
      {
        data: [88, 78, 24, 39, 18, 68, 78, 24, 39, 18, 58, 44, 90, 78, 24, 39],
        borderColor: "green",
        borderWidth: 1,
        pointStyle: false,
        borderCapStyle: false,
        capBezierPoints: false,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: null,
      legend: null,
      tooltip: {
        mode: "index",
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "Month",
        },
      },
      y: { display: true },
    },
  },
});
// Bar Chart :
new Chart(Bar_Chart, {
  type: "bar",
  data: {
    labels: months,
    datasets: [
      {
        label: "Dataset 1",
        data: [88, 78, 24, 39, 88, 78, 24, 39, 18, 58, 44, 90],
        borderColor: "#6023D6",
        backgroundColor: "#6023D6",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: null,
      title: null,
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: true,
      },
    },
  },
});

// Bubble Chart :
new Chart(Bubble_Chart, {
  type: "bubble",
  data: {
    datasets: [
      {
        label: "Dataset 1",
        data: [
          {
            x: 15,
            y: 50,
            r: 8,
          },

          {
            x: 20,
            y: 45,
            r: 8,
          },
          {
            x: 25,
            y: 50,
            r: 8,
          },
          {
            x: 30,
            y: 40,
            r: 8,
          },
          {
            x: 35,
            y: 45,
            r: 8,
          },
          {
            x: 40,
            y: 45,
            r: 8,
          },
          {
            x: 45,
            y: 40,
            r: 8,
          },
          {
            x: 50,
            y: 36,
            r: 8,
          },
        ],
        borderColor: "#6023D6",
        backgroundColor: "#6023D6",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: null,
      title: {
        display: true,
        text: "Chart.js Scatter Chart",
      },
    },
  },
});
// Area Code Chart :
new Chart(doughnut_chart, {
  type: "doughnut",
  data: {
    labels: ["CNI", "BE", "FC", "Gk"],
    datasets: [
      {
        label: "Training Models",
        data: [4.88, 1.78, 0.247, 13.9],
        backgroundColor: ["#EF6586", "#23DBCF", "#FFC75A", "#6023D6"],
        hoverOffset: 4,
        weight: 2,
      },
    ],
  },
  options: {
    cutout: 30,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Training Models",
      },
    },
  },
});
// Area Code Chart :
new Chart(areaCode, {
  type: "radar",
  data: {
    labels: ["A1", "A1", "A1", "A1", "B2", "B3", "B12", "B13"],
    datasets: [
      {
        data: [152, 143, 155, 159, 132, 153, 155, 153],
        borderColor: "#6818EC",
        backgroundColor: "rgba(152, 238, 204, 0.5)",
        borderWidth: 1,
        pointStyle: false,
        borderCapStyle: false,
        capBezierPoints: false,
        spanGaps: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: true,
        text: "Area Code",
      },
    },
    scales: {
      r: {
        angleLines: {
          display: false,
        },
      },
    },
  },
});
// Line chart :
new Chart(document.getElementById("line_circ"), {
  type: "line",
  data: {
    labels: ["B1", "L2", "L9", "C5", "L1", "L3", "B1", "B1", "J8"],
    datasets: [
      {
        backgroundColor: "#fff",
        borderColor: "#6023D6",
        data: [12, 19, 3, 5, 12, 29, 15, 20, 10],
        borderWidth: 1,
        pointStyle: true,
        borderCapStyle: true,
        capBezierPoints: true,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        display: true,
      },
      x: {
        display: false,
      },
    },
  },
});
// horizontal bar chart :
new Chart(document.getElementById("horiz_line"), {
  type: "bar",
  data: {
    labels: ["B1", "L2", "L9", "C5", "L1", "L3", "B1", "B1", "J8", "J6"],
    datasets: [
      {
        data: [10, 55, 89, 64, 15, 75, 8, 22, 66, 20],
        borderColor: "#6023ef",
        // border:'none',
        backgroundColor: "#6023ef",
      },
    ],
  },
  options: {
    indexAxis: "y",
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        display: false,
      },
    },
  },
});

// Line chart :
new Chart(document.getElementById("CoursesChart"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        backgroundColor: "#6023D6",
        borderColor: "#6023D6",
        data: [12, 19, 3, 5, 12],
        borderWidth: 1,
        pointStyle: false,
        borderCapStyle: false,
        capBezierPoints: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
  },
});
// second Chart (Doughnut):
new Chart(document.getElementById("GreenDoughnut"), {
  type: "doughnut",
  data: {
    labels: ["Red", "Orange"],
    datasets: [
      {
        // label: "Dataset 1",
        data: [80, 30],
        backgroundColor: ["#03C988", "#DBDFEA"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: false,
        position: "top",
      },
    },
  },
});
new Chart(document.getElementById("RedDoughnut"), {
  type: "doughnut",
  data: {
    labels: ["Red", "Orange"],
    datasets: [
      {
        // label: "Dataset 1",
        data: [87, 13],
        backgroundColor: ["#DBDFEA", "#F45050"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: false,
        position: "top",
      },
    },
  },
});
// First Chart (Line):
new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: months,
    datasets: [
      {
        data: [0, 20, 20, 60, 60, 120, 6, 180, 120, 125, 105, 110, 170],
        backgroundColor: "#EEE0F4",
        borderColor: "#6023ef",
        fill: true,
        label: "",
        tension: 0.4,
        pointStyle: false,
        borderCapStyle: false,
        capBezierPoints: false,
        //   showLine: false,
        //   stepped: true,
        //   tension: 1,
      },
    ],
  },
  options: {
    responsive: true,
    legend: null,
    plugins: {
      legend: null,
      title: {
        display: false,
        // text: "Chart.js Line Chart - Cubic interpolation mode",
      },
    },
    scales: {
      y: {
        display: false,
        suggestedMin: 0,
        suggestedMax: 200,
      },
      x: {
        display: false,
      },
    },
  },
});
// Pie Chart :
const pie_chart_data = {
  labels: ["Fcebook", "Youtube", "WhatsApp", "Television", "Google", "WebSite"],
  datasets: [
    {
      backgroundColor: ["#F1EFFC", "#7F73DF"],
      data: [21, 79],
    },
    {
      backgroundColor: ["#F1EFFC", "#6325C2"],
      data: [33, 67],
    },
    {
      backgroundColor: ["#F1EFFC", "#27D8D0"],
      data: [30, 70],
    },
    {
      backgroundColor: ["#F1EFFC", "#E6D475"],
      data: [10, 90],
    },
    {
      backgroundColor: ["#F1EFFC", "#D17276"],
      data: [20, 80],
    },
    {
      backgroundColor: ["#F1EFFC", "#0AA92B"],
      data: [10, 90],
    },
  ],
};
new Chart(pie_chart, {
  type: "pie",
  data: pie_chart_data,
  options: {
    cutout: 80,
    responsive: true,
    plugins: {
      legend: null,
    },
  },
});
