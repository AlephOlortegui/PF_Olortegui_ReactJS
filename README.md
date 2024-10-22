# first version
- solo por ahora ahora le metodo lo de Firebase y algunos toques.


# momentos
- ItemDetail.jsx
Manejando addOne, removeOne y en handleSubmit,
dependiendo si el producto esta en carrito o no

## Porque luego de agregarlo addOne, removeOne agregaban/removian 2 veces?
- en vez de hacerlo 1 en 1
- La respuesta es que se llamaba tanto a addOne, removeOne 2 veces
- debido a que onClick={removeOne o addOne} era directamente ese 
llamabamos a update state 1 vez pero como el type button ya era submit
en handle submit tbm llamabamos a removeOne o addOne otra vez
- por lo tanto 2 veces, es la razon que se agregaba/quitaban de 2 en 2

### Solucion
- onClick={!isInCart ? removeOne : undefined}
- de este modo evitabamos que onClick se dispare.