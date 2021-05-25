## Angular
O angular é um framework utilizado para aplicações frontend, baseado em componentes na sua renderização.

Inicialmente foi criado um projeto com o comando: 

` ng new "nome do projeto" `

Depois foi escolhido o tipo de formatação css no caso a selecionada foi SCSS.
e por fim a aplicação foi iniciada com o comando:

` ng serve -o `

O Angular é baseado em componentes mas há sempre um padrão de 3 arquivos aos quais compoem um com componente;

 - app.component.ts
 - app.component.html
 - app.component.scss

Responsável pela lógica e comportamento do componente
> app.component.ts

Responsável pelas tags ás quais ele componente será designado (como se ele tivesse a tag html de uma form)
> app.component.html

Responsável pela estilização do componente
> app.component.scss

A estrutura do app.component.ts é idêntica a demonstrada abaixo

```
import { Component } from '@angular/core';   // Todos os componentes possuem a importação do operador Component

@Component({                                 // As propriedades do componente são definidas nesse decorator Componente, um objeto
  selector: 'app-botao',                     // O selector identificado como ele será chamado dentro de uma estrutura html, no caso <app-root>
  templateUrl: './app-botao.component.html', // O template refere-se á notação a html do elemento
  styleUrls: ['./app-botao.component.scss']  // O styteUrl é um utilizado para definir os arquivos scss de formatação, essa propriedade é definida como um array pois pode existir mais de um arquivo scss
})

export class AppBotaoComponent { }           // Classe onde podem ser declarados métodos e variáveis para esse componente
```
Essa criação de components pode ser automatizado com o comando ``ng generate component "nome do componente"``, ele gera automaticamente a estrutura de pasta e arquivos do componente

Agora vamos analisar o arquivo `app.modules.ts` que concentra um decorator muito importante, o ``@NgModules({})``
O o ``@NgModules({})`` recebe como parâmetro um objeto com  as seguintes declarações

- declarations
- providers
- imports

```
@NgModule({
  declarations: [],   // aqui são declarados todos os componentes que serão utilizados
  imports: [],        // no imports está tudo aquilo que vem a ser utilizado com os recursos do angular por exemplo o AppRoutingModules
  providers: [],      // nos providers estão recursos externos que podem vir a serem utilizados
})
export class AppModule { }
```
### Decorators @Input e @Output

- Basicamente @Input é usado para passar dados de pai para filho e o oposto, @Output, pode ser usado quando você deseja passar dados do filho para o pai
