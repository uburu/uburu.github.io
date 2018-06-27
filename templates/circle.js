    var stage = acgraph.create("container");
    var size = screen.width * (3/8);

    // create a triangle
    rect_1 = stage.rect(size/2, 0, size, size);
    rect_1.stroke(null);

    // get the triangle center point
    triangleCenterX = rect_1.getBounds().getLeft()+rect_1.getBounds().getWidth()/2;
    triangleCenterY = rect_1.getBounds().getTop()+rect_1.getBounds().getHeight()/2;
    max_radius = rect_1.getWidth()/2

    // create a circle
    circles = [];
    colours = [];


    function addCir(colour)
    {
      colours.push(colour);
      draw_circles(colours);
    }

    function draw_circles(colours)
    {
      amount_circles = colours.length;
      for (i = 0; i < amount_circles; i++)
      {
        circle = stage.circle(triangleCenterX, triangleCenterY, max_radius * 
        ((amount_circles - i) / amount_circles) );
        circle.fill(colours[i]);
        circle.stroke(null);
      }
    }