const render = json => {
  const wrap = document.getElementById('wrap')
  for (item in json) {
    const newWrap = document.createElement('ul')
    for (field in json[item]) {
      const newList = document.createElement('li')
      newList.innerHTML = `${field}: ${json[item][field]}`
      newWrap.appendChild(newList)
    }
    document.body.appendChild(newWrap)
  }
}

const fetchAPI = url => {
  fetch(`http://localhost:1488/${url}`)
    .then(res => res.json())
    .then(json => render(json))
}

const button = document.getElementById('button')

button.onclick = _ => {
  fetchAPI('myurl');
}
