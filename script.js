var xValues = ["AI/ML", "BLOCKCHAIN", "IOT", "AR/VR", "CYBER SECURITY"];
var yValues = [55, 25, 30, 24, 45];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "TRENDING TECHNOLOGIES IN MARKET"
    }
  }
});
