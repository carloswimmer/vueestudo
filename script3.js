var list = {
	items: [
		{text: 'Banana', checked: true},
		{text: 'Macadamia', checked: false},
		{text: 'Abacate', checked: false}],
	title: 'Lista de Compras',
	newItem: ''
};

new Vue({
	el: '#app',
	data: list,
	methods: {
		addItem: function () {
			var text;

			text = this.newItem.trim();
			if (text) {
				this.items.push({
					text: text,
					checked: false
				});
				this.newItem = '';
			}
		}
	}
});