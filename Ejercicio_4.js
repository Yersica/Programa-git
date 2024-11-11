import { createInterface } from 'readline';
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const personas =[];
function agregarPersona() 
{
    if (personas.length >= 6)
    {
        console.log("Se ha alcanzando el limite de personas.");
        mostrarMenu();
        return;
    }
    rl.question("Ingrese el nombre: ", (nombre) => 
        {
        rl.question("Ingrese el numero de identificacion (cedula): ", (cedula) => 
            {
                rl.question ("Ingrese la fecha de nacimiento: ", (fechaNacimiento) => 
                {
                    rl.question ("Ingrese el correo electrónico: ", (correo) => 
                    {
                        rl.question ("Ingrese la ciudad de residencia: ", (ciudadResidencia) => 
                        {
                            rl.question ("Ingrese la ciudad de origen:", (ciudadOrigen) => 
                            {
                                const persona = 
                                {
                                    nombre,
                                    cedula,
                                    fechaNacimiento,
                                    correo,
                                    ciudadResidencia,
                                    ciudadOrigen,
                                    cancionesFavoritas:[]
                                };
                                agregarCanciones(persona);
                            });
                        });
                    });
                });
            });
        });
}
    function agregarCanciones (persona) 
    {
        console.log(`Agregando canciones favoritas para ${persona.nombre}`);
        function agregarUnaCancion() 
        {
            if (persona.cancionesFavoritas.length >= 3) 
            {
                console.log("Se han agregado todas las canciones favoritas.");
                mostrarMenu();
                return;
            }
            rl.question("Ingrese el artista de la canción: ", (artista) => 
                {
                rl.question("Ingrese el título de la canción: ", (titulo) => 
                    {
                    persona.cancionesFavoritas.push({ artista, titulo }); 
                    rl.question("¿Desea agregar otra canción? (s/n): ", (respuesta)=> 
                        {
                        if (respuesta.toLowerCase() ==='s') 
                            {
                            agregarUnaCancion(); 
                            } 
                            else 
                            {
                                personas.push (persona);
                                mostrarMenu();
                            }
                        });
                    });
                });
            }
            agregarUnaCancion();
        }
        function mostrarPersonas (posicion) {
            if (posicion <0 || posicion >= personas.length){
                console.log ("Posicion invalida.");
                mostrarMenu();
                return;
            }
        const persona = personas [posicion];
        console.log("Información de la persona:");
        console.log(`Nombre: ${persona.nombre}`);
        console.log(`Cédula: ${persona.cedula}`);
        console.log(`Fecha de Nacimiento: ${persona.fechaNacimiento}`);
        console.log(`Correo Electrónico: ${persona.correo}`);
        console.log(`Ciudad de Residencia: ${persona.ciudadResidencial}`);
        console.log(`Ciudad de Origen: ${persona.ciudadOrigen}`);
        console.log("Canciones Favorites:");
        for (let i = 0; i < persona.cancionesFavoritas.length; i++){
            const cancion = persona.cancionesFavoritas[i];
            console.log(`Canción ${i + 1}:`);
            console.log(`Artista: ${cancion.artista}`);
            console.log(`Titulo: ${cancion.titulo}`);
        }
        mostrarMenu();
    }
        function mostrarMenu(){
            console.log("\nMenu:");
            console.log("a. Agregar una persona");
            console.log("b. Mostrar la información personal de una persona por posición");
            console.log("x. Salir");
            rl.question("Seleccione una opcion: ", (opcion) => {
                switch (opcion.toLowerCase()) {
                    case 'a':
                        agregarPersona();
                        break;
                        case 'b':
                            rl.question("Ingrese la posición de la persona:", (posicion) => {
                                mostrarPersonas(parseInt(posicion));
                            });
                            break;
                            case 'x':
                                rl.close();
                                break;
                                default:
                                    console.log("Opcion inavlida");
                                    mostrarMenu();
                                    break;
                                }
                            });
                        }
                        mostrarMenu();
