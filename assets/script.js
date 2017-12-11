const mathrs = Array.from(document.getElementsByClassName("mathr"));
mathrs.forEach(x => {
	var inner = x.innerHTML;
	x.innerHTML = "";
	katex.render(inner, x)
});