function toggleParentClass(elem, className) {
  elem.parentNode.classList.toggle(className);
}

function addParentClass(elem, className) {
      elem.parentNode.classList.add(className);
}

function removeParentClass(elem, className) {
      elem.parentNode.classList.remove(className);
}

function toggleMenu() {
  var elem = document.getElementById('main-nav');
  elem.classList.toggle('menu-on');
}

function toggleTab(e, tabsId, tabId) {
	e.stopImmediatePropagation();
	var tabsElem = document.getElementById(tabsId);
	var activeElements = tabsElem.querySelectorAll('.active');


	for( index=0; index < activeElements.length; index++ ) {
		activeElements[index].classList.remove('active');
 	}

	var els = tabsElem.querySelector("a[href='#"+tabId+"']");
	addParentClass(els, 'active');

	document.getElementById(tabId).classList.add('active');
}