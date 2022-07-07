import { c02DataWearingApparel } from "../data/c02DataWearingApparel";
import { useD3 } from "../components/hooks/useD3";
import React from 'react';
import * as d3 from 'd3';

const data = c02DataWearingApparel;

function BarChart() {
    const ref = useD3(
        (svg) => {
            const height = 500;
            const width = 1300;
            const margin = { top: 20, right: 30, bottom: 30, left: 40 };

            const x = d3
                .scaleBand()
                .domain(data.map((d) => d.year))
                .rangeRound([margin.left, width - margin.right])
                .padding(0.1);

            const y1 = d3
                .scaleLinear()
                .domain([0, d3.max(data, (d) => d.emissions)])
                .rangeRound([height - margin.bottom, margin.top]);

            const xAxis = (g) =>
                g
                    .attr("transform", `translate(0,${height - margin.bottom})`)
                    .style("color", "steelblue")
                    .call(d3.axisBottom(x).ticks(width / 80, ","))
                    .call(g => g.select(".domain").remove())
                    .call(g => g.append("text")
                        .attr("x", width)
                        .attr("y", margin.bottom - 4)
                        .attr("fill", "steelblue")
                        .attr("text-anchor", "end")
                        .text("Year →"))

            const y1Axis = (g) =>
                g
                    .attr("transform", `translate(${margin.left},0)`)
                    .style("color", "steelblue")
                    .call(d3.axisLeft(y1).ticks(null, "s"))
                    .call((g) => g.select(".domain").remove())
                    .call((g) =>
                        g
                            .attr("transform", `translate(${margin.left},0)`)
                            .call(d3.axisLeft(y1))
                            .call(g => g.select(".domain").remove())
                            .call(g => g.append("text")
                                .attr("x", -margin.left)
                                .attr("y", 10)
                                .attr("fill", "steelblue")
                                .attr("text-anchor", "start")
                                .text("↑ C02 emissions (in thousand tonnes)"))
                    );

            svg.select(".x-axis").call(xAxis);
            svg.select(".y-axis").call(y1Axis);

            svg.append("text")
                .attr("x", width - 75)
                .attr("y", height)
                .attr("text-anchor", "middle")
                .style("font-size", "9px")
                .text("Source: ONS");

            svg.append("text")
                .attr("x", width / 2)
                .attr("y", 20)
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .text("C02 emissions from the clothing industry in the UK, 1990-2020");

            svg.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                    .x(function (d) { return x(d.year) })
                    .y(function (d) { return y1(d.emissions) })
                )
                .on("mouseover", function (d) { console.log(d) })
        },

        [data.length]
    );

    return (
        <svg
            ref={ref}
            style={{
                height: 500,
                width: "100%",
                marginRight: "0px",
                marginLeft: "0px",
            }}
        >
            <g className="plot-area" />
            <g className="x-axis" />
            <g className="y-axis" />
        </svg>
    );
}

export default BarChart;