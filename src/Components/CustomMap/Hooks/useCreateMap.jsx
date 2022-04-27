import { loadModules } from 'esri-loader'
import { useEffect } from 'react'

export const useCreateMap = async (mapRef) => {
    useEffect(() => {
        let view
        loadModules(["esri/views/MapView", "esri/WebMap",], { css: true })
            .then(([MapView, WebMap]) => {
                const webMap_ = new WebMap({
                    basemap: 'topo-vector'
                })
                view = new MapView({
                    map: webMap_,
                    center: [-72.917, 5.717],
                    zoom: 8,
                    container: mapRef.current
                })
            }).catch((err) => console.log(err))
        return () => {
            if (!!view) {
                view.destroy()
                view = null
            }
        }

    }, [mapRef])
}

export default useCreateMap