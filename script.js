var list = {
	items: [{text: 'Banana', checked: true},
		{text: 'Macadamia', checked: false},
		{text: 'Abacate', checked: false}],
	title: 'Lista de Compras',
	newItem: ''
};

new Vue({
	el: '#app',
	data: list
});

/**
*data.items.push('Batata')
*data.items.push('Abacate')
*data.items.shift()
*/
