
<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("h2")
        .data(dataset)
        .enter()
        .append("h2")
        // Add your code below this line
            .text(dataEach => `${dataEach} USD`)
            .style("font-family", "verdana")
            // Add your code above this line
  </script>
</body>