import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Minus, Plus } from 'phosphor-react-native'

import { SizeSelectorOption } from './components/SizeSelectorOption'

import {
  FooterContainer,
  AddToCartButton,
  SizeSelectorTitle,
  AddToCartContainer,
  AddToCartButtonText,
  SizeSelectorContent,
  AddToCartQuantityText,
  SizeSelectorContainer,
  AddToCardQuantitySelectorContainer,
} from './styles'

const SIZES = [114, 140, 227]

export const Footer = () => {
  const { COLORS } = useTheme()

  const [selectedSize, setSelectedSize] = useState<number>()

  const handleSizePress = (size: number) => {
    setSelectedSize(size)
  }

  return (
    <FooterContainer>
      <SizeSelectorContainer>
        <SizeSelectorTitle>Selecione o tamanho:</SizeSelectorTitle>

        <SizeSelectorContent>
          {SIZES.map((size) => (
            <SizeSelectorOption
              key={size}
              size={size}
              handleSizePress={handleSizePress}
              isSelected={size === selectedSize}
            />
          ))}
        </SizeSelectorContent>
      </SizeSelectorContainer>

      <AddToCartContainer>
        <AddToCardQuantitySelectorContainer>
          <TouchableOpacity>
            <Minus size={20} color={COLORS.PURPLE} weight="bold" />
          </TouchableOpacity>

          <AddToCartQuantityText>1</AddToCartQuantityText>

          <TouchableOpacity>
            <Plus size={20} color={COLORS.PURPLE} weight="bold" />
          </TouchableOpacity>
        </AddToCardQuantitySelectorContainer>

        <AddToCartButton>
          <AddToCartButtonText>ADICIONAR</AddToCartButtonText>
        </AddToCartButton>
      </AddToCartContainer>
    </FooterContainer>
  )
}
