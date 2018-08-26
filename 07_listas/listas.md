# Criando página para as listas

## Criando os arquivos

- Crie a pasta `lists` dentro da pata `pages` com os arquivos padrões

- No arquivo `lists.js` exporte o componente e importe as dependências padrões

## Criando rota para a página de listas

- No arquivo `App.js` adicione a rota
    - Lembre de importar o arquivo `lists.js`
```js
<Route path="/" component={Lists} />
```
## Observações

- O usuário deve estar logado para acessar a página de listas
- Para isso, vamos criar uma funçõ auxiliar que nos garante isso

- Na pasta `src`, crie um arquivo chamado `utils.js`
    - Adicione a seguinte função neste aquivo

```js
export function isLogged (){
    if(localStorage.getItem("token")){
        return true
    }
    else{
        return false
    }
};
```
- Importe este arquivo no arquivo `lists.js`

- Adicone a seguinte função no arquivo `lists.js`
```js
    componentDidMount(){
        var login = isLogged();
        console.log(login)
        if (!login){
            this.props.history.push('/login');
        }
    }
```