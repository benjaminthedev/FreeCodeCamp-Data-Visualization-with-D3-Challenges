<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body")
        .selectAll("h2")
        .data(dataset)
        .enter()
        .append("h2")
        .text((d) => (d + " USD"))
        // Add your code below this line

      .style("color", function(dataSingle){
        if(dataSingle <= 20){
          return "red";
        }
        return "green";
      });

      // Add your code above this line
  </script>
</body>


    // Or you can do it ES6 Way / Ternary Operator:


    <body>
        <script>
            const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

            d3.select("body")
            .selectAll("h2")
            .data(dataset)
            .enter()
            .append("h2")
            .text((d) => (d + " USD"))
            // Add your code below this line

        .style("color", dataSingle => {
            return (dataSingle < 20 ? "red" : "green")
        })

      // Add your code above this line
  </script>
    </body>

