<template>
	<div>
		<h1>{{ titulo }}</h1>
		<ul>
			<li v-for="foto of fotos">
				<img :src="foto.url" :alt="foto.titulo">
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  
	data() {

		return {
			titulo: 'Alurapic',
			fotos: [
				{
					url: 'https://i.ytimg.com/vi/WdkT0dBDuug/hqdefault.jpg',
					titulo: 'cachorro1'
				},
				{
					url: 'http://tudosobrecachorros.com.br/wp-content/uploads/cachorros-fofos-08.jpg',
					titulo: 'cachorro2'
				}
			]
		}
	}
}
</script>

<style>

</style>
