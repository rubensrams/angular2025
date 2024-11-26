
const initReload = () => {

                 var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
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

}