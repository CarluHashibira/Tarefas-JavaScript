function validaForm(frm){

    if (frm.nome.value == '') {
        alert('Campo obrigatório');
        frm.nome.focus();
        return false;
    }


   if (frm.email.value == '') {
        alert('Campo obrigatório');
        frm.email.focus();
        return false;
    }


   if (frm.senha.value == '') {
        alert('Campo obrigatório');
        frm.senha.focus();
        return false;
    }
    if (frm.sexo[0].checked != true && frm.sexo[1].checked != true && frm.sexo[2].checked != true) {
        alert('Selecione um sexo');
        return false;
    }

    if (frm.soft1.checked == false && frm.soft2.checked == false && frm.soft3.checked == false) {
        alert('Selecione pelo menos um software');
        return false;
    }

    if (frm.navegador.value == 'Selecione') {
        alert('Selecione um navegador');
        return false;
    }

    if (frm.comentario.value == '') {
        alert('Campo obrigatório');
        frm.comentario.focus();
        return false;
    }
    return true;
}