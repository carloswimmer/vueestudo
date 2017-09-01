<template>
    <div class="painel">
        <h4 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h4>
        <transition name="painel-fade">
            <div class="painel-corpo" v-show="visivel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
  
  props: ['titulo'],

  data() {

      return {
          
          visivel: true
      }
  }
}
</script>

<style scoped>

.painel {
    padding: 0 auto;
    border: solid 2px lightgrey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
}

.painel .painel-titulo {
    text-align: center;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
	color: grey
}

.painel-fade-enter, .painel-fade-leave-active {
    opacity: 0;
}

.painel-fade-enter-active, .painel-fade-leave-active {
    transition: opacity .5s;
}

.painel-corpo {
    overflow: hidden;
}
</style>