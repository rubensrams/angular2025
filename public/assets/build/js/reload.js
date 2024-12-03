
const initReload = () => {

    var refresh = sessionStorage.getItem('refresh');
            if (refresh===null){
                location.reload();
                sessionStorage.setItem('refresh', "1");
    }

/*                 var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
                console.log('Entrando al metodo de recarga')
                    // Current Time //
                    var now = Date.now();
                    // Total Process Lenght as Minutes //
                    var tenSec = 10 * 1000;
                    // End Time of Process //
                    var plusTenSec = currentDocumentTimestamp + tenSec;
                    if (now > plusTenSec) {
                        location.reload();
                        console.log('recargando pagina')
                    }
                   

                    for (let i = 0; i < 2; i++) {
                        console.log ("Block statement execution no." + i);
                        //location.reload();
                      }
*/
                    

}