document.addEventListener("DOMContentLoaded", function() {
    // create instance of kinet with custom settings
    const kinet = new Kinet({
      acceleration: 0.06,
      friction: 0.2,
      names: ["x", "y"],
    });
  
    // select circle element
    const circle = document.getElementById("cursor-circle");
  
    // set handler on kinet tick event
    kinet.on("tick", function (instances) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      const mouseX = instances.x.current + scrollX;
      const mouseY = instances.y.current + scrollY;
      
      circle.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${instances.y.velocity / 2}deg)`;
    });
  
    // call kinet animate method on mousemove
    document.addEventListener("mousemove", function (event) {
      kinet.animate("x", event.clientX - window.innerWidth / 2);
      kinet.animate("y", event.clientY - window.innerHeight / 2);
    });
  
    // log
    kinet.on("start", function () {
      console.log("start");
    });
  
    kinet.on("end", function () {
      console.log("end");
    });
  });
  