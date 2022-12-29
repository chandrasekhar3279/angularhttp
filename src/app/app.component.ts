import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'angularhttp';
private user:User = 
  {
    'id':5,
    'name': 'Chandrasekhar',
    'username': 'NTR',
    'email': 'Ntr@april.biz',
    'address': {
      'street': 'Kulas Light',
      'suite': 'Apt. 556',
      'city': 'Gwenborough',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496'
      }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
      'name': 'Cloudseed',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets'
  }
}

// private user:User = 
//   {
//     'name': 'Chandrasekhar',
//     'username': 'NTR',
//     'email': 'Sincere@april.biz',
//     'address': {
//       'street': 'Kulas Light',
//       'suite': 'Apt. 556',
//       'city': 'Gwenborough',
//       'zipcode': '92998-3874',
//       'geo': {
//         'lat': '-37.3159',
//         'lng': '81.1496'
//       }
//     },
//     'phone': '1-770-736-8031 x56442',
//     'website': 'hildegard.org',
//     'company': {
//       'name': 'Romaguera-Crona',
//       'catchPhrase': 'Multi-layered client-server neural-net',
//       'bs': 'harness real-time e-markets'
//   }
// }
  constructor(private userService: UserService){ }
  ngOnInit(): void {
     this.onGetUsers();
    //  this.onGetUser();
    this.onCreateUser();
  }
  onGetUsers():void{
    this.userService.getUsers().subscribe({
     next: (res)=>console.table(res),
     error: (e:any)=>console.log(e),
     complete: ()=>console.log('Done getting users')
  }); 
  }
  // onGetUser():void{
  //   this.userService.getUser().subscribe({
  //    next: (res)=>console.log(res),
  //    error: (e:any)=>console.log(e),
  //    complete: ()=>console.log('Done getting users')
  // }); 
  // }

  onCreateUser():void{
    this.userService.createUser(this.user ).subscribe({
     next: (res)=>console.log(res),
     error: (e:any)=>console.log(e),
     complete: ()=>console.log('User created successfully')
  }); 
  }

  onUpdateUser():void{
    this.userService.updateUser(this.user ).subscribe({
     next: (res)=>console.log(res),
     error: (e:any)=>console.log(e),
     complete: ()=>console.log('User created successfully')
  }); 
  }

    // type HttpResponse = {code: number, data: string};

    // const observable = new Observable<HttpResponse>(subscriber => {
    //   console.log('Inside subscriber...');
    //   subscriber.next({code:200,data:'this is data 1...'});
    //   subscriber.next({code:200,data:'this is data 2...'});
    //   subscriber.next({code:200,data:'this is data 3...'});
    //   // subscriber.error({code:500,msg:'an error occured'}) 
    //   setTimeout(()=>{
    //     subscriber.next({code:200,data:'This data is more data'});
    //     subscriber.complete();
    //   }, 3 * 1000);
    //   console.log('subscribe is done emitting...');
    // });

    // // subscribe will give response
    // observable.subscribe({
    //   next(response: HttpResponse){
    //     console.log('get Response',response);
    //   },
    //   error(error:any){
    //     console.log('something wrong occured:',error);
    //   },
    //   complete(){
    //     console.log('done');
    //   }
    // });
  
}
