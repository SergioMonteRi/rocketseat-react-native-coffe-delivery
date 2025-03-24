import { Alert } from 'react-native'
import { useCallback, useEffect, useState } from 'react'

import * as Location from 'expo-location'

import { LocationData } from './types'

export const useLocation = () => {
  const [location, setLocation] = useState<LocationData | null>({
    city: 'Cidade',
    state: 'Estado',
    error: '',
  })

  const getUserLocation = useCallback(async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setLocation({
          city: 'Desconhecida',
          state: 'Desconhecido',
          error: 'Permissão negada',
        })

        return
      }

      const location = await Location.getCurrentPositionAsync({})

      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      })

      if (address.length > 0) {
        setLocation({
          city: address[0].city || 'Cidade não identificada',
          state: address[0].region || 'Estado não identificado',
        })
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível obter a localização')
      console.error(error)
    }
  }, [])

  useEffect(() => {
    getUserLocation()
  }, [getUserLocation])

  return { location, getUserLocation }
}
