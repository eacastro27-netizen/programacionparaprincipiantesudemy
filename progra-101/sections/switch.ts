export let weekDay: number = 3;

if ( weekDay <= 0 ){
    throw new Error("Día de la semana no es permitido");
    
} else

switch( weekDay ) {
    case 1:
        console.log('Es lunes');
        break;

    case 2:
        console.log('Es martes');
        break;

    case 3:
        console.log('Es miercoles');
        break;

        default:
            console.log('No es ni lunes, ni martes, ni miercoles');
}