import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
export const GraficoBarra = () => {
  return (
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: [2, 5, 3, 10, 18, 2, 1, 3, 4, 4, 20, 18],
        },
      ]}
      width={500}
      height={300}
    />
  );
};
