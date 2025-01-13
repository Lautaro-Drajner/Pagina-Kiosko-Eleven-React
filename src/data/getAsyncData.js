function getAsyncData() {
  console.log("Solicitando datos");

  const promiseData = Promise((resolve) => {
    console.log("Promesa Terminada");
    resolve({ status: "ok" });
  });

  console.log("Promesa generada.");
  return;
}

getAsyncData();
