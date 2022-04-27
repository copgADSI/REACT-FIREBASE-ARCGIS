import { useRef } from 'react'
import FormContainer from './FORM/FormContainer'
import useCreateMap from './Hooks/useCreateMap'

const CustomMap = () => {
    const mapRef = useRef(null)
    useCreateMap(mapRef)
    return (
        <div >
            <div className="map-view" style={{ height: 600 }} ref={mapRef} />
            <FormContainer />
        </div>

    )
}

export default CustomMap