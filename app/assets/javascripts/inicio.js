$(document).ready(function(){
    function requestApi(pokemon) {
        var respuesta
        $.ajax({
            url: pokemon,
            context: document.body,
            method: 'GET',
            success: function(response){
                var n = 1
                response.results.forEach(function(info){
                    let details = `<div class='container col-md-4 pokemon'>
                    <div class="card mb-5 mt-5 pt-5 pb-5" style="width: 18rem;">
                    <div class="card-body">
                      <h1 class="card-title">${info.name}</h1>
                      <a id='enlace-${n}' href="#" url="${info.url}" class="btn btn-primary pokemodal">¡Quiero ver más de este pokémon!</a>
                    </div>
                  </div>
                  </div>`
                  $('#info').append(details)
                  n = n + 1
                })
                next_url = response.next
            }
        })
    }

    var next_url
    requestApi('https://pokeapi.co/api/v2/pokemon/')
    
    function activeButton (){
        $('#btn').click(function(){
            $('#info').empty('.pokemon')
            requestApi(next_url)
        })
    }
    activeButton()

 })
