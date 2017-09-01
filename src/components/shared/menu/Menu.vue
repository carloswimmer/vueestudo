<template>
    <nav class="menu">
        <ul >
            <li v-for="rota in rotas">
                <router-link :to="rota.path ? rota.path : '/'" >
                    {{ rota.nome }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
  
    props: {
      
        rotas: {

            type: Array,
            required: true
        }
    }
}
</script>

<style>
.menu {
	display: inline;
}

.menu ul {
    padding:0px;
    margin:0px;
    background-color:#EDEDED;
    list-style:none;
}

.menu ul li { display: inline; }

.menu ul li a {
    padding: 8px 10px 6px 10px;
    display: inline-block;

    /* visual do link */
    background-color:#EDEDED;
    color: #333;
    text-decoration: none;
    border-bottom:3px solid #EDEDED;
}

.menu ul li a:hover {
    background-color:#D6D6D6;
    color: #6D6D6D;
    border-bottom:3px solid lightseagreen;
}
</style>
