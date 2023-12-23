import { Chart } from "react-google-charts";

export const data = [
  ["Составляющая", "Количество"],
  ["Пушистость", 6],
  ["Милота", 2],
  ["Вреднота", 2],
  ["Безумие", 1],
];

export const options = {
  title: "Из чего состоят котики",

};

function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />

  );
}

export default App;
