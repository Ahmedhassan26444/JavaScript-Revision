setTimeout(() => {
    console.log("Hello after 2 seconds");
  }, 
  2000);
  
  setInterval(() => {
    console.log("Hello every 2 seconds");
  }, 2000);

  const intervalId = setInterval(() => {
    console.log("Running...");
  }, 1000);
  
  setTimeout(() => {
    clearInterval(intervalId); // Stops it after 5 seconds
    console.log("Stopped");
  }, 5000);
  