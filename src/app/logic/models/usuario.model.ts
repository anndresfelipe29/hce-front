// guai para  usar models en angular https://nehalist.io/working-with-models-in-angular/
export class Usuario {
    private id: string;
    private nombre: string;

    constructor(object: any){
        this.id= (object.usuario) ? object.usuario:null;
    }



    public getId(){
        return this.id;
    }
    public setId(id:string){
        this.id=id;
    }

    public getNombre(){
        return this.nombre;
    }
    public setNombre(nombre:string){
        this.nombre=nombre;
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}