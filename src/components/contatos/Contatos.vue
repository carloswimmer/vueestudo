<template>
  <div>
    <h1 class="centralizado">Contatos</h1>
    <imagem-responsiva url="http://eternaweb.com.br/wp-content/uploads/2016/01/Captura-de-Tela-2016-01-22-%C3%A0s-10.22.56.png"
         titulo="cadastro" />
  </div>
</template>

<script>
  import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';

export default {

  components: {
    'imagem-responsiva': ImagemResponsiva
  }  
}
</script>

<style>
.centralizado {
    text-align: center;
}
</style>
