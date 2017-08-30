import Vue from 'vue';

Vue.directive('meu-transform', {

    bind(el, binding, vnode) {

        let current = 0;

        el.addEventListener('click', function() {

            let incremento = binding.value || 90;
            let efeito;

            if(!binding.arg || binding.arg == 'rotate') {

                if(binding.modifiers.reverse) { current -= incremento; }
                else {current += incremento;}
                efeito = `rotate(${current}deg)`;
            } else if(binding.arg == 'scale') {

                current += incremento;
                efeito = `scale(${current})`;
            }
            if(binding.modifiers.animacao) this.style.transition = 'transform .5s';
            this.style.transform = efeito;
        });
    }
});