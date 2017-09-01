<template>
	<button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">{{ rotulo }}</button>
</template>

<script>
export default {
	
	props: {

        tipo: {
            required: true,
            type: String
        }, 

        rotulo: {
            required: true,
            type: String
        }, 

        confirmacao: Boolean, 

        estilo: String
    },

	methods: {

		disparaAcao() {

            if(this.confirmacao) {
                if(confirm('Confirma operação?')) {

                    this.$emit('botaoAtivado', 'informação extra');
                }
                return;
            } else {
                
                this.$emit('botaoAtivado', 'informação extra');
            }
		}
	},

    computed: {

        estiloDoBotao() {

            if(this.estilo == 'padrao' || !this.estilo) return 'botao-padrao';
            if(this.estilo == 'perigo') return 'botao-perigo';
        }
    }
}
</script>

<style>
	.botao {
        display: inline-block;
        padding: 5px 10px;
        border-radius: 8px;
        margin: 10px 20px 0px 20px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
        margin: 10px 20px 10px 20px;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>
