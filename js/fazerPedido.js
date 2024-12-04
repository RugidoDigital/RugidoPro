document.addEventListener("DOMContentLoaded", function() {
    loja.eventos.init();
});

var loja = {};

var MEU_ENDERECO = null;

var CELULAR_EMPRESA = '559281966604'

loja.eventos = {
    init: () => {}
}

loja.metodos = {
    
    carregarResumo: () => {
       
        $("#Etapa2").removeClass('disable')
        $("#Etapa1").addClass('disable')

        loja.metodos.finalizarPedido();

    },

    etapa1: () => {
        $("#Etapa2").addClass('disable')
        $("#Etapa1").removeClass('disable')
    },

    voltar: () =>{
        window.history.back();
    },

    finalizarPedido: () => {
        if (MEU_ENDERECO != true) {
            var texto = `Olá! Vim pelo site e quero saber mais sobre os serviços.`;
            let encode = encodeURI(texto);
            let URL = `https://wa.me/${CELULAR_EMPRESA}?text=${encode}`;
            console.log("URL gerada para WhatsApp:", URL);
            window.open(URL, '_blank'); // Abre a URL em uma nova aba
        } else {
            loja.metodos.mensagem("Mensagem não definida.");
        }
    },
    

    mensagem: (texto, cor = 'red', tempo = 3500) => {
        let id = Math.floor(Date.now() * Math.random()).toString();
        let msg = `<div id="msg-${id}" class="animated fadeInDown toast ${cor}">${texto}</div>`;
        $("#container-mensagens").append(msg);
        setTimeout(() => {
            $("#msg-" + id).removeClass('fadeInDown');
            $("#msg-" + id).addClass('fadeOutUp');
            setTimeout(() => {
                $("#msg-" + id).remove();
            }, 800);
        }, tempo)
    }
}

var showingToast = false; // Variável para verificar se o toast está sendo exibido

function showToast() {
    if (!showingToast) {
        let toast = `<div id="toast" class="toast hide">Mensagem de Alerta</div>`
        $("#container-mensagens").append(toast);
        $("toast").remove("hide");
        $("toast").add("show");

        showingToast = true;

        setTimeout(function(){
            $("toast").remove("show");
            $("toast").add("hide");

            showingToast = false;
        }, 3000); // Tempo em milissegundos (3 segundos)
    }
}