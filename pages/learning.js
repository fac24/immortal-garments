import { c02DataByIndustry } from "../data/c02DataByIndustryArea";
// import React from "react";

// import React, { Component } from 'react'
// import * as d3 from 'd3';
// import { BarChart, XYPlot, HorizontalGridLines } from "d3";
import { useD3 } from "../components/hooks/useD3";
import React from 'react';
import * as d3 from 'd3';

const data = [
    { year: 1980, efficiency: 24.3, sales: 8949000 },
    { year: 1985, efficiency: 27.6, sales: 10979000 },
    { year: 1990, efficiency: 28, sales: 9303000 },
    { year: 1991, efficiency: 28.4, sales: 8185000 },
    { year: 1992, efficiency: 27.9, sales: 8213000 },
    { year: 1993, efficiency: 28.4, sales: 8518000 },
    { year: 1994, efficiency: 28.3, sales: 8991000 },
    { year: 1995, efficiency: 28.6, sales: 8620000 },
    { year: 1996, efficiency: 28.5, sales: 8479000 },
    { year: 1997, efficiency: 28.7, sales: 8217000 },
    { year: 1998, efficiency: 28.8, sales: 8085000 },
    { year: 1999, efficiency: 28.3, sales: 8638000 },
    { year: 2000, efficiency: 28.5, sales: 8778000 },
    { year: 2001, efficiency: 28.8, sales: 8352000 },
    { year: 2002, efficiency: 29, sales: 8042000 },
    { year: 2003, efficiency: 29.5, sales: 7556000 },
    { year: 2004, efficiency: 29.5, sales: 7483000 },
    { year: 2005, efficiency: 30.3, sales: 7660000 },
    { year: 2006, efficiency: 30.1, sales: 7762000 },
    { year: 2007, efficiency: 31.2, sales: 7562000 },
    { year: 2008, efficiency: 31.5, sales: 6769000 },
    { year: 2009, efficiency: 32.9, sales: 5402000 },
    { year: 2010, efficiency: 33.9, sales: 5636000 },
    { year: 2011, efficiency: 33.1, sales: 6093000 },
    { year: 2012, efficiency: 35.3, sales: 7245000 },
    { year: 2013, efficiency: 36.4, sales: 7586000 },
    { year: 2014, efficiency: 36.5, sales: 7708000 },
    { year: 2015, efficiency: 37.2, sales: 7517000 },
    { year: 2016, efficiency: 37.7, sales: 6873000 },
    { year: 2017, efficiency: 39.4, sales: 6081000 },
]

function BarChart() {
    console.log(data);
    const ref = useD3(
        (svg) => {
            const height = 500;
            const width = 500;
            const margin = { top: 20, right: 30, bottom: 30, left: 40 };

            const x = d3
                .scaleBand()
                .domain(data.map((d) => d.year))
                .rangeRound([margin.left, width - margin.right])
                .padding(0.1);

            const y1 = d3
                .scaleLinear()
                .domain([0, d3.max(data, (d) => d.sales)])
                .rangeRound([height - margin.bottom, margin.top]);

            const xAxis = (g) =>
                g.attr("transform", `translate(0,${height - margin.bottom})`).call(
                    d3
                        .axisBottom(x)
                        .tickValues(
                            d3
                                .ticks(...d3.extent(x.domain()), width / 40)
                                .filter((v) => x(v) !== undefined)
                        )
                        .tickSizeOuter(0)
                );

            const y1Axis = (g) =>
                g
                    .attr("transform", `translate(${margin.left},0)`)
                    .style("color", "steelblue")
                    .call(d3.axisLeft(y1).ticks(null, "s"))
                    .call((g) => g.select(".domain").remove())
                    .call((g) =>
                        g
                            .append("text")
                            .attr("x", -margin.left)
                            .attr("y", 10)
                            .attr("fill", "currentColor")
                            .attr("text-anchor", "start")
                            .text(data.y1)
                    );

            svg.select(".x-axis").call(xAxis);
            svg.select(".y-axis").call(y1Axis);

            svg
                .select(".plot-area")
                .attr("fill", "steelblue")
                .selectAll(".bar")
                .data(data)
                .join("rect")
                .attr("class", "bar")
                .attr("x", (d) => x(d.year))
                .attr("width", x.bandwidth())
                .attr("y", (d) => y1(d.sales))
                .attr("height", (d) => y1(0) - y1(d.sales));
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

// function Learning() {

//     const data = [
//         { Symbol: "AAPL", Date: 1, Close: 64.96286 },
//         { Symbol: "AAPL", Date: 2, Close: 63.408573 },
//         { Symbol: "AAPL", Date: 3, Close: 61.264286 }
//     ];

//     // for (let i = 0; i < 10; i++) {
//     //     console.log(Object.entries(data)[i][1]['industry section name'])
//     // }

//     // Copyright 2021 Observable, Inc.
//     // Released under the ISC license.
//     // https://observablehq.com/@d3/index-chart
//     function IndexChart(data, {
//         x = ([x]) => x, // given d in data, returns the (temporal) x-value
//         y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
//         z = () => 1, // given d in data, returns the (categorical) z-value for series
//         defined, // for gaps in data
//         curve = d3.curveLinear, // how to interpolate between points
//         marginTop = 20, // top margin, in pixels
//         marginRight = 40, // right margin, in pixels
//         marginBottom = 30, // bottom margin, in pixels
//         marginLeft = 40, // left margin, in pixels
//         width = 640, // outer width, in pixels
//         height = 400, // outer height, in pixels
//         xType = d3.scaleUtc, // the x-scale type
//         xDomain, // [xmin, xmax]
//         xRange = [marginLeft, width - marginRight], // [left, right]
//         xFormat, // a format specifier string for the x-axis
//         yType = d3.scaleLog, // the y-scale type
//         yDomain, // [ymin, ymax]
//         yRange = [height - marginBottom, marginTop], // [bottom, top]
//         yFormat = "", // a format specifier string for the y-axis
//         yLabel, // a label for the y-axis
//         zDomain, // array of z-values
//         formatDate = "%b %-d, %Y", // format specifier string for dates (in the title)
//         colors = d3.schemeTableau10, // array of categorical colors
//     } = {}) {
//         // Compute values.
//         const X = d3.map(data, x);
//         const Y = d3.map(data, y);
//         const Z = d3.map(data, z);
//         if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
//         const D = d3.map(data, defined);

//         // Compute default x- and z-domains, and unique the z-domain.
//         if (xDomain === undefined) xDomain = d3.extent(X);
//         if (zDomain === undefined) zDomain = Z;
//         zDomain = new d3.InternSet(zDomain);

//         // Omit any data not present in the z-domain.
//         const I = d3.range(X.length).filter(i => zDomain.has(Z[i]));
//         const Xs = d3.sort(I.filter(i => D[i]).map(i => X[i])); // for bisection later

//         // Compute default y-domain.
//         if (yDomain === undefined) {
//             const r = I => d3.max(I, i => Y[i]) / d3.min(I, i => Y[i]);
//             const k = d3.max(d3.rollup(I, r, i => Z[i]).values());
//             yDomain = [1 / k, k];
//         }

//         // Construct scales and axes.
//         const xScale = xType(xDomain, xRange).interpolate(d3.interpolateRound);
//         const yScale = yType(yDomain, yRange);
//         const color = d3.scaleOrdinal(zDomain, colors);
//         const xAxis = d3.axisBottom(xScale).ticks(width / 80, xFormat).tickSizeOuter(0);
//         const yAxis = d3.axisLeft(yScale).ticks(null, yFormat);

//         // Construct formats.
//         formatDate = xScale.tickFormat(null, formatDate);

//         // Construct a line generator.
//         const line = d3.line()
//             .defined(i => D[i])
//             .curve(curve)
//             .x(i => xScale(X[i]))
//             .y((i, _, I) => yScale(Y[i] / Y[I[0]]));

//         const svg = d3.select("section")
//             .append("svg")
//             .attr("width", width)
//             .attr("height", height)
//             .style("fill", "blue")
//             .attr("viewBox", [0, 0, width, height])
//             .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
//             .attr("font-family", "sans-serif")
//             .attr("font-size", 10)
//             .on("touchstart", event => event.preventDefault())
//             .on("pointermove", pointermoved);

//         svg.append("g")
//             .attr("transform", `translate(0,${height - marginBottom})`)
//             .call(xAxis)
//             .call(g => g.select(".domain").remove());

//         svg.append("g")
//             .attr("transform", `translate(${marginLeft},0)`)
//             .call(yAxis)
//             .call(g => g.select(".domain").remove())
//             .call(g => g.selectAll(".tick line").clone()
//                 .attr("stroke-opacity", d => d === 1 ? null : 0.2)
//                 .attr("x2", width - marginLeft - marginRight))
//             .call(g => g.append("text")
//                 .attr("x", -marginLeft)
//                 .attr("y", 10)
//                 .attr("fill", "currentColor")
//                 .attr("text-anchor", "start")
//                 .text(yLabel));

//         const rule = svg.append("g");

//         rule.append("line")
//             .attr("y1", marginTop)
//             .attr("y2", height - marginBottom - 15)
//             .attr("stroke", "currentColor");

//         const ruleLabel = rule.append("text")
//             .attr("y", height - marginBottom - 15)
//             .attr("fill", "currentColor")
//             .attr("text-anchor", "middle")
//             .attr("dy", "1em");

//         const serie = svg.append("g")
//             .selectAll("g")
//             .data(d3.group(I, i => Z[i]))
//             .join("g");

//         serie.append("path")
//             .attr("fill", "none")
//             .attr("stroke-width", 1.5)
//             .attr("stroke-linejoin", "round")
//             .attr("stroke-linecap", "round")
//             .attr("stroke", ([z]) => color(z))
//             .attr("d", ([, I]) => line(I));

//         serie.append("text")
//             .attr("font-weight", "bold")
//             .attr("fill", "none")
//             .attr("stroke", "white")
//             .attr("stroke-width", 3)
//             .attr("stroke-linejoin", "round")
//             .attr("x", ([, I]) => xScale(X[I[I.length - 1]]))
//             .attr("y", ([, I]) => yScale(Y[I[I.length - 1]] / Y[I[0]]))
//             .attr("dx", 3)
//             .attr("dy", "0.35em")
//             .text(([z]) => z)
//             .clone(true)
//             .attr("fill", ([z]) => color(z))
//             .attr("stroke", null);

//         function update(date) {
//             date = Xs[d3.bisectCenter(Xs, date)];
//             rule.attr("transform", `translate(${xScale(date)},0)`);
//             ruleLabel.text(formatDate(date));
//             serie.attr("transform", ([, I]) => {
//                 const i = I[d3.bisector(i => X[i]).center(I, date)];
//                 return `translate(0,${yScale(1) - yScale(Y[i] / Y[I[0]])})`;
//             });
//             svg.property("value", date).dispatch("input", { bubbles: true }); // for viewof
//         }

//         function pointermoved(event) {
//             update(xScale.invert(d3.pointer(event)[0]));
//         }

//         update(xDomain[0]);

//         return Object.assign(svg.node(), { scales: { color }, update });
//     }
//     // data.map((datum) => {
//     //     console.log(datum['industry section name'])
//     // })
//     // return (<><section></section></>)
// }

// function Chart() {
//     const svg = React.useRef < SVGSVGElement > (null);

//     React.useEffect(() => {
//         drawChart(svg);
//     }, [svg]);

//     return (
//         <div id="chart">
//             <svg ref={svg} />
//         </div>
//     );
// };

// export default Chart;