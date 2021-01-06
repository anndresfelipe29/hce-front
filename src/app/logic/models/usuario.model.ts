// guai para  usar models en angular https://nehalist.io/working-with-models-in-angular/
export class Usuario {
    id: string;
    nombre: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}