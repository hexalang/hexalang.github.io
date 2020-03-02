{
	let sidebarToggles = [].slice.call(document.getElementsByClassName("sidebar-toggle"))
	sidebarToggles.forEach(function(element) {
		element.addEventListener("click", function(v) { document.body.classList.toggle("sidebar-hidden") })
	});
}

{
	let darkToggles = document.createElement('div')
	let dark = document.createElement('span')
	dark.className = 'dark'
	darkToggles.appendChild(dark)

	let light = document.createElement('span')
	light.className = 'light'
	darkToggles.appendChild(light)

	darkToggles.className = 'dark-toggle'
	document.querySelector('.content').appendChild(darkToggles)

	var darken = false
	darkToggles.addEventListener("click", function(v) {
		darken = !darken
		if (darken) document.body.setAttribute('data-theme', 'dark')
		else document.body.removeAttribute('data-theme')
	})
}

function articleNav(event) {
	let nodes = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]");
	let div = document.querySelector('#article-navigation')
	while (div.children.length > 0) {
		div.removeChild(div.children[0])
	}
	if (nodes.length < 2) return
	for (let node of nodes) {
		let header = document.createElement('a')
		header.onclick = articleNav
		header.innerText = node.innerText
		header.href = '#' + node.id
		let hash = (event && event.srcElement && event.srcElement.hash || location.hash)
		if (hash == header.hash) {
			header.className = 'selected'
		}
		if ((hash == '#' || hash == '') && (div.children.length == 0)) {
			header.className = 'selected'
		}
		div.appendChild(header)
		div.appendChild(document.createElement('br'))
	}
};
articleNav();
