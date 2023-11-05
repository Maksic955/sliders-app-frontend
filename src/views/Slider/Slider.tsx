import { SlidersData } from '@/utils/types/api'
import SliderComponent from '@/components/SliderComponent'

const getData = async () => {
  const res = await fetch('http://localhost:8080/api/home')

  if(!res.ok) {
    throw new Error('Failed to fetch data')      
  }

  return res.json()
}

const Slider = async () => {
  const data: SlidersData = await getData()
  
  return <SliderComponent data={data} />
}

export default Slider;
