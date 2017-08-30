<template>
	<div>
		<h1 class="centralizado">Alurapic</h1>
		<p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
		<input type="search" class="filtro" @input="filtro = $event.target.value" 
			placeholder="filtre pelo título da foto">
		<ul class="lista-fotos">
			<li class="lista-fotos-item" v-for="foto of fotosComFiltro">
				<meu-painel :titulo="foto.titulo">
					<imagem-responsiva v-meu-transform:scale.animacao="1.2" :url="foto.url" :titulo="foto.titulo" />
					<botao-remove 
						tipo="button" 
						rotulo="Remover" 
						@botaoAtivado="remove(foto, $event)"
						:confirmacao="true"
						estilo="perigo" />
				</meu-painel>
			</li>
		</ul>
	</div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';
import transform from '../../directives/Transform';

export default {

	components: {

		'meu-painel': Painel,
		'imagem-responsiva': ImagemResponsiva,
		'botao-remove': Botao
	},

	directives: {
		'meu-transform': transform
	},
  
	data() {

		return {
			fotos: [],
			filtro: '',
			mensagem: ''
		}
	},

	computed: {

		fotosComFiltro() {

			if(this.filtro) {
				let exp = new RegExp(this.filtro.trim(), 'i');
				return this.fotos.filter(foto => exp.test(foto.titulo));
			} else {
				return this.fotos;
			}
		}
	},

	created() {

		let promise = this.$http.get('http://localhost:3000/v1/fotos');
		promise
			.then(res => res.json())
			.then(imagens => this.fotos = imagens, err => console.log(err));
	},

	methods: {

		remove(foto, $event) {
			this.$http
				.delete(`http://localhost:3000/v1/fotos/${foto._id}`)
				.then(() => this.mensagem= 'Foto removida com sucesso', 
					err => {
						console.log(err);
						this.mensagem= 'Não foi possível remover a foto';
					})
		}
	}
}
</script>

<style>
.centralizado {
	text-align: center;
}

.lista-fotos {
	list-style: none;
}

.lista-fotos .lista-fotos-item {
	display: inline-block;
}

.filtro {
	display: block;
	width: 50%;
	margin: 0 auto;
}

</style>
