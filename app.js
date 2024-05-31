function getData(dataId, nextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      if (nextData) {
        nextData();
      }
    }, 2000);
  });
}
getData().then((res) => {
  console.log("promise");
});
