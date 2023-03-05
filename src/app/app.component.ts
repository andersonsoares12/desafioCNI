import { Component } from '@angular/core';
import { Database, set, ref, update, onValue,  } from '@angular/fire/database'; 
@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'desafioCNI';

  constructor(public database:Database){

  }

  //criando usuario conexão com firebase
  registerUser(value: any){ set(ref(this.database, 'users/' + value.username), {
    
    password: value.password,
    cpf: value.cpf,
    email: value.email,
    phone: value.phone,
    profile_picture : value.avatar,
    username: value.username 
    
  });
  alert('Usuario Criado com sucesso!!!');
}

//capturar usuario cadastrado
//buscaUser(value: any)
 //{
  //const starCountRef  = ref (this.database, 'users/' + value.username);
  //{
//onValue(starCountRef, (snapshot) => {
  //const data = snapshot.val();
  //alert(data.username);
//});

//}
//}
}
