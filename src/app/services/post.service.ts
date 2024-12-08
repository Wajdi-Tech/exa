import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postListe = [
    { id: '1', titre: "Premier post", contenu: 'détails premier post' },
    { id: '2', titre: "Deuxième post", contenu: 'détails deuxième post' },
    { id: '3', titre: "Troisième post", contenu: 'détails troisième post' }
  ];

  
  constructor(private http:HttpClient) { }
  getPosts(): Observable<any[]>
  {return this.http.get<any[]>('http://localhost:3000/listpost')
    
    ;} 

  
}
