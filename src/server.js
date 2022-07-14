const app = require("./app");
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listning to the port no. ${port}`);
});
