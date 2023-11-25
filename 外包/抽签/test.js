async function addDummyData(i,phone) {
  await fetch({
    url: 'https://jinshuju.net/api/v1/forms/TM8uOr/entries',
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from(`Rm3IL1msLrQ7-IowuBZSvQ:PugSkbS2uIh9-DLiaqMIYQ`).toString('base64'),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "field_1": `${i}`,
      "field_2": `${phone}`,
      "field_3": "test"
    })
  })
}

for(let i = 0;i<100;i++){
  let phone = 15870465846
  addDummyData(i,phone)
  phone ++
}