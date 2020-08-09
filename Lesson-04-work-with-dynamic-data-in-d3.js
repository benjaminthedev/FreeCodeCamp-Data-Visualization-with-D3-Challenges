<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("h2")
        .data(dataset)
        .enter()
        .append("h2")
        // Add your code below this line

      .text(function(dataEach){
        return dataEach + " USD";
      });

      // Add your code above this line
  </script>
</body>


    // Or you can do it this way:
    // Cleaner way of doing it - ES6 Way with string interpolation!


    <body>
        <script>
            const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

            d3.select("body").selectAll("h2")
            .data(dataset)
            .enter()
            .append("h2")
            // Add your code below this line
            .text(dataEach => `${dataEach} USD`)
            // Add your code above this line
  </script>
    </body>


