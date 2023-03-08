const pre = document.getElementById("pre");
const textNote = document.createTextNode(
    `
    const name = "HTUN NYI WIN";
        const job = "Mechanical";
        const hobby = "IT";

        const htunnyiwin = ( job , hobby ) => {
          console.log(`My dreamjob is helping people with my ${job} and ${hobby} skills`);
        }
    `
);

pre.append(textNote);